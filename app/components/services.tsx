import Link from "next/link";
import { IconType } from "react-icons";
import { FaWrench, FaBroom, FaShieldAlt, FaPaintBrush, FaArrowRight, FaHome, FaWater } from "react-icons/fa";

// Bepaal exact welke kleuren we ondersteunen
type ColorTheme = "blue" | "green" | "purple" | "orange" | "teal" | "red";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: IconType;
  color: ColorTheme;
}

const services: Service[] = [
  {
    id: "dakreiniging",
    title: "Dakreiniging",
    description: "Wij verwijderen mos, algen en hardnekkige vervuiling met veilige en aangepaste technieken. Resultaat: een proper dak en langere levensduur.",
    icon: FaBroom,
    color: "blue",
  },
  {
    id: "dakcoating",
    title: "Dakcoating",
    description: "Een duurzame, waterafstotende beschermlaag die nieuwe vervuiling vertraagt en de levensduur van uw dak aanzienlijk verlengt.",
    icon: FaShieldAlt,
    color: "purple",
  },
  {
    id: "gevelreiniging",
    title: "Gevelreiniging",
    description: "Wij reinigen gevels grondig en veilig, aangepast aan het type materiaal. Resultaat: een frisse, verzorgde uitstraling van uw woning of gebouw.",
    icon: FaHome,
    color: "green",
  },
  {
    id: "schilderwerken",
    title: "Schilderwerken",
    description: "Professioneel binnen- en buitenschilderwerk met kwalitatieve verf en een perfecte afwerking. Voor een nette, moderne uitstraling.",
    icon: FaPaintBrush,
    color: "orange",
  },
  {
    id: "oprit-terras",
    title: "Oprit- & Terrasreiniging",
    description: "Wij reinigen grondig en veilig mos, algen en weersinvloeden. Resultaat: een propere, veilige en representatieve buitenomgeving.",
    icon: FaWater,
    color: "teal",
  },
  {
    id: "vastgoedzorg",
    title: "Vastgoedzorg & Onderhoud",
    description: "Wij verzorgen het totaalonderhoud van gebouwen zodat uw vastgoed zijn waarde behoudt. Zorgeloos beheer en duurzame bescherming.",
    icon: FaWrench,
    color: "red",
  },
];

interface ColorClassConfig {
  bg: string;
  text: string;
  hover: string;
}

// Gebruik Record om ervoor te zorgen dat alle kleuren uit ColorTheme een configuratie hebben
const colorClasses: Record<ColorTheme, ColorClassConfig> = {
  blue: { bg: "bg-blue-100", text: "text-blue-600", hover: "hover:text-blue-700" },
  green: { bg: "bg-green-100", text: "text-green-600", hover: "hover:text-green-700" },
  purple: { bg: "bg-purple-100", text: "text-purple-600", hover: "hover:text-purple-700" },
  orange: { bg: "bg-orange-100", text: "text-orange-600", hover: "hover:text-orange-700" },
  teal: { bg: "bg-teal-100", text: "text-teal-600", hover: "hover:text-teal-700" },
  red: { bg: "bg-red-100", text: "text-red-600", hover: "hover:text-red-700" },
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Onze Diensten</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Van daken en gevels tot opritten en schilderwerken - wij bieden duurzame oplossingen die schade voorkomen en de waarde van uw vastgoed verhogen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            const colors = colorClasses[service.color];

            return (
              <div key={service.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
                <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className={`${colors.text} text-2xl`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 min-h-20">{service.description}</p>
                {/* <Link href={`#${service.id}`} className={`inline-flex items-center font-semibold ${colors.text} ${colors.hover}`}>
                  Meer Info <FaArrowRight className="ml-2" />
                </Link> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
