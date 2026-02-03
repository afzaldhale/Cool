const brands = [
  "/assets/lg-logo.png",
  "/assets/daikin-logo.png",
  "/assets/voltas-logo.png",
  "/assets/bluestar-logo.png",
  "/assets/hitachi-logo.png",
];

export default function BrandsMarquee() {
  return (
    <section className="py-14 bg-muted/40 overflow-hidden">
      <div className="container-max mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          We Deal in All Major AC Brands
        </h2>
        <p className="text-muted-foreground mt-2">
          Genuine products • Authorised dealers • Best prices
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee gap-16 hover:[animation-play-state:paused]">
          {[...brands, ...brands].map((src, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[220px]"
            >
              <img
                src={src}
                alt="AC Brand"
                className="h-20 md:h-24 object-contain opacity-80 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
