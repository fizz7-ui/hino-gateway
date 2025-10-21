import { Shield, Users, Globe, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Shield, label: "Government Approved", value: "Since 1267" },
    { icon: Users, label: "Workers Placed", value: "10,000+" },
    { icon: Globe, label: "Countries", value: "15+" },
    { icon: TrendingUp, label: "Success Rate", value: "98%" },
  ];

  const features = [
    "Government-approved Sending Organization (SO) by Bangladesh & Japan",
    "Transparent and ethical recruitment process",
    "Comprehensive pre-departure training programs",
    "End-to-end visa processing support",
    "Legal and hassle-free documentation",
    "Post-placement support and guidance",
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-primary">Royal Rolls</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner in international recruitment since 1267
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-subtle border-2 border-border rounded-xl hover:border-primary transition-all duration-300 hover:shadow-red"
            >
              <div className="inline-block p-4 bg-primary/10 rounded-xl mb-4">
                <stat.icon className="text-primary" size={32} />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-card border border-border rounded-xl hover:border-primary transition-colors"
              >
                <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-foreground font-medium leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
