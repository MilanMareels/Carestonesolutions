import Image from "next/image";
import { FaMapMarkerAlt, FaCheck } from "react-icons/fa";

export default function ServiceArea() {
  const locations = ["Antwerpen Centrum", "Merksem, Ekeren & Schoten", "Brasschaat & Kapellen", "Deurne, Borsbeek & Wijnegem", "Waasland (o.a. Beveren, Sint-Niklaas)", "Voorkempen & Mechelen-Noord"];

  return (
    <section id="werkgebied" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm mb-6">
              <FaMapMarkerAlt />
              <span>Ons Werkgebied</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Actief in Antwerpen en 40 km omstreken</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Zoekt u een specialist voor dakreiniging, gevelonderhoud of schilderwerken? CareStone Solutions is lokaal verankerd. Vanuit onze basis komen wij vlot naar u toe, overal binnen een{" "}
              <strong>straal van 40 kilometer rond Antwerpen</strong>.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Omdat wij in de regio werken, garanderen we een snelle service en transparante verplaatsingskosten voor zowel particulieren als bedrijven.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Veelbezochte regio&apos;s:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {locations.map((loc, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <FaCheck className="text-green-500 mr-3 shrink-0" />
                  <span className="font-medium">{loc}</span>
                </li>
              ))}
            </ul>

            <div className="p-5 bg-white border-l-4 border-blue-600 rounded-r-lg shadow-sm">
              <p className="text-sm text-gray-600">
                <strong>Woont u net buiten deze 40km zone?</strong> Neem gerust contact op. Voor totaalprojecten en grotere reinigingswerken maken we graag een uitzondering.
              </p>
            </div>
          </div>

          <div className="relative h-100 sm:h-125 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
            <Image
              src="/werkgebied-antwerpen.webp"
              alt="Kaart werkgebied CareStone Solutions - 40km rond Antwerpen en Merksem"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
            />

            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow font-semibold text-blue-800 text-sm">📍 Straal van 40 km</div>
          </div>
        </div>
      </div>
    </section>
  );
}
