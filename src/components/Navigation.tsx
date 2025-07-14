import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-primary">Grinders FX</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#about" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </a>
              <a href="#pricing" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Pricing
              </a>
              <a href="#contact" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </a>
              <a href="#dashboard" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Dashboard
              </a>
            </div>
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hidden md:flex"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border">
            <a href="#home" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
              About
            </a>
            <a href="#pricing" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
              Pricing
            </a>
            <a href="#contact" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </a>
            <a href="#dashboard" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
              Dashboard
            </a>
            <div className="px-3 py-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-full justify-start"
              >
                {theme === "dark" ? <Sun className="h-4 w-4 mr-2" /> : <Moon className="h-4 w-4 mr-2" />}
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;