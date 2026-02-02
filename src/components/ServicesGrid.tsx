import {
  Wind,
  Droplets,
  Thermometer,
  Wrench,
  Snowflake,
  Gauge,
  Settings,
} from "lucide-react";

type Service = {
  title: string;
  description: string;
  price: string;
  icon: React.ElementType;
};

const SERVICES: Service[] = [
  {
    icon: Droplets,
    title: "1.5 Ton AC Foam Jet Deep Cleaning",
    description:
      "High-pressure foam jet cleaning of indoor unit, filters, blower, and coils.",
    price: "599",
  },
  {
    icon: Thermometer,
    title: "1.5 Ton AC Gas Top-Up",
    description:
      "Professional refrigerant gas top-up with pressure testing.",
    price: "999",
  },
  {
    icon: Gauge,
    title: "1.5 Ton AC Complete Gas Filling",
    description:
      "Complete gas evacuation, vacuuming, and fresh refrigerant filling.",
    price: "1999",
  },
  {
    icon: Wind,
    title: "1.5 Ton AC Installation",
    description:
      "Professional split AC installation with safety checks.",
    price: "1399",
  },
  {
    icon: Wrench,
    title: "1.5 Ton AC Uninstallation",
    description:
      "Safe AC dismantling without gas leakage.",
    price: "599",
  },
  {
    icon: Snowflake,
    title: "Cooling Issue Diagnosis",
    description:
      "Cooling problem inspection and troubleshooting.",
    price: "399",
  },
  {
    icon: Settings,
    title: "Annual AC Maintenance (AMC)",
    description:
      "Complete yearly AC maintenance package.",
    price: "1499",
  },
  {
    icon: Gauge,
    title: "AC PCB Repair",
    description:
      "PCB diagnosis and repair for all AC models.",
    price: "Inspection Based",
  },
];

const ServicesGrid = () => {
  /** ---------------- Schema JSON ---------------- */

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SaharaCoolTech",
    "url": "https://saharacooltech.com",
    "description":
      "Affordable AC installation, repair, gas filling, and maintenance services.",
    "priceRange": "₹399 - ₹2999",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
    },
    "areaServed": {
      "@type": "Place",
      "name": "India",
    },
  };

  const serviceSchema = SERVICES.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.title,
    "provider": {
      "@type": "LocalBusiness",
      "name": "SaharaCoolTech",
      "url": "https://saharacooltech.com",
    },
    "areaServed": {
      "@type": "Place",
      "name": "India",
    },
    "description": service.description,
    ...(Number(service.price)
      ? {
          "offers": {
            "@type": "Offer",
            "priceCurrency": "INR",
            "price": service.price,
            "availability": "https://schema.org/InStock",
          },
        }
      : {}),
  }));

  return (
    <>
      {/* -------- Schema Markup (React Safe) -------- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      {/* -------- UI -------- */}
      <section id="services" className="section-padding bg-muted/30">
        <div className="container-max">
          <div className="text-center mb-16">
            <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Our Services
            </span>
            <h2 className="mt-3 text-foreground">
              AC Services with Transparent Pricing
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Reliable AC installation, gas filling, cleaning, and repair services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-background rounded-xl border border-border hover:shadow-lg transition"
              >
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-3">
                  {service.description}
                </p>

                <div className="text-primary font-semibold">
                  {Number(service.price) ? `₹${service.price}` : service.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesGrid;
