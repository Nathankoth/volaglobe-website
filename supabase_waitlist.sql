-- D-Gate Waitlist Database Schema
-- Supabase SQL for waitlist table creation

-- Create waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    role TEXT NOT NULL,
    company TEXT,
    monthly_listings INTEGER,
    how_heard TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);
CREATE INDEX IF NOT EXISTS idx_waitlist_role ON waitlist(role);
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_waitlist_updated_at 
    BEFORE UPDATE ON waitlist 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Create RLS (Row Level Security) policies
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Policy for service role (serverless function)
CREATE POLICY "Service role can manage waitlist" ON waitlist
    FOR ALL USING (auth.role() = 'service_role');

-- Policy for authenticated users to read their own data (if needed)
CREATE POLICY "Users can read own waitlist entry" ON waitlist
    FOR SELECT USING (auth.email() = email);

-- Create a view for analytics (without PII)
CREATE OR REPLACE VIEW waitlist_analytics AS
SELECT 
    role,
    COUNT(*) as signup_count,
    DATE_TRUNC('day', created_at) as signup_date,
    COUNT(*) FILTER (WHERE company IS NOT NULL) as with_company,
    COUNT(*) FILTER (WHERE monthly_listings IS NOT NULL) as with_listings
FROM waitlist
GROUP BY role, DATE_TRUNC('day', created_at)
ORDER BY signup_date DESC;

-- Grant permissions
GRANT SELECT ON waitlist_analytics TO authenticated;
GRANT USAGE ON SCHEMA public TO service_role;

-- Insert sample data (optional - remove in production)
-- INSERT INTO waitlist (email, role, company, monthly_listings, how_heard) VALUES
-- ('test@example.com', 'realtor', 'Test Company', 10, 'social-media'),
-- ('demo@example.com', 'investor', 'Demo Corp', 25, 'referral');

-- Create a function to get waitlist stats
CREATE OR REPLACE FUNCTION get_waitlist_stats()
RETURNS TABLE (
    total_signups BIGINT,
    signups_by_role JSONB,
    recent_signups BIGINT,
    signups_today BIGINT
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        COUNT(*) as total_signups,
        jsonb_object_agg(role, role_count) as signups_by_role,
        COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '7 days') as recent_signups,
        COUNT(*) FILTER (WHERE created_at >= CURRENT_DATE) as signups_today
    FROM (
        SELECT 
            role,
            COUNT(*) as role_count
        FROM waitlist
        GROUP BY role
    ) role_stats;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant execute permission on the function
GRANT EXECUTE ON FUNCTION get_waitlist_stats() TO service_role;
