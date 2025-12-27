export function Hero() {
  const { SITE_NAME } = process.env;

  return (
    <section className="relative flex h-[70vh] min-h-[500px] items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop')"
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Shop Name */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold text-white drop-shadow-lg md:text-7xl lg:text-8xl">
          {SITE_NAME || 'Ski Shop'}
        </h1>
        <p className="mt-4 text-xl text-white drop-shadow-md md:text-2xl">
          Your Adventure Starts Here
        </p>
      </div>
    </section>
  );
}

