import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // Mailto fallback (can be replaced with API call when backend is ready)
    window.location.href = `mailto:invest@volarisglobal.com?subject=Newsletter Subscription&body=Please subscribe ${encodeURIComponent(email)} to the Volaris newsletter.`;
    
    toast({
      title: "Thank you!",
      description: "We'll be in touch with updates soon.",
    });
    setEmail("");
  };

  return (
    <section id="newsletter" className="py-16 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Mail className="w-6 h-6 text-accent" />
            <h4 className="text-xl md:text-2xl font-heading font-semibold text-foreground">
              Newsletter
            </h4>
          </div>
          
          <p className="text-base text-foreground/80 mb-6 lead">
            Subscribe to occasional investor updates and insights.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              aria-label="Email address for newsletter"
              required
            />
            <Button 
              type="submit"
              className="bg-accent hover:bg-accent-dark text-white"
            >
              Subscribe
            </Button>
          </form>

          <p className="caption mt-4 text-muted-foreground">
            We respect your privacy. No spam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
