import React from "react";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const page = () => {
  return (
    <div>
      <footer className="py-6 mt-6 text-secondary relative bg-white">
        <div className="w-[90%] mx-auto grid gap-23 md:grid-cols-3">
          {/* Left Section */}
          <div>
            <h2 className="text-3xl font-bold text-secondary">KTZ PHYSIO</h2>
            <p className="mt-2 text-sm">
              Your trusted partner for physiotherapy and rehabilitation.
            </p>
            <p className="mt-2 text-sm">
              © {new Date().getFullYear()} KTZPhysio. All rights reserved.
            </p>
          </div>

          {/* Middle Section - Contact Info */}
          <div>
            <h3 className="mb-2 text-2xl font-semibold text-secondary">Contact Us</h3>
            <p className="text-sm">📍 Khadija-Tul-Zahra Physiotherapy Center, Toba Tek Singh, Pakistan</p>
            <p className="text-sm">📞 +92 329-1500326</p>
            <p className="flex items-center gap-2 text-sm">
              <MdEmail size={18} className="text-red-500" />
              ktzphysioinfo@gmail.com</p>
          </div>

          {/* Right Section - Social Links */}
          <div>
            <h3 className="mb-4 text-2xl font-semibold text-secondary">Follow Us</h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://web.facebook.com/ktzphysiotherapycenter"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 "
              >
                <FaFacebookF size={25} className="text-blue-500" />
                <span>facebook.com/ktzphysio</span>
              </a>
              <a
                href="https://instagram.com/ktzphysio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 "
              >
                <FaInstagram size={25} className="text-pink-600" />
                <span>instagram.com/ktzphysio</span>
              </a>
              <a
                href="https://wa.me/923291500326?text=Hello%20I%20want%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2  "
              >
                <FaWhatsapp size={25} className="text-green-500" />
                <span>+92 329-1500326</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Small Line */}
        <div className="mt-6  text-center text-lg opacity-75">
          Made with ❤️ for better health
        </div>
      </footer>

      {/* Floating WhatsApp Icon */}
      {/* Floating WhatsApp Icon */}
      <a
        href="https://wa.me/923291500326?text=Hello%20I%20want%20to%20book%20an%20appointment"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 p-4 text-white transition bg-green-500 rounded-full shadow-lg bottom-6 right-4 hover:bg-green-600"
      >
        <FaWhatsapp size={38} />
      </a>

    </div>
  );
};

export default page;
