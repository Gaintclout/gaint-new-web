import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Laptop,
  FileText,
  Brain,
  MessageCircle,
  Award,
  Menu,
  X,
  CreditCard,
  Code2,
  ClipboardCheck,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function InternsAppPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans text-gray-800 scroll-smooth">
      {/* ---------------- HEADER ---------------- */}
      <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-12 py-4 /70 backdrop-blur-md shadow-sm z-50">
        <img
          src="/gaint-logo.png"
          alt="GAINT Clout Technologies"
          className="w-32 h-auto"
        />

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex justify-center gap-8 text-4xl items-center bg-gray-100 w-[1000px] h-24 rounded-[60px] px-6 mr-[360px]">
            <a href="/" className="hover:text-[#4285F4] transition duration-300">
              Home
            </a>
            <li>
              <Link
                to="/About"
                className="hover:text-[#4285F4] transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/Service"
                className="hover:text-[#4285F4] transition duration-300"
              >
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
                      target={
                        product.link.startsWith("http") ? "_blank" : "_self"
                      }
                      rel={
                        product.link.startsWith("http")
                          ? "noopener noreferrer"
                          : ""
                      }
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
                href="/Contact"
                className="hover:text-[#4285F4] transition duration-300"
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
      <section className="bg-gradient-to-r from-[#007BFF] to-[#00A8E8] text-white py-32 px-6 text-center mt-24">
        <h1 className="text-6xl md:text-7xl mb-4">GAINT Interns Hub</h1>
        <p className="text-2xl md:text-4xl mb-6 max-w-2xl mx-auto">
          Smart Internship Management Platform for Students
        </p>
        <Button size="lg" className="bg-white text-[#007BFF] hover:bg-gray-200">
          Request Demo
        </Button>
      </section>

      {/* ---------------- OVERVIEW ---------------- */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-6xl mb-6 text-gray-900">Overview</h2>
        <p className="text-3xl leading-relaxed text-gray-600">
          Interns App automates internship processes using AI and integrated tools 
          registration, project allocation, evaluation, reporting, and certification
          all under one digital platform, empowering institutions and students alike.
        </p>
      </section>

      {/* ---------------- HOW IT WORKS ---------------- */}
      <section className="py-16 px-6 bg-white shadow-sm">
        <h2 className="text-6xl mb-10 text-center text-gray-900">
          How It Works
        </h2>
        <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Student Registration",
              icon: (
                <GraduationCap className="mx-auto h-10 w-10 text-[#007BFF] mb-4 animate-pulse" />
              ),
            },
            {
              title: "Payment & Project Allocation",
              icon: (
                <CreditCard className="mx-auto h-10 w-10 text-[#007BFF] mb-4 animate-bounce" />
              ),
            },
            {
              title: "Task Execution",
              icon: (
                <Code2 className="mx-auto h-10 w-10 text-[#007BFF] mb-4 animate-spin-slow" />
              ),
            },
            {
              title: "AI Evaluation",
              icon: (
                <Brain className="mx-auto h-10 w-10 text-[#007BFF] mb-4 animate-pulse" />
              ),
            },
            {
              title: "Certificate Download",
              icon: (
                <CheckCircle className="mx-auto h-10 w-10 text-[#007BFF] mb-4 animate-fade" />
              ),
            },
          ].map((step, idx) => (
            <Card
              key={idx}
              className="text-center p-4 shadow-md hover:shadow-xl transition border-t-4 border-[#007BFF] transform hover:-translate-y-2"
            >
              <CardContent>
                {step.icon}
                <h3 className="font-semibold text-lg">{step.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ---------------- KEY FEATURES ---------------- */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-6xl mb-10 text-center text-gray-900">
          Key Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              Icon: Laptop,
              title: "Multi-Role Dashboard",
              desc: "Dedicated portals for Students, Mentors, and Admins for streamlined management.",
            },
            {
              Icon: Brain,
              title: "AI Evaluation",
              desc: "Integrated with VS Code and Instacks for real-time code validation and scoring.",
            },
            {
              Icon: FileText,
              title: "Quincena Reports",
              desc: "Generates reports every 15 days for 45 Days and Semester internships automatically.",
            },
            {
              Icon: MessageCircle,
              title: "AI Chatbot Assistance",
              desc: "Instantly helps students with debugging, queries, and feedback suggestions.",
            },
            {
              Icon: Award,
              title: "Instant Certificate",
              desc: "Auto-generates personalized certificates after completion and payment.",
            },
          ].map(({ Icon, title, desc }, i) => (
            <Card key={i}>
              <CardContent className="p-6 text-center">
                <Icon className="h-12 w-12 mx-auto text-[#007BFF] mb-4" />
                <h3 className="font-semibold text-xl mb-2">{title}</h3>
                <p>{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ---------------- CALL TO ACTION ---------------- */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-[#E3F2FD] to-[#BBDEFB]">
        <h2 className="text-3xl mb-6 text-gray-900">
          Empowering Students Through Smart Internships
        </h2>
        <Button size="lg" className="bg-[#007BFF] text-white hover:bg-[#0056b3]">
          Get Started Now
        </Button>
      </section>

      {/* ---------------- FOOTER ---------------- */}
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
            <a href="#" className="hover:text-[#007BFF]">Refund Policy</a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#007BFF]/40 to-transparent"></div>
      </footer>
    </div>
  );
}
