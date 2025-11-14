import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary" />
            <span className="text-lg font-bold">MindSync</span>
          </div>
          
          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} MindSync. Building the future of software.
          </p>
          
          <div className="flex gap-6">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              About
            </a>
            <a href="#platform" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Platform
            </a>
            <Link to="/team" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Team
            </Link>
            <a 
              href="https://wa.me/963997969712" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
