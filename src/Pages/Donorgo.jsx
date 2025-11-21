import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Users,
  Heart,
  LineChart,
  Share2,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function DonorGOPage() {
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
           

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="bg-gradient-to-r from-red-600 to-pink-500 text-white py-32 px-6 text-center mt-24">
        <h1 className="text-7xl  mb-4">DonorGO</h1>
        <p className="text-3xl mb-6 max-w-2xl mx-auto">
          Make Giving Transparent, Simple, and Impactful with AI & Blockchain
        </p>
        <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-200">
          Request Investor Deck
        </Button>
      </section>

      {/* ---------------- OVERVIEW ---------------- */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-6xl mb-6  text-gray-900">Overview</h2>
        <p className="text-3xl leading-relaxed text-gray-700">
          DonorGO is a mobile-first donation platform that connects donors with
          charities through AI-powered matching and blockchain-backed transparency.
          It simplifies philanthropy, builds trust, and makes giving engaging for
          individuals and organizations.
        </p>
      </section>

      {/* ---------------- HOW IT WORKS ---------------- */}
      <section className="py-16 px-6 bg-white shadow-sm">
        <h2 className="text-6xl mb-10 text-center  text-gray-900">
          How It Works
        </h2>
        <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {["Sign Up", "Discover Causes", "Donate Securely", "Track Impact", "Share & Inspire"].map((step, idx) => (
            <Card key={idx} className="text-center p-4 shadow-md hover:shadow-xl transition">
              <CardContent>
                <CheckCircle className="mx-auto h-10 w-10 text-red-600 mb-4" />
                <h3 className="font-semibold text-lg">{step}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ---------------- KEY FEATURES ---------------- */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-6xl mb-10 text-center  text-gray-900">
          Key Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 mx-auto text-red-600 mb-4" />
              <h3 className="font-semibold text-xl mb-2">AI Matching</h3>
              <p>Connects donors to causes aligned with their values and goals.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Heart className="h-12 w-12 mx-auto text-red-600 mb-4" />
              <h3 className="font-semibold text-xl mb-2">Transparent Giving</h3>
              <p>Blockchain ensures donations are tracked and verified end-to-end.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Share2 className="h-12 w-12 mx-auto text-red-600 mb-4" />
              <h3 className="font-semibold text-xl mb-2">Community Impact</h3>
              <p>Share campaigns to inspire others and amplify fundraising efforts.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ---------------- MARKET OPPORTUNITY ---------------- */}
      <section className="py-16 px-6 bg-gradient-to-r from-pink-50 to-purple-50">
        <h2 className="text-6xl mb-6 text-center  text-gray-900">
          Market Opportunity
        </h2>
        <div className="max-w-4xl mx-auto text-center">
          <LineChart className="h-16 w-16 mx-auto text-red-600 mb-6" />
          <p className="text-2xl leading-relaxed text-gray-700">
            Digital philanthropy is growing into a multi-billion-dollar market.
            DonorGO’s recurring donation model, AI-driven personalization, and
            analytics services for nonprofits position it for massive scale and
            impact.
          </p>
        </div>
      </section>

      {/* ---------------- CALL TO ACTION ---------------- */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl  mb-6">Be Part of the Change</h2>
        <Button size="lg" className="bg-red-600 text-white hover:bg-purple-700">
          Partner With Us
        </Button>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="relative w-full bg-black/60 backdrop-blur-xl text-gray-300 border-t border-gray-700 py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-6 text-sm">
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Popular Links</h3>
            <ul className="space-y-2">
              <li><a href="https://www.guvi.in/blog/ai-and-ml-job-opportunities-in-india/" target="blank" className="hover:text-[#c5a77b]">Career in AI</a></li>
              <li><a href="https://www.techtarget.com/whatis/definition/quantum-computing" target="blank" className="hover:text-[#c5a77b]">Quantum Computing</a></li>
              <li><a href="https://www.stxnext.com/blog/best-machine-learning-blogs-resources" target="blank" className="hover:text-[#c5a77b]">Machine Learning</a></li>
              <li><a href="https://learn.rumie.org/jR/bytes/learn-the-basics-of-cloud-computing-in-3-minutes" target="blank" className="hover:text-[#c5a77b]">Cloud Computing</a></li>
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
