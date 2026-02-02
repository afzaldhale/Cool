import { MapPin, ChevronRight } from "lucide-react";

const LocationsSection = () => {
  const puneAreas = [
    { name: "Kothrud", popular: true },
    { name: "Hinjewadi", popular: true },
    { name: "Wakad", popular: true },
    { name: "Pimpri-Chinchwad", popular: true },
    { name: "Hadapsar", popular: true },
    { name: "Baner", popular: false },
    { name: "Aundh", popular: false },
    { name: "Viman Nagar", popular: false },
    { name: "Kharadi", popular: false },
    { name: "Shivaji Nagar", popular: false },
    { name: "Deccan", popular: false },
    { name: "Koregaon Park", popular: false },
    { name: "Magarpatta", popular: false },
    { name: "Pune Station Area", popular: false },
    { name: "Swargate", popular: false },
  ];

  return (
    <section id="locations" className="section-padding bg-background">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
            Service Locations
          </span>
          <h2 className="mt-3 text-foreground">
            Serving All Major Areas in Pune
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Our certified technicians cover all major localities across Pune city. Same-day service available in most areas.
          </p>
        </div>

        {/* City Header Card */}
        <div className="mb-8 p-6 rounded-2xl border-2 border-foreground bg-foreground text-background">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center">
                <MapPin className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-background">Pune</h3>
                <p className="text-background/70">Maharashtra, India</p>
              </div>
            </div>
            <span className="px-4 py-2 text-sm font-semibold bg-background text-foreground rounded-full">
              ✓ All Areas Available
            </span>
          </div>
        </div>

        {/* Popular Areas */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-foreground mb-4">Popular Areas</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {puneAreas.filter(area => area.popular).map((area, index) => (
              <div
                key={index}
                className="p-4 rounded-xl border-2 border-foreground bg-foreground text-background text-center font-medium hover:bg-foreground/90 transition-colors cursor-pointer"
              >
                {area.name}
              </div>
            ))}
          </div>
        </div>

        {/* All Other Areas */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-foreground mb-4">Other Service Areas</h4>
          <div className="flex flex-wrap gap-3">
            {puneAreas.filter(area => !area.popular).map((area, index) => (
              <span
                key={index}
                className="px-4 py-2 text-sm font-medium text-foreground bg-muted border-2 border-foreground/20 rounded-full hover:border-foreground hover:bg-muted/80 transition-all cursor-pointer"
              >
                {area.name}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="p-8 rounded-2xl bg-muted border-2 border-foreground/20 text-center">
          <h3 className="text-xl font-bold text-foreground mb-2">
            Don't see your area listed?
          </h3>
          <p className="text-muted-foreground mb-4">
            We cover most localities in Pune. Contact us to check availability in your specific area.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-semibold rounded-lg hover:bg-foreground/90 transition-colors"
          >
            Check My Area
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
