import { Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 93221 97433",
      subtitle: "Mon–Sun, 24/7",
      link: "tel:+919322197433",
    },
    {
      icon: Mail,
      title: "WhatsApp Us",
      value: "+91 93221 97433",
      subtitle: "Quick response guaranteed",
      link: "https://wa.me/919322197433",
    },
    {
      icon: Clock,
      title: "Working Hours",
      value: "24 Hours / 7 Days",
      subtitle: "Always available",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="mt-3 text-foreground">
            Book Your Service
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
            Call or WhatsApp us directly and our team will assist you within 30 minutes.
            Emergency services available 24/7.
          </p>
        </div>

        {/* Centered Contact Cards */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border
                hover:border-primary/40 hover:shadow-lg
                transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>

                <div className="text-sm text-muted-foreground font-medium mb-2">
                  {item.title}
                </div>

                {item.link ? (
                  <a
                    href={item.link}
                    className="font-semibold text-foreground text-base hover:text-primary transition-colors block"
                  >
                    {item.value}
                  </a>
                ) : (
                  <div className="font-semibold text-foreground text-base">
                    {item.value}
                  </div>
                )}

                <div className="text-sm text-muted-foreground mt-2">
                  {item.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
