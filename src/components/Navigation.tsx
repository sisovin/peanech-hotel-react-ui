import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  Home, 
  Settings, 
  Users, 
  Calendar, 
  MessageSquare, 
  BarChart3,
  LogIn 
} from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { icon: Home, label: "Home", href: "#home" },
    { icon: Calendar, label: "Bookings", href: "#bookings" },
    { icon: Users, label: "Rooms", href: "#rooms" },
    { icon: MessageSquare, label: "Support", href: "#support" },
    { icon: BarChart3, label: "Analytics", href: "#analytics" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-primary rounded-lg p-2">
              <Settings className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-orbitron font-bold bg-gradient-hero bg-clip-text text-transparent">
              Peanech-HMS
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors duration-200"
              >
                <item.icon className="h-4 w-4 mr-2" />
                {item.label}
              </Button>
            ))}
          </div>
          
          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </Button>
            <Button 
              size="sm" 
              className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300"
            >
              Admin Access
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                size="sm"
                className="w-full justify-start text-muted-foreground hover:text-foreground hover:bg-primary/10"
              >
                <item.icon className="h-4 w-4 mr-3" />
                {item.label}
              </Button>
            ))}
            <div className="pt-4 border-t border-border/50 space-y-2">
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <LogIn className="h-4 w-4 mr-3" />
                Login
              </Button>
              <Button size="sm" className="w-full bg-gradient-primary text-primary-foreground">
                Admin Access
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;