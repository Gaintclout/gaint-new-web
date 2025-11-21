import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CheckCircle, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function QKDPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
 <div className="font-sans text-gray-800 scroll-smooth">
         {/* ---------------- HEADER ---------------- */}
         <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-12 py-4 /70 backdrop-blur-md shadow-sm z-50">
           <img src="/gaint-logo.png" alt="GAINT Clout Technologies" className="w-32 h-auto" />
       {/* ---------------- NAVBAR (Animated Dropdown) ---------------- */}
           <nav className="hidden md:block">
             <ul className="flex justify-center gap-8 text-4xl  items-center bg-gray-100 w-[1000px]  h-24   rounded-[60px] px-6 mr-[360px]">
               {/* Regular Links */}
   
             <a href="/" className="hover:text-[#4285F4] transition duration-300">
             Home
           </a>
   
   
             <li>
               <Link to="/about" className="hover:text-[#4285F4] transition duration-300">
                 About
               </Link>
             </li>
   
   
             {/* Services Dropdown */}
                <li>
               <Link to="/service" className="hover:text-[#4285F4] transition duration-300">
                 Services
               </Link>
             </li>
              
   
                
   
       {/* Products Dropdown */}
       <li className="relative group">
         <a
           href="#products"
           className="hover:text-[#4285F4] transition flex items-center gap-1"
   
         >
           Products ▾
         </a>
   
         {/* Dropdown Menu */}
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
                       target={product.link.startsWith("http") ? "_blank" : "_self"}
                       rel={product.link.startsWith("http") ? "noopener noreferrer" : ""}
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
            className="relative hover:text-[#4285F4] transition duration-300 "
          >
            Contact
          </a>
          
              </li>
            </ul>
          </nav>
   
   
                   {/* Mobile Nav */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded-md border border-gray-300">
                     {menuOpen ? <X /> : <Menu />}
                   </button>
                     {menuOpen && (
                       <div className="absolute top-16 right-4 bg-white shadow-lg rounded-xl w-56 text-center py-4 animate-fadeIn z-50">
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
           
                           {/* Products Dropdown (hover/tap reveal) */}
                           <div className="relative group">
                             <button className="block w-full py-2 text-gray-900 hover:text-blue-600 focus:outline-none">
                               Products ▾
                             </button>
                             <div className="absolute left-0 w-full bg-white border border-gray-200 rounded-xl shadow-lg mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                               {[
                                 { name: "WellNest AI Station", link: "/wellnestai" },
                                 { name: "GAINTImmuneIQ", link: "/immuneiq" },
                                 { name: "DonorGO", link: "/donorgo" },
                                 { name: "GAINTInternsHub", link: "/internsapp" },
                                 { name: "Quantum Key Distribution (QKD)", link: "/QKD" },
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

      {/* ================= HERO SECTION ================= */}
      <section className="text-center py-20 bg-gradient-to-r from-indigo-600 to-purple-700 text-white mt-24">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl  mb-4"
        >
          Quantum Key Distribution (QKD)
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className=" mx-auto text-3xl"
        >
          Building the future of quantum-secure communication through research<br></br>
          innovation, and Quantum-as-a-Service (QaaS).
        </motion.p>
      </section>

      {/* ================= ABOUT QKD ================= */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-7xl  mb-6 text-center text-indigo-700">
          About QKD
        </h2>
        <p className="  text-3xl text-gray-600 leading-relaxed align-center">
          Quantum Key Distribution (QKD) leverages quantum mechanics principles 
          superposition and entanglement - to securely exchange encryption keys<br></br>
          between two parties. Unlike classical cryptography, QKD instantly
          detects <br></br> eavesdropping attempts, ensuring ultra-secure communication in
          the<br></br> post-quantum era.
        </p>
      </section>

      {/* ================= R&D ROADMAP ================= */}
      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <h2 className="text-6xl  text-center mb-12 text-indigo-700">
          QKD – R&D & Product Roadmap
        </h2>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-indigo-500"></div>

          {[
            {
              title: "Phase 1: Research & Knowledge Foundation",
              duration: "Jan 2026 - June 2026",
              color: "from-indigo-500 to-blue-500",
              points: [
                "Form Quantum R&D core team",
                "Study QKD protocols (BB84, E91)",
                "Simulate using Qiskit & QuNetSim",
                // "Apply for India Quantum Mission grants",
              ],
            },
            {
              title: "Phase 2: Prototype Development",
              duration: "July 26 - Mar 27",
              color: "from-purple-500 to-pink-500",
              points: [
                "Implement BB84/E91 simulation",
                "Develop Quantum Key Manager (QKM)",
                "Integrate AES-256 hybrid security",
                "Test with QuISP & NetSquid",
              ],
            },
            {
              title: "Phase 3: Pilot Project",
              duration: "Apr 27 - Dec 27",
              color: "from-pink-500 to-red-500",
              points: [
                "Build hardware-level prototype",
                "Establish fiber testbed between GAINT sites",
                "Integrate AI anomaly detection",
                "Run QaaS internal trials",
              ],
            },
            {
              title: "Phase 4: QaaS Product Launch",
              duration: "Jan 28 - Dec 28",
              color: "from-blue-500 to-indigo-700",
              points: [
                "Launch GAINT QaaS Platform",
                "Offer QKD for Banks, Defense, Healthcare",
                "Create Quantum Cloud integration",
                "Patent & onboard enterprise clients",
              ],
            },
          ].map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className={`mb-14 flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center`}
            >
              <div className="md:w-1/2"></div>
              <div className="relative md:w-1/2 bg-white shadow-xl p-6 rounded-2xl border-t-4 border-indigo-500 hover:shadow-2xl transition">
                <div
                  className={`absolute top-4 ${i % 2 === 0 ? "-left-3" : "-right-3"} w-6 h-6 bg-gradient-to-r ${phase.color} rounded-full shadow-lg`}
                ></div>
                <h3 className="text-3xl font-semibold mb-1">{phase.title}</h3>
                <p className="text-xl text-gray-500 mb-3">{phase.duration}</p>
                <ul className="list-disc ml-5 text-gray-700 space-y-1 text-xl">
                  {phase.points.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= TARGET SECTORS ================= */}
      <section className="py-16 px-6 md:px-16 bg-gray-100">
        <h2 className="text-6xl  text-center mb-8 text-indigo-700">
          Target Industry Sectors
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {["Banking & FinTech","Defense & Aerospace","Healthcare","Telecom & Data Centers"].map((sector, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }}>
              <Card className="shadow-md border-t-4 border-indigo-400 h-full hover:shadow-lg transition-all">
                <CardContent className="text-center py-10">
                  <h3 className="text-2xl font-semibold mb-2 ">{sector}</h3>
                  <p className="text-gray-600 text-xl">
                    Securing critical communications with quantum-grade encryption.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= QaaS PRICING ================= */}
      <section className="py-20 bg-white px-6 md:px-16">
        <h2 className="text-6xl  text-center mb-12 text-indigo-700">
          Quantum-as-a-Service (QaaS) Pricing
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              tier: "Starter",
              price: "₹49,000/mo",
              features: [
                "10 Quantum-secure connections",
                "Basic API Access",
                "Key refresh every 30s",
                "Email support",
              ],
            },
            {
              tier: "Professional",
              price: "₹99,000/mo",
              features: [
                "50 Quantum-secure connections",
                "Priority API & SDK access",
                "AI-driven key management dashboard",
                "24/7 support",
              ],
            },
            {
              tier: "Enterprise",
              price: "Custom Pricing",
              features: [
                "Unlimited secure connections",
                "Dedicated quantum channel setup",
                "Custom encryption algorithms",
                "On-site deployment & SLA",
              ],
            },
          ].map((plan, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }}>
              <Card className="shadow-xl border-t-4 border-indigo-600 hover:shadow-2xl transition-all">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl  mb-1">{plan.tier}</CardTitle>
                  <p className="text-gray-500 text-2xl">{plan.price}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((f, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="text-indigo-500 w-5 h-5 mr-2" /> {f}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-all">
                    Get Started
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= IMPORTANCE ================= */}
      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <h2 className="text-6xl  text-center mb-8 text-indigo-700">
          Importance of QKD for Future Security
        </h2>
        <div className="max-w-5xl mx-auto text-gray-700 text-2xl space-y-4 leading-relaxed">
          <p>
            As quantum computing evolves, classical encryption will soon become vulnerable.
            QKD offers unbreakable protection grounded in quantum physics itself.
          </p>
          <p>
            GAINT’s investment in QKD establishes it as a pioneer in quantum cybersecurity,
            enabling Quantum-Key-Distribution-as-a-Service (QaaS) for next-gen secure communication infrastructures.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="text-center py-20 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl  mb-4 text-century-githic"
        >
          Join GAINT’s Quantum Future
        </motion.h2>
        <p className="text-3xl mb-8">
          Partner with us to build the backbone of tomorrow’s secure quantum internet.
        </p>
       <Link
          to="/contact"
          className="inline-block bg-white text-indigo-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-md hover:shadow-lg"
        >
          Contact GAINT Quantum R&D
        </Link>

      </section>

      {/* ================= FOOTER ================= */}
      <footer className="relative w-full bg-black/60 backdrop-blur-xl text-gray-300 border-t border-gray-700 py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-6 text-sm">
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Popular Links</h3>
            <ul className="space-y-2">
              <li><a href="https://www.guvi.in/blog/ai-and-ml-job-opportunities-in-india/" target="_blank" className="hover:text-[#c5a77b]">Career in AI</a></li>
              <li><a href="https://www.techtarget.com/whatis/definition/quantum-computing" target="_blank" className="hover:text-[#c5a77b]">Quantum Computing</a></li>
              <li><a href="https://www.stxnext.com/blog/best-machine-learning-blogs-resources" target="_blank" className="hover:text-[#c5a77b]">Machine Learning</a></li>
              <li><a href="https://learn.rumie.org/jR/bytes/learn-the-basics-of-cloud-computing-in-3-minutes" target="_blank" className="hover:text-[#c5a77b]">Cloud Computing</a></li>
              <li><a href="/contact" className="hover:text-[#c5a77b]">Contact Us</a></li>
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

        {/* Social Icons */}
        <div className="mt-12 flex justify-center gap-8 text-2xl border-t border-gray-700 pt-8">
          {[
            { Icon: FaFacebookF, link: "https://www.facebook.com/GaintCloutTechnologies" },
            { Icon: FaInstagram, link: "https://www.instagram.com/gaintclout/" },
            { Icon: FaXTwitter, link: "https://x.com/Gaintclout" },
            { Icon: FaLinkedinIn, link: "https://www.linkedin.com/in/gaintclouttechnologies/" },
          ].map(({ Icon, link }, i) => (
            <a
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-[#c5a77b] transition transform hover:scale-110"
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-10">
          <img
            src="/gaint-logo.png"
            alt="GAINT Clout Logo"
            className="mx-auto h-12 w-auto mb-4 opacity-90 hover:opacity-100 transition-all duration-300"
          />
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} GAINT CLOUT TECHNOLOGIES PVT LTD. All rights reserved.
          </p>

          <div className="mt-3 flex justify-center gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-[#c5a77b]">Privacy Policy</a>
            <a href="#" className="hover:text-[#c5a77b]">Terms & Conditions</a>
            <a href="#" className="hover:text-[#c5a77b]">Refund Policy</a>
          </div>
        </div>

        {/* Glow Line */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#c5a77b]/40 to-transparent"></div>
      </footer>
    </div>
  );
}
