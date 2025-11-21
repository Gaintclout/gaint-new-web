import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Cpu, Globe } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const pqcData = [
  { year: 2022, India: 20, Global: 35 },
  { year: 2023, India: 40, Global: 50 },
  { year: 2024, India: 65, Global: 70 },
  { year: 2025, India: 80, Global: 85 },
];

export default function PQCProductPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b text-white font-sans overflow-hidden">
      
     {/* HERO */}
<section
  className="relative text-center py-32 px-6 bg-cover bg-center bg-no-repeat h-[110vh]"
  style={{
    backgroundImage: "url('/Web.jpg')", // your image path
  }}
>
  {/* Overlay (for text contrast) */}
  {/* <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div> */}

  {/* Content */}
  <div className="relative z-10">
    <motion.h1
      className="text-5xl md:text-6xl  mb-6 text-cyan-400 "
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      GAINT PQC — Post-Quantum Cryptography
    </motion.h1>

    <motion.p
      className="max-w-3xl mx-auto text-4xl text-gray-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      GAINT’s PQC initiative secures the digital world against future quantum
      threats by building next-generation cryptographic frameworks — scalable,
      AI-assisted, and globally interoperable.
    </motion.p>
  </div>
   <h2 className="text-4xl font-semibold text-center text-cyan-400 mb-1 absolute bottom-[400px] left-[590px] ">PQC vs QKD — The Future of Quantum Security</h2>
     <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto absolute top-[690px] left-[400px]">
          <div className="p-6 bg-gray-900/70 rounded-2xl border border-cyan-700 shadow-lg hover:shadow-cyan-500/30 transition">
            <h3 className="text-2xl  mb-3 text-cyan-300">🔐 Post-Quantum Cryptography (PQC)</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Software-based security using classical networks.</li>
              <li>Relies on mathematically hard lattice-based algorithms.</li>
              <li>Scalable and deployable on existing internet infrastructure.</li>
              <li>Ideal for commercial, banking, and cloud environments.</li>
            </ul>
          </div>
          <div className="p-6 bg-gray-900/70 rounded-2xl border border-violet-700 shadow-lg hover:shadow-violet-500/30 transition">
            <h3 className="text-2xl  mb-3 text-violet-300">⚛️ Quantum Key Distribution (QKD)</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Hardware-based physical layer encryption using quantum photons.</li>
              <li>Offers information-theoretic security — unhackable by physics.</li>
              <li>Requires quantum communication channels (fiber/satellite).</li>
              <li>Ideal for defense, space, and critical national networks.</li>
            </ul>
          </div>
        </div>
</section>


      {/* COMPARISON SECTION */}
      {/* <section className="py-16 px-6 bg-[#0a0f1c]/80 backdrop-blur-lg">
        <h2 className="text-3xl font-semibold text-center text-cyan-400 mb-12">PQC vs QKD — The Future of Quantum Security</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-gray-900/70 rounded-2xl border border-cyan-700 shadow-lg hover:shadow-cyan-500/30 transition">
            <h3 className="text-2xl font-bold mb-3 text-cyan-300">🔐 Post-Quantum Cryptography (PQC)</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Software-based security using classical networks.</li>
              <li>Relies on mathematically hard lattice-based algorithms.</li>
              <li>Scalable and deployable on existing internet infrastructure.</li>
              <li>Ideal for commercial, banking, and cloud environments.</li>
            </ul>
          </div>
          <div className="p-6 bg-gray-900/70 rounded-2xl border border-violet-700 shadow-lg hover:shadow-violet-500/30 transition">
            <h3 className="text-2xl font-bold mb-3 text-violet-300">⚛️ Quantum Key Distribution (QKD)</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Hardware-based physical layer encryption using quantum photons.</li>
              <li>Offers information-theoretic security — unhackable by physics.</li>
              <li>Requires quantum communication channels (fiber/satellite).</li>
              <li>Ideal for defense, space, and critical national networks.</li>
            </ul>
          </div>
        </div>
      </section> */}

      {/* R&D ROADMAP */}
<section className="py-16 px-6 max-w-6xl mx-auto">
  <h2 className="text-4xl font-semibold text-center text-cyan-400 mb-12">
    GAINT PQC R&D & Product Roadmap
  </h2>

  <div className="grid md:grid-cols-4 gap-6">
    {[
      {
        title: "Phase 1: Research",
        desc: "Quantum-safe cryptographic algorithms, AI-assisted optimization, and hybrid encryption studies.",
      },
      {
        title: "Phase 2: Prototype",
        desc: "Develop lattice-based PQC libraries and integrate with existing GAINT security framework.",
      },
      {
        title: "Phase 3: Pilot",
        desc: "Deploy PQC modules in real enterprise and banking networks in collaboration with government.",
      },
      {
        title: "Phase 4: QaaS",
        desc: "Launch 'Quantum Security-as-a-Service' integrating PQC + QKD hybrid defense.",
      },
    ].map((phase, i) => (
      <motion.div
        key={i}
        className="group relative p-6 bg-gray-900/80 border border-cyan-800 rounded-2xl shadow-lg
                   transition-all duration-500 ease-in-out 
                   hover:-translate-y-3 hover:scale-105 hover:shadow-[0_0_35px_rgba(6,182,212,0.6)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.2 }}
      >
        {/* Glowing Border on Hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/30 to-blue-500/30 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-xl font-bold text-cyan-300 mb-2">{phase.title}</h3>
          <p className="text-gray-300 leading-relaxed">{phase.desc}</p>
        </div>
      </motion.div>
    ))}
  </div>
</section>


      {/* FUNDING & CHARTS */}
      <section className="py-20 bg-[#040b18]/90 border-t border-cyan-800">
        <h2 className="text-3xl font-semibold text-center text-cyan-400 mb-8">Funding & Global PQC Adoption</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-cyan-300">Government & R&D Initiatives</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-3">
              <li>India’s Quantum Mission — National Quantum Communication Network.</li>
              <li>NIST PQC Standardization (Kyber, Dilithium).</li>
              <li>Collaboration with MEITY, DRDO, ISRO & academic institutions.</li>
              <li>GAINT PQC Labs: Hyderabad (India) — Prototype & Simulation Hub.</li>
            </ul>
          </div>
          <div className="h-64 bg-gray-900/60 p-4 rounded-xl border border-cyan-700">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={pqcData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="year" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="India" stroke="#06b6d4" strokeWidth={3} />
                <Line type="monotone" dataKey="Global" stroke="#a855f7" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-gradient-to-r from-cyan-900/30 via-violet-900/20 to-black">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-6">
          Partner with GAINT — Build India’s Quantum-Secure Future
        </h2>
        <p className="text-gray-400 mb-10 max-w-3xl mx-auto">
          Collaborate with us in advancing PQC research, integration, and deployment across national and global security networks.
        </p>
        <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-cyan-400/30 transition">
          Connect with GAINT R&D
        </button>
      </section>

      {/* FOOTER */}
    <footer className="relative w-full bg-black/80 backdrop-blur-xl text-gray-300 border-t border-gray-700 py-16 overflow-hidden">
           <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-6 text-sm">
             {[
               {
                 title: "Popular Links",
                 links: [
                   ["Career in AI", "https://www.guvi.in/blog/ai-and-ml-job-opportunities-in-india/"],
                   ["Quantum Computing", "https://www.techtarget.com/whatis/definition/quantum-computing"],
                   ["Machine Learning", "https://www.stxnext.com/blog/best-machine-learning-blogs-resources"],
                   ["Cloud Computing", "https://learn.rumie.org/jR/bytes/learn-the-basics-of-cloud-computing-in-3-minutes"],
                   ["Contact Us", "/contact"],
                 ],
               },
               {
                 title: "Free Tools",
                 links: [
                   ["AI Text Generator", "#"],
                   ["Resume Builder", "#"],
                   ["File Converter", "#"],
                   ["Data Formatter", "#"],
                   ["PDF Split & Merge", "#"],
                 ],
               },
               {
                 title: "Company",
                 links: [
                   ["About Us", "/About"],
                   ["Services", "/Service"],
                   ["Products", "/"],
                   ["Careers", "/Career"],
                   ["Contact", "/Contact"],
                 ],
               },
               {
                 title: "Services",
                 links: [
                   ["Website Design", "#"],
                   ["App Development", "#"],
                   ["AI & ML Solutions", "#"],
                   ["Cloud Integration", "#"],
                   ["IT Consulting", "#"],
                 ],
               },
             ].map((col, i) => (
               <div key={i}>
                 <h3 className="text-white font-semibold mb-4 text-lg">{col.title}</h3>
                 <ul className="space-y-2">
                   {col.links.map(([name, href], j) => (
                     <li key={j}>
                       <a
                         href={href}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="hover:text-[#007BFF]"
                       >
                         {name}
                       </a>
                     </li>
                   ))}
                 </ul>
               </div>
             ))}
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
                 className="text-gray-200 hover:text-[#007BFF] transition transform hover:scale-110"
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
               <a href="#" className="hover:text-[#007BFF]">Privacy Policy</a>
               <a href="#" className="hover:text-[#007BFF]">Terms & Conditions</a>
               {/* <a href="#" className="hover:text-[#007BFF]">Refund Policy</a> */}
             </div>
           </div>
   
           <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#007BFF]/40 to-transparent"></div>
         </footer>
    </div>
  );
}