import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rahul Kulkarni",
      location: "Hadapsar, Pune",
      rating: 5,
      text: "Technician reached within 45 minutes and fixed the cooling issue immediately. Very professional service and clear pricing. Highly reliable!",
      service: "AC Repair",
    },
    {
      name: "Sneha Deshmukh",
      location: "Kothrud, Pune",
      rating: 5,
      text: "Deep cleaning service was excellent. My AC airflow and cooling improved a lot. Team was polite, clean, and well trained.",
      service: "Deep Cleaning",
    },
    {
      name: "Amit Joshi",
      location: "Wakad, Pune",
      rating: 5,
      text: "Installation was done perfectly with proper wiring and testing. No shortcuts taken. Very satisfied with the professionalism.",
      service: "AC Installation",
    },
    {
      name: "Pooja Patil",
      location: "Baner, Pune",
      rating: 5,
      text: "Emergency service late evening and they still responded quickly. Issue resolved the same day. Great support and genuine service.",
      service: "Emergency Repair",
    },
  ];

  const stats = [
    { value: "4.9", label: "Pune Rating" },
    { value: "3,500+", label: "Happy Customers" },
    { value: "98%", label: "Customer Satisfaction" },
  ];

  return (
    <section
      id="testimonials"
      className="section-padding bg-gradient-to-br from-surface-dark via-surface-medium to-surface-dark"
    >
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-white/70 text-sm font-medium uppercase tracking-wider">
            Customer Reviews in Pune
          </span>

          <h2 className="mt-3 text-white">
            Trusted by Homes & Offices Across Pune
          </h2>

          {/* Rating Stats */}
          <div className="flex flex-wrap justify-center gap-12 mt-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-white flex items-center justify-center gap-1">
                  {stat.value}
                  {index === 0 && (
                    <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  )}
                </div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-white/30 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-white/70 text-sm">
                    {testimonial.location}
                  </div>
                </div>

                <span className="px-3 py-1 text-xs font-medium bg-white/10 text-white/80 rounded-full">
                  {testimonial.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          {[
            "Pune Verified Service",
            "Local Trusted Brand",
            "Certified Technicians",
          ].map((badge, index) => (
            <div key={index} className="flex items-center gap-2 text-white/70">
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <Star className="w-3 h-3 fill-current" />
              </div>
              <span className="text-sm font-medium">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
