"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const contactFormKey = process.env.NEXT_PUBLIC_CONTACT_FORM_KEY!;
  const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME!;

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", contactFormKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          title: "Succes!",
          text: "E-mail succesvol verzonden!",
          icon: "success",
          confirmButtonColor: "#2563eb",
        });
        //event.currentTarget.reset();
      } else {
        Swal.fire({
          title: "Fout!",
          text: data.message || "Er ging iets mis.",
          icon: "error",
          confirmButtonColor: "#dc2626",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Fout!",
        text: "Er is een netwerkfout opgetreden.",
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="pt-20 pb-12 bg-gray-50 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact & Offerte</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Heeft u vragen of wilt u een vrijblijvende offerte? Neem contact met ons op en wij helpen u graag verder.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-white rounded-2xl p-8 pb-6 shadow-lg border border-gray-100 h-fit">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Stuur ons een bericht</h3>
            <form onSubmit={onSubmit} className="space-y-4">
              <input type="hidden" name="subject" value="Nieuw bericht via de website" />
              <input type="hidden" name="from_name" value={companyName} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Naam *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-gray-50"
                    placeholder="Uw volledige naam"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-gray-50"
                    placeholder="uw.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Bericht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-vertical bg-gray-50"
                  placeholder="Hoe kunnen we helpen?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`rounded-button w-full py-4 font-semibold transition-colors flex items-center justify-center gap-2 text-white
                  ${loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
              >
                <FaPaperPlane />
                {loading ? "Even geduld..." : "Verstuur Bericht"}
              </button>
            </form>
          </div>

          <div>
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contactgegevens</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 shrink-0">
                    <FaPhone className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Telefoon</h4>
                    <a href="tel:+32491330959">
                      <p className="text-gray-600">0491 33 09 59</p>
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 shrink-0">
                    <FaEnvelope className="text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">info@carestonesolutions.be</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 shrink-0">
                    <FaClock className="text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Werkdagen</h4>
                    <p className="text-gray-600">
                      Maandag - Vrijdag: 07:00 - 18:00
                      <br />
                      Zaterdag: 08:00 - 16:00
                      <br />
                      Zondag: Gesloten
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">24/7 Spoeddienst</h3>
              <p className="text-blue-100 mb-4">Voor urgente reparaties en noodsituaties zijn wij 24 uur per dag, 7 dagen per week bereikbaar.</p>
              <a href="tel:+32491330959">
                <button className="rounded-button bg-white text-blue-600 hover:bg-blue-50 hover:cursor-pointer px-6 py-3 font-semibold transition-colors flex items-center gap-2">
                  <FaPhone />
                  Bel Nu: 0491 33 09 59
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
