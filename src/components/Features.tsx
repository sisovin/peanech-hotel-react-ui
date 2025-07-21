import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Zap, 
  Users, 
  BarChart3, 
  Calendar, 
  MessageSquare,
  CreditCard,
  Globe,
  Lock
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure Authentication",
      description: "Advanced security protocols with multi-factor authentication for admin and user access.",
      color: "text-primary"
    },
    {
      icon: Zap,
      title: "Real-time Management",
      description: "Instant room status updates, live booking notifications, and dynamic availability tracking.",
      color: "text-accent"
    },
    {
      icon: Users,
      title: "User Management",
      description: "Comprehensive guest profiles, registration systems, and personalized dashboard experiences.",
      color: "text-secondary"
    },
    {
      icon: Calendar,
      title: "Smart Booking Engine",
      description: "Intelligent room allocation, automated confirmations, and flexible booking modifications.",
      color: "text-primary"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Detailed insights, occupancy reports, revenue tracking, and predictive analytics.",
      color: "text-accent"
    },
    {
      icon: MessageSquare,
      title: "Communication Hub",
      description: "Integrated complaint system, feedback management, and guest support workflows.",
      color: "text-secondary"
    },
    {
      icon: CreditCard,
      title: "Payment Processing",
      description: "Secure payment gateways, automated billing, and comprehensive transaction history.",
      color: "text-primary"
    },
    {
      icon: Globe,
      title: "Multi-platform Access",
      description: "Responsive design ensuring seamless experience across all devices and browsers.",
      color: "text-accent"
    },
    {
      icon: Lock,
      title: "Data Protection",
      description: "GDPR compliant data handling, encrypted storage, and secure backup systems.",
      color: "text-secondary"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              POWERFUL FEATURES
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the comprehensive suite of tools designed to revolutionize hotel management 
            and enhance guest experiences with cutting-edge technology.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-500 glow-hover group"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="bg-gradient-primary rounded-2xl p-4 group-hover:animate-pulse-glow transition-all duration-300">
                    <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                </div>
                
                <h3 className="text-xl font-orbitron font-semibold mb-4 text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-orbitron font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
              Ready to Transform Your Hotel?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join the future of hospitality management with our advanced HMS platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:shadow-glow hover:scale-105 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="glass border-primary/50 text-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;