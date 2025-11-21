import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Cpu,
  BrainCircuit,
  Bot,
  Workflow,
  Network,
  Database,
  MessageSquare,
  Handshake,
  Menu,
  Atom,
  X,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// -------------------- Services Data --------------------
const services = [
  {
    icon: <BrainCircuit className="w-12 h-12 text-indigo-600 animate-pulse" />,
    title: "AI Development",
    desc: "Build intelligent systems with Machine Learning, Deep Learning, Natural Language Processing, and Computer Vision. Focus on model design, training, optimization, and deployment for solving complex real-world problems.",
  },
  {
    icon: <Bot className="w-12 h-12 text-indigo-600 animate-bounce" />,
    title: "Mobile & Web Development",
    desc: "Design and build responsive websites, scalable web apps, and cross-platform mobile applications. Deliver enterprise portals, eCommerce platforms (B2B/B2C), and seamless integrations with social and cloud services.",
  },
  {
    icon: <Cpu className="w-12 h-12 text-indigo-600 animate-spin-slow" />,
    title: "Software Development",
    desc: "Custom Software Development, Software Outsourcing, Software Testing & QA Services, Migration & Re-Engineering, and .NET Consulting.",
  },
  {
    icon: <Network className="w-12 h-12 text-indigo-600 animate-bounce" />,
    title: "Cyber Security",
    desc: "Encryption, Firewalls, Threat Detection, Penetration Testing, Authentication, Malware Protection, Forensics, Risk Management, and Compliance.",
  },
  {
    icon: <Database className="w-12 h-12 text-indigo-600 animate-pulse" />,
    title: "Creative Designing",
    desc: "Logo, Brochure, Corporate Identity, Graphic Design, Flash Animations, Website Layouts, Newsletters, and Print Collateral.",
  },
  {
    icon: <Workflow className="w-12 h-12 text-indigo-600 animate-spin-slow" />,
    title: "SEO & Digital Marketing",
    desc: "Search Engine Optimization (SEO), PPC, SMO, Brand Reputation, Internet Marketing, and Lead Generation Strategies.",
  },
   
{
  icon: <MessageSquare className="w-12 h-12 text-indigo-600 animate-bounce" />,
  title: "Consultation",
  desc: "Search Engine Optimization (SEO), PPC, SMO, Brand Reputation, Internet Marketing, and Lead Generation Strategies.",
},



  {
  icon: <Atom className="w-12 h-12 text-indigo-600 animate-spin-slow" />,
  title: "R&D On Post-Quantum Cryptography & Quantum Key Distribution",
  desc: "Research and development focused on quantum-safe encryption methods and QKD to ensure next-generation cybersecurity resilience in the post-quantum era.",
},

];

// -------------------- Component --------------------
export default function ServicesOffered() {
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef(null);

  return (
    <div className="font-sans text-gray-800 scroll-smooth">
      {/* ---------------- HEADER / NAVBAR ---------------- */}
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
            <Link to="/About" className="hover:text-[#4285F4] transition duration-300">
              About
            </Link>
          </li>


          {/* Services Dropdown */}
             <li>
            <Link to="/Service" className="hover:text-[#4285F4] transition duration-300">
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
                    className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition"
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


      {/* ---------------- HERO / ABOUT SECTION ---------------- */}
      <section
        id="about"
        ref={heroRef}
        className="relative min-h-screen w-full flex items-center justify-end overflow-hidden bg-black"
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/service-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text Overlay */}
        <div className="relative z-10 flex flex-col items-end text-right text-white px-8 md:px-24 max-w-4xl">
          <h1
            className="
               leading-none mb-6 animate-fadeInUp
              bg-gradient-to-r from-[#ffffff] to-[#ffffff] bg-clip-text text-transparent
              text-[100px] sm:text-[140px] md:text-[180px] lg:text-[200px] xl:text-[150px]
              drop-shadow-[0_0_20px_rgba(0,0,0,0.4)]
            "
          >
            GAINT
          </h1>

          <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-gray-200 max-w-[700px] leading-tight animate-fadeIn font-[Century Gothic]">
            Transform Your
            <br />
            <span className="bg-gradient-to-r from-[#4285F4] to-[#34A853] bg-clip-text text-transparent ">
              BUSINESS 
            </span>{" "}
            with{" "}
            <span className="bg-gradient-to-r from-[#34A853] to-[#4285F4] bg-clip-text text-transparent">
              Seamless Solutions
            </span>
          </p>
        </div>
      </section>

      {/* ---------------- SERVICES GRID ---------------- */}
      <section className="bg-gray-50 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-6xl  text-gray-900 mb-4">
   
   Our Services
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-3xl">
        WE PROVIDE END-TO-END TECHNOLOGY SOLUTIONS THAT MERGE INTELLIGENCE,
        SCALABILITY, AND CREATIVE DESIGN FOR BUSINESSES WORLDWIDE 

                  </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-8 bg-white rounded-xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2 text-center relative ${
                index % 2 === 1 ? "md:translate-y-8" : ""
              }`}
            >
              <div className="w-12 h-12 flex items-center justify-center text-white rounded-md rotate-45 mx-auto mb-6 shadow-lg bg-gradient-to-r from-white-600 to-white-600">
                <div className="-rotate-45">{service.icon}</div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- CTA SECTION ---------------- */}
      {/* <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="relative overflow-hidden rounded-2xl p-8 md:p-12 bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15)_0,transparent_40%),radial-gradient(circle_at_80%_40%,rgba(255,255,255,0.2)_0,transparent_45%)]" />
          <div className="relative">
            <h3 className="text-3xl font-bold">
              Let’s Build the Future with AI
            </h3>
            <p className="mt-2 text-white/90 max-w-2xl">
              From strategy to deployment, GAINT partners with you to automate
              processes, enhance security, and deliver intelligent products.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="px-5 py-2.5 rounded-xl bg-white text-gray-900 font-semibold shadow hover:shadow-md"
              >
                Contact Us
              </a>
              <a
                href="#case-studies"
                className="px-5 py-2.5 rounded-xl border border-white/40 text-white font-semibold hover:bg-white/10"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </section> */}

      {/* ---------------- FOOTER ---------------- */}
      <footer className="relative w-full bg-black/60 backdrop-blur-xl text-gray-300 border-t border-gray-700 py-16 overflow-hidden">
        {/* ========= Top Grid ========= */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-6 text-sm">
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">
              Popular Links
            </h3>
           <ul className="space-y-2">
              <li><a href="https://www.guvi.in/blog/ai-and-ml-job-opportunities-in-india/" target="blank" className="hover:text-[#c5a77b]">Career in AI</a></li>
              <li><a href="https://www.techtarget.com/whatis/definition/quantum-computing" target="blank" className="hover:text-[#c5a77b]">Quantum Computing</a></li>
              <li><a href="https://www.stxnext.com/blog/best-machine-learning-blogs-resources" target="blank" className="hover:text-[#c5a77b]">Machine Learning</a></li>
              <li><a href="https://learn.rumie.org/jR/bytes/learn-the-basics-of-cloud-computing-in-3-minutes/?gad_source=1&gclid=EAIaIQobChMI59vHyq-QiwMVsKtmAh0Anjd0EAAYBCAAEgI_CfD_BwE" target="blank" className="hover:text-[#c5a77b]">Cloud Computing</a></li>
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
              <li><a href="/About" className="hover:text-[#c5a77b]">About Us</a></li>
              <li><a href="/Service" className="hover:text-[#c5a77b]">Services</a></li>
              <li><a href="/" className="hover:text-[#c5a77b]">Products</a></li>
              <li><a href="/Career" className="hover:text-[#c5a77b]">Careers</a></li>
              <li><a href="/Contact" className="hover:text-[#c5a77b]">Contact</a></li>
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

        {/* ========= Social Icons ========= */}
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
        {/* ========= Logo Section ========= */}
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
            {/* <a href="#" className="hover:text-[#c5a77b]">Refund Policy</a> */}
          </div>
        </div>

        {/* ========= Glow Line ========= */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#c5a77b]/40 to-transparent"></div>
      </footer>
    </div>
  );
}
