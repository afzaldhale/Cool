import { Phone, MessageCircle, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const PHONE_NUMBER = "+919322197433";
const WHATSAPP_LINK = "https://wa.me/919322197433";

const HeroSection = () => {
  const highlights = [
    { text: "Same Day Service" },
    { text: "Expert Technicians" },
    { text: "Affordable Rates" },
  ];

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, hsl(180 30% 95%) 0%, hsl(175 25% 93%) 50%, hsl(180 20% 96%) 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-20 right-1/4 w-64 h-64 rounded-full opacity-40"
        style={{
          background:
            "linear-gradient(135deg, hsl(30 85% 70% / 0.3) 0%, hsl(30 80% 60% / 0.2) 100%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-40 right-20 w-48 h-48 rounded-full opacity-30"
        style={{
          background:
            "linear-gradient(135deg, hsl(185 65% 50% / 0.3) 0%, hsl(180 55% 45% / 0.2) 100%)",
          filter: "blur(50px)",
        }}
      />

      <div className="container-max section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md mb-8 animate-fade-up">
              <span className="text-secondary text-lg">⚡</span>
              <span className="text-primary font-medium text-sm">
                Trusted by 5000+ Pune Homes
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="text-foreground mb-2 animate-fade-up leading-tight"
              style={{ animationDelay: "0.1s" }}
            >
              Expert AC
              <br />
              Services
              <span className="block text-primary">in Pune</span>
            </h1>

            {/* Subheadline */}
            <p
              className="text-lg text-muted-foreground mb-8 leading-relaxed animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Fast, reliable, and affordable AC repair, servicing & installation.
              Keep your home cool with Sahara Cool Tech.
            </p>

            {/* Highlights */}
            <div
              className="flex flex-wrap gap-6 mb-8 animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium text-sm">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              {/* Call Button */}
              <a href={`tel:${PHONE_NUMBER}`}>
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-6 rounded-xl shadow-lg w-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </a>

              {/* WhatsApp Button */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-6 rounded-xl w-full"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </Button>
              </a>
            </div>

            {/* Rating */}
            <div
              className="flex items-center gap-4 animate-fade-up"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex -space-x-2">
                {["A", "R", "S", "P"].map((letter, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-white"
                    style={{
                      backgroundColor: [
                        "hsl(185 65% 35%)",
                        "hsl(30 85% 55%)",
                        "hsl(145 60% 45%)",
                        "hsl(220 70% 50%)",
                      ][i],
                    }}
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  4.9/5 from 500+ reviews
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div
            className="hidden lg:flex justify-center animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative">
              <div
                className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-50"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(30 85% 70%) 0%, hsl(30 80% 60%) 100%)",
                }}
              />
              <div
                className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full opacity-40"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(185 65% 60%) 0%, hsl(180 55% 50%) 100%)",
                }}
              />

              <div className="relative bg-white rounded-3xl shadow-2xl p-10 w-80">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <svg
                      className="w-10 h-10 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    Professional Service
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    All brands covered
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Split AC • Window AC • Cassette AC
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </section>
  );
};

export default HeroSection;
