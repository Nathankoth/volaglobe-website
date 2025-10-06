import { siteConfig } from "@/config/site";

interface LogoProps {
  onClick?: () => void;
  className?: string;
  alt?: string;
  showMarkOnly?: boolean;
}

const Logo = ({ 
  onClick, 
  className = "", 
  alt = "Volaris Global",
  showMarkOnly = false 
}: LogoProps) => {
  const logoSource = showMarkOnly ? siteConfig.navigation.logo.mark : siteConfig.navigation.logo.full;
  const logoAlt = alt;
  
  const logoStyles = {
    height: showMarkOnly ? '56px' : '72px',
    maxHeight: showMarkOnly ? '56px' : '72px',
    width: 'auto',
    display: 'block'
  };

  const LogoElement = () => (
    <img 
      src={logoSource} 
      alt={logoAlt} 
      className={`brand-logo ${className}`}
      style={logoStyles}
    />
  );

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className="flex items-center hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-transparent rounded"
        aria-label={`${logoAlt} — brand logo`}
      >
        <LogoElement />
      </button>
    );
  }

  return <LogoElement />;
};

export default Logo;
