import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Over Carestonesolutions</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              CareStone Solutions is gespecialiseerd in professionele dak- en gevelreiniging, beschermende coatings en totaal vastgoedonderhoud. Wij helpen particulieren en bedrijven om hun gebouwen
              weer in topconditie te brengen én te beschermen tegen slijtage, vervuiling en weersinvloeden.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Met vakkennis, professionele materialen en een oog voor detail zorgen wij voor duurzame resultaten en een verzorgde uitstraling van elk pand. Wij reinigen, beschermen, vernieuwen en
              onderhouden gebouwen zodat ze langer meegaan en er verzorgd blijven uitzien.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-xl font-bold text-blue-600 mb-2">✓</div>
                <div className="text-sm font-semibold text-gray-800">Betrouwbaar</div>
                <div className="text-xs text-gray-500 mt-1">Transparante offertes</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-blue-600 mb-2">✓</div>
                <div className="text-sm font-semibold text-gray-800">Vakkundig</div>
                <div className="text-xs text-gray-500 mt-1">Ervaren vakmensen</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-blue-600 mb-2">✓</div>
                <div className="text-sm font-semibold text-gray-800">Resultaatgericht</div>
                <div className="text-xs text-gray-500 mt-1">Oog voor detail</div>
              </div>
            </div>
          </div>

          <div className="relative mb-6 sm:mb-0">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/logo-carestonesolutions.webp" alt="Carestonesolutions logo" loading="lazy" className="w-full h-full object-cover object-top" width={100} height={100} />
            </div>

            <div className="absolute -bottom-2 -right-2 sm:-bottom-6 sm:-right-6 bg-blue-600 text-white p-4 sm:p-6 rounded-2xl shadow-xl">
              <div className="text-xl sm:text-2xl font-bold">Duurzaam</div>
              <div className="text-sm sm:text-base text-blue-200">Beschermd</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
