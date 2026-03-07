import { Facebook, Instagram, Twitter, ChevronUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME!;

  /*
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  */

  return (
    <footer className="w-full bg-white text-gray-900 py-12 border-t border-gray-100">
      <div className="w-full px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div className="mb-8 md:mb-0">
            <Link href="/">
              <Image src="/logo-carestonesolutions.webp" loading="lazy" alt="Logo" width={150} height={150} className="object-contain" />
            </Link>
          </div>

          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            {/*<div>
              <h3 className="font-bold text-gray-500 text-sm mb-4 uppercase">Info</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-gray-600 hover:text-black">
                    {companyName}
                  </Link>
                </li>
              </ul>
            </div>*/}

            {/*<div>
              <h3 className="font-bold text-gray-500 text-sm mb-4 uppercase">Follow Us</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-black">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-black">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>*/}

            <div>
              <h3 className="font-bold text-gray-500 text-sm mb-4 uppercase">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-gray-600 hover:text-black">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
          <a href="https://lannie.be" target="_blank" rel="noopener noreferrer">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} {companyName}. Ontworpen en ontwikkeld door Lannie
            </p>
          </a>

          <div className="flex items-center gap-4">
            <div className="flex gap-4 text-gray-400">
              {/*<a href="#" className="hover:text-black transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-black transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-black transition">
                <Twitter size={20} />
              </a>*/}
            </div>

            {/* <button onClick={scrollToTop} className="bg-blue-600 text-white p-2 rounded-md transition ml-4 shadow-sm" aria-label="Naar boven">
              <ChevronUp size={24} color="white" />
            </button> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
