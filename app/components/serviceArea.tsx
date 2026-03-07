import { FaMapMarkerAlt } from "react-icons/fa";

export default function ServiceArea() {
  return (
    <section id="werkgebied" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm mb-6">
          <FaMapMarkerAlt />
          <span>Ons Werkgebied</span>
        </div>

        <h2 className="text-4xl font-bold text-gray-900 mb-6">Actief in Belgie en omstreken</h2>

        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          Zoekt u een specialist voor dakreiniging, gevelonderhoud of schilderwerken? Carestonesolutions is lokaal verankerd. Vanuit onze basis komen wij vlot naar u toe, overal in{" "}
          <strong>Belgie en ruime omstreken</strong>.
        </p>

        <p className="text-lg text-gray-600 leading-relaxed">
          Omdat wij lokaal werken, garanderen we een snelle service en transparante verplaatsingskosten voor zowel particulieren als bedrijven. Neem gerust contact op om te bekijken of we ook bij u
          langskomen!
        </p>
      </div>
    </section>
  );
}
