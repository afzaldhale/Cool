import React, { useMemo } from "react";
import {
  Wind,
  Droplets,
  Thermometer,
  Wrench,
  Snowflake,
  Gauge,
  Settings,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ---------------- Types ---------------- */

type Service = {
  title: string;
  description: string;
  price: string;
  icon: LucideIcon;
  image: string;
  alt: string;
};

/* ---------------- Component ---------------- */

const ServicesGrid = () => {
  const SERVICES: Service[] = useMemo(
    () => [
      {
        icon: Droplets,
        title: "1.5 Ton AC Foam Jet Deep Cleaning",
        description:
          "High-pressure foam jet cleaning of indoor unit, filters, blower, and coils.",
        price: "599",
        image: "/assets/AC_Foam_Jet_Deep_Cleaning.jpeg",
        alt: "AC foam jet deep cleaning service",
      },
      {
        icon: Thermometer,
        title: "1.5 Ton AC Gas Top-Up",
        description:
          "Professional refrigerant gas top-up with pressure testing.",
        price: "999",
        image: "/assets/AC_Gas.jpg",
        alt: "AC gas top up service",
      },
      {
        icon: Gauge,
        title: "1.5 Ton AC Complete Gas Filling",
        description:
          "Complete gas evacuation, vacuuming, and fresh refrigerant filling.",
        price: "1999",
        image: "/assets/AC_Gas.jpg",
        alt: "AC complete gas filling service",
      },
      {
        icon: Wind,
        title: "1.5 Ton AC Installation",
        description:
          "Professional split AC installation with safety checks.",
        price: "1399",
        image: "/assets/AC_Installation.jpeg",
        alt: "Split AC installation service",
      },
      {
        icon: Wrench,
        title: "1.5 Ton AC Uninstallation",
        description:
          "Safe AC dismantling without gas leakage.",
        price: "599",
        image: "/assets/AC-Uninstallation.jpg",
        alt: "AC uninstallation service",
      },
      {
        icon: Snowflake,
        title: "Cooling Issue Diagnosis",
        description:
          "Cooling problem inspection and troubleshooting.",
        price: "399",
        image: "/assets/Cooling_Issue.jpeg",
        alt: "AC cooling issue diagnosis",
      },
      {
        icon: Settings,
        title: "Annual AC Maintenance (AMC)",
        description:
          "Complete yearly AC maintenance package.",
        price: "1499",
        image: "/assets/Annual_AC_Maintenance.jpeg",
        alt: "Annual AC maintenance service",
      },
      {
        icon: Gauge,
        title: "AC PCB Repair",
        description:
          "PCB diagnosis and repair for all AC models.",
        price: "Inspection Based",
        image: "/assets/AC_PCB_Repair.jpg",
        alt: "AC PCB repair service",
      },
    ],
    []
  );

  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container-max">
        {/* Header */}
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

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="group bg-background rounded-xl border border-border overflow-hidden transition hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] w-full bg-muted overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-lg font-semibold mb-2 leading-snug">
                  {service.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4">
                  {service.description}
                </p>

                <div className="text-primary font-semibold text-lg">
                  {Number(service.price) ? `₹${service.price}` : service.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
