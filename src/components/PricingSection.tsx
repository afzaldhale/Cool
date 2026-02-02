import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/919322197433";

const PricingSection = () => {
  const pricingPlans = [
    {
      name: "Basic Service",
      price: "₹499",
      description: "Essential AC maintenance",
      features: [
        "Filter cleaning",
        "Basic inspection",
        "Dust removal",
        "Performance check",
        "30-day warranty",
      ],
      popular: false,
    },
    {
      name: "Deep Cleaning",
      price: "₹650",
      description: "Complete AC overhaul",
      features: [
        "Full disassembly",
        "Coil deep cleaning",
        "Drain pipe cleaning",
        "Anti-bacterial treatment",
        "Gas pressure check",
        "90-day warranty",
      ],
      popular: true,
    },
    {
      name: "Gas Refilling",
      price: "₹1500",
      description: "Complete gas top-up",
      features: [
        "Leak detection",
        "Gas refilling",
        "Pressure optimization",
        "Performance testing",
        "6-month warranty",
      ],
      popular: false,
    },
    {
      name: "Installation",
      price: "₹1400",
      description: "Professional setup",
      features: [
        "Site inspection",
        "Expert installation",
        "Copper piping (3m)",
        "Electrical connection",
        "Testing & calibration",
        "1-year warranty",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="section-padding bg-secondary">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Transparent Pricing
          </span>
          <h2 className="mt-3 text-foreground">
            Service Packages
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            No hidden charges. All prices include service visit and labor costs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 card-hover ${
                plan.popular
                  ? "bg-primary text-primary-foreground ring-2 ring-primary shadow-lg"
                  : "bg-card text-card-foreground border border-border shadow-md"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-1.5 bg-white text-primary rounded-full text-sm font-medium shadow-md">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <h3
                className={`text-xl font-semibold mb-2 ${
                  plan.popular ? "text-primary-foreground" : "text-foreground"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-sm mb-6 ${
                  plan.popular
                    ? "text-primary-foreground/80"
                    : "text-muted-foreground"
                }`}
              >
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span
                  className={`text-4xl font-bold ${
                    plan.popular ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-sm ${
                    plan.popular
                      ? "text-primary-foreground/70"
                      : "text-muted-foreground"
                  }`}
                >
                  {" "}
                  / service
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.popular
                          ? "text-primary-foreground"
                          : "text-primary"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.popular
                          ? "text-primary-foreground/90"
                          : "text-foreground"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button -> WhatsApp */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant={plan.popular ? "secondary" : "default"}
                  className="w-full"
                >
                  Book Now
                </Button>
              </a>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            Need a custom quote?{" "}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:no-underline font-medium"
            >
              Contact us
            </a>{" "}
            for enterprise and bulk service pricing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;  