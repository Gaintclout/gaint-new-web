import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Mail, Phone, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div className="font-sans text-gray-800 scroll-smooth">
      {/* ======= HEADER ======= */}
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 bg-transparent backdrop-blur-lg">
        <a href="/" className="flex items-center gap-2">
          <img
            src="/gaint-logo.png"
            alt="GAINT Clout Logo"
            className="w-32 h-auto drop-shadow-lg"
          />
        </a>

        {/* ---------- Desktop Navbar ---------- */}
        <nav className="hidden md:block">
          <ul className="flex justify-center gap-8 text-4xl items-center bg-gray-100 w-[1000px] h-24 rounded-[60px] px-6 mr-[360px]">
            <a href="/" className="hover:text-[#4285F4] transition duration-300">
              Home
            </a>
            <li>
              <Link
                to="/about"
                className="hover:text-[#4285F4] transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/service"
                className="hover:text-[#4285F4] transition duration-300"
              >
                Services
              </Link>
            </li>

            {/* ---------- Products Dropdown ---------- */}
            <li className="relative group">
              <a
                href="#products"
                className="hover:text-[#4285F4] transition flex items-center gap-1"
              >
                Products ▾
              </a>

              <ul className="absolute left-0 mt-2 bg-white shadow-xl border border-gray-200 rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 translate-y-2 transition-all duration-300 ease-out w-60 z-50 text-lg">
                {[
                 { name: "DonorGO", link: "/Donorgo" },
                 { name: "GAINTInternsHub", link: "/internsapp" },
                  { name: "GAINTImmuneIQ", link: "/Immuneiq" },
                   { name: "Quantum Key Distribution (QKD)", link: "/QKD" },
                  { name: "Post-Quantum Cryptography (PQC)", link: "/PQC" },
                ].map((product, i) => (
                  <li key={i}>
                    <a
                      href={product.link}
                      className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-blue-600 rounded-lg transition"
                    >
                      {product.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <a
                href="/contact"
                className="hover:text-[#4285F4] transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* ---------- Mobile Menu ---------- */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-900 bg-white/80 p-2 rounded-lg shadow border border-gray-200"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {menuOpen && (
          <div
            className="absolute top-16 right-4 bg-white shadow-lg rounded-xl w-56 text-center py-4 animate-fadeIn z-50"
            onMouseLeave={() => setShowProducts(false)}
          >
            {[
              { name: "Home", link: "/" },
              { name: "About", link: "/about" },
              { name: "Services", link: "/service" },
            ].map(({ name, link }) => (
              <a
                key={name}
                href={link}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-gray-900 hover:text-blue-600 transition"
              >
                {name}
              </a>
            ))}

            
  {/* ✅ Products Hover Dropdown (works on mouse hover in mobile width too) */}

            <div className="relative group">
    <button
      className="block w-full py-2 text-gray-900 hover:text-blue-600 focus:outline-none"
    >
      Products ▾
    </button>
    <div className="absolute left-0 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 translate-y-1 transition-all duration-300 ease-in-out z-50">
      {[
        { name: "DonorGO", link: "/Donorgo" },
                 { name: "GAINTInternsHub", link: "/internsapp" },
                  { name: "GAINTImmuneIQ", link: "/Immuneiq" },
                   { name: "Quantum Key Distribution (QKD)", link: "/QKD" },
                  { name: "Post-Quantum Cryptography (PQC)", link: "/PQC" },
      ].map(({ name, link }) => (
        <a
          key={name}
          href={link}
          onClick={() => setMenuOpen(false)}
          className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition"
        >
          {name}
        </a>
      ))}
    </div>
  </div>

            <a
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-gray-900 hover:text-blue-600 transition"
            >
              Contact
            </a>
          </div>
        )}
      </header>

      {/* ======= HERO SECTION ======= */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600 text-white py-32 px-6 text-center mt-32">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-6xl mb-4"
        >
          Get in Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-3xl max-w-2xl mx-auto"
        >
          Let’s collaborate to create cutting-edge AI and Quantum-driven
          innovations that redefine the future.
        </motion.p>
      </section>

      {/* ======= CONTACT SECTION ======= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Contact Information
            </h2>

            {/* Email */}
            <div className="flex items-center gap-4 bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-[#4285F4] to-[#34A853] text-white rounded-full">
                <Mail size={22} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Email Us</h4>
                <p className="text-gray-600 text-sm">info@gaintclout.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-[#34A853] to-[#4285F4] text-white rounded-full">
                <Phone size={22} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Call Us</h4>
                <p className="text-gray-600 text-sm">+91 88972 38849</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-4 bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-[#4285F4] to-[#34A853] text-white rounded-full">
                <MapPin size={22} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Visit Us</h4>
                <p className="text-gray-600 text-sm">
                  Awfis Elite 4th Floor, Orbit Building, Knowledge City,
                  Hyderabad
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-2xl p-8"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h3>
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4285F4]"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#34A853]"
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4285F4]"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#4285F4] to-[#34A853] text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ======= GOOGLE MAP ======= */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full h-[400px] mt-8 mb-16"
      >
        <iframe
          title="Orbit by Auro Realty Hyderabad"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5246484002787!2d78.37419921122073!3d17.434585483391615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91b3ef7cc7b1%3A0x4e57b34c0f138b55!2sGaint%20Clout%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1759927780596!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="rounded-2xl shadow-lg"
        ></iframe>
      </motion.section>

      {/* ======= FOOTER ======= */}
      <footer className="relative w-full bg-black/60 backdrop-blur-xl text-gray-300 border-t border-gray-700 py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-6 text-sm">
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">
              Popular Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.guvi.in/blog/ai-and-ml-job-opportunities-in-india/"
                  target="blank"
                  className="hover:text-[#c5a77b]"
                >
                  Career in AI
                </a>
              </li>
              <li>
                <a
                  href="https://www.techtarget.com/whatis/definition/quantum-computing"
                  target="blank"
                  className="hover:text-[#c5a77b]"
                >
                  Quantum Computing
                </a>
              </li>
              <li>
                <a
                  href="https://www.stxnext.com/blog/best-machine-learning-blogs-resources"
                  target="blank"
                  className="hover:text-[#c5a77b]"
                >
                  Machine Learning
                </a>
              </li>
              <li>
                <a
                  href="https://learn.rumie.org/jR/bytes/learn-the-basics-of-cloud-computing-in-3-minutes"
                  target="blank"
                  className="hover:text-[#c5a77b]"
                >
                  Cloud Computing
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#c5a77b]">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Free Tools</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#c5a77b]">AI Text Generator</a></li>
              <li><a href="#" className="hover:text-[#c5a77b]">Resume Builder</a></li>
              <li><a href="#" className="hover:text-[#c5a77b]">File Converter</a></li>
              <li><a href="#" className="hover:text-[#c5a77b]">Data Formatter</a></li>
              <li><a href="#" className="hover:text-[#c5a77b]">PDF Split & Merge</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-[#c5a77b]">About Us</a></li>
              <li><a href="/service" className="hover:text-[#c5a77b]">Services</a></li>
              <li><a href="/" className="hover:text-[#c5a77b]">Products</a></li>
              <li><a href="/career" className="hover:text-[#c5a77b]">Careers</a></li>
              <li><a href="/contact" className="hover:text-[#c5a77b]">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#c5a77b]">Website Design</a></li>
              <li><a href="#" className="hover:text-[#c5a77b]">App Development</a></li>
              <li><a href="#" className="hover:text-[#c5a77b]">AI & ML Solutions</a></li>
              <li><a href="#" className="hover:text-[#c5a77b]">Cloud Integration</a></li>
              <li><a href="#" className="hover:text-[#c5a77b]">IT Consulting</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex justify-center gap-8 text-2xl border-t border-gray-700 pt-8">
          {[FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn].map(
            (Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-gray-400 hover:text-[#c5a77b] transition transform hover:scale-110"
              >
                <Icon />
              </a>
            )
          )}
        </div>

        <div className="text-center mt-10">
          <img
            src="/gaint-logo.png"
            alt="GAINT Clout Logo"
            className="mx-auto h-12 w-auto mb-4 opacity-90 hover:opacity-100 transition-all duration-300"
          />
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} GAINT CLOUT TECHNOLOGIES PVT LTD. All
            rights reserved.
          </p>

          <div className="mt-3 flex justify-center gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-[#c5a77b]">Privacy Policy</a>
            <a href="#" className="hover:text-[#c5a77b]">Terms & Conditions</a>
            {/* <a href="#" className="hover:text-[#c5a77b]">Refund Policy</a> */}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#c5a77b]/40 to-transparent"></div>
      </footer>
    </div>
  );
}
