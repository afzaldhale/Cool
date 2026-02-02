import { Zap, Clock, ShieldCheck, Wrench } from "lucide-react";

const ServiceHighlights = () => {
  const highlights = [
    {
      icon: Zap,
      title: "Fast Response",
      description: "Quick arrival within 60 minutes of booking. We value your time.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock emergency services for your comfort needs.",
    },
    {
      icon: ShieldCheck,
      title: "Certified Experts",
      description: "Factory-trained technicians with years of experience.",
    },
    {
      icon: Wrench,
      title: "Quality Parts",
      description: "Only genuine spare parts with manufacturer warranty.",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-foreground">
            Service Excellence Guaranteed
          </h2>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-muted/50 border border-border hover:bg-muted hover:border-muted-foreground/20 transition-all duration-300 card-hover"
            >
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-b border-border">
          {[
            { value: "10K+", label: "Happy Customers" },
            { value: "15+", label: "Years Experience" },
            { value: "50+", label: "Expert Technicians" },
            { value: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
