import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Shield } from "lucide-react";
import heroImage from "@/assets/hero-hotel.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 animate-float">
        <div className="glass rounded-full p-4 animate-pulse-glow">
          <Star className="h-8 w-8 text-accent" />
        </div>
      </div>
      
      <div className="absolute bottom-32 left-32 animate-float" style={{ animationDelay: '1s' }}>
        <div className="glass rounded-full p-4">
          <Shield className="h-6 w-6 text-primary" />
        </div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="space-y-8">
          {/* Logo/Brand */}
          <div className="inline-flex items-center space-x-3">
            <div className="bg-gradient-primary rounded-lg p-3 glow-primary">
              <Users className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-orbitron font-bold bg-gradient-hero bg-clip-text text-transparent">
              Peanech-HMS
            </h1>
          </div>
          
          {/* Main Heading */}
          <div className="space-y-4">
            <h2 className="text-6xl md:text-8xl font-orbitron font-black tracking-tight">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                FUTURE OF
              </span>
            </h2>
            <h3 className="text-5xl md:text-7xl font-orbitron font-bold text-foreground">
              HOSPITALITY
            </h3>
          </div>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience next-generation hotel management with our cutting-edge platform. 
            Seamless bookings, intelligent room management, and unparalleled guest experiences.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-gradient-primary text-primary-foreground hover:shadow-glow hover:scale-105 transition-all duration-300 text-lg px-8 py-4 rounded-full font-semibold group"
            >
              Admin Portal
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="glass border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-4 rounded-full font-semibold"
            >
              Guest Portal
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto">
            <div className="glass rounded-2xl p-6 glow-hover">
              <div className="text-3xl font-orbitron font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime Guarantee</div>
            </div>
            <div className="glass rounded-2xl p-6 glow-hover">
              <div className="text-3xl font-orbitron font-bold text-accent mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
            <div className="glass rounded-2xl p-6 glow-hover">
              <div className="text-3xl font-orbitron font-bold text-secondary mb-2">5★</div>
              <div className="text-muted-foreground">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;