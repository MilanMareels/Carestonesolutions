import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero.webp')",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-blue-900/90 via-blue-800/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Professioneel
              <br />
              <span className="text-blue-300">Vastgoed Onderhoud</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Van schilderwerken tot coatings, van cleaning tot algemeen onderhoud. Wij zorgen ervoor dat uw vastgoed er altijd perfect uitziet en optimaal functioneert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact" className="rounded-button bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold transition-colors text-center">
                Gratis Offerte Aanvragen
              </Link>
              <Link href="#services" className="rounded-button border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold transition-colors text-center">
                Onze Diensten
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
