import React, { useState, useEffect, useRef } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import {
  Briefcase,
  BarChart,
  Settings,
  Menu,
  X,
  Rocket,
  Cpu,
  Heart,
  Banknote,
  GraduationCap,
  HeartPulse,
  Factory,
  Clapperboard,
  Landmark,
  Building2,
  ShoppingBag,
  
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { Atom } from "lucide-react";




// ✅ Animated Counter Hook
function useCounter(target, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 20);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else setCount(Math.ceil(start));
    }, 20);
    return () => clearInterval(timer);
  }, [target, duration]);
  return count;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef(null);

  // ✅ Initialize AOS + Parallax Scroll
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const handleScroll = () => {
      if (heroRef.current) {
        const offset = window.scrollY * 0.5;
        heroRef.current.style.backgroundPositionY = `${offset}px`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Animated Counters
  const clients = useCounter(5);
  const projects = useCounter(9);
  const awards = useCounter(2);


  {/* Scrolling logos */}
 const logos = [
  "/public/Aims.png",
  "/Public/btb.png",
  "/public/sun.png",
  "/Public/Datafabric.png",
  "/public/xsdata.png",
];
  return (
    <div className="font-sans text-gray-800 scroll-smooth">
      {/* ---------------- HEADER ---------------- */}
      <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-12 py-4 /70 backdrop-blur-md shadow-sm z-50">
        <img src="/gaint-logo.png" alt="GAINT Clout Technologies" className="w-32 h-auto" />
    {/* ---------------- NAVBAR (Animated Dropdown) ---------------- */}
        <nav className="hidden md:block">
          <ul className="flex justify-center gap-8 text-4xl  items-center bg-gray-100 w-[900px]  h-20   rounded-[60px] px-6 mr-[360px]">
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
          <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-md border border-gray-300 text-white"
        >
          {menuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
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

      {/* ---------------- HERO / ABOUT ---------------- */}
<section
  id="about"
  ref={heroRef}
  className="relative min-h-screen w-full flex items-center justify-end "
>
  {/* 🔹 Fullscreen Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover"
  >
    <source src="/hero-bg.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* 🔹 Subtle dark overlay for readability */}
            <div className="absolute inset-0 bg-white/20"></div>

            {/* 🔹 Right-aligned text overlay */}
        <div className="relative z-10 flex flex-col items-end text-right text-white px-8 md:px-24 max-w-4xl">
  {/* Glassmorphic Transparent Card */}
  <div className="bg-white/0 backdrop-blur-lg border border-white/10 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] p-10 md:p-14 transition-all hover:bg-white/20 hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)] ">

    {/* Heading */}
    <h1
      className="
        font-semibold leading-none mb-6 animate-fadeInUp
        bg-gradient-to-r from-[#ffffff] to-[#ffffff] bg-clip-text text-transparent        
        text-[100px] sm:text-[150px] md:text-[180px] lg:text-[200px] xl:text-[120px]
        drop-shadow-[0_0_20px_rgba(0,0,0,0.4)]
      "
    >
      GAINT
    </h1>

    {/* Subtext */}
    <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-white-300 max-w-[700px] leading-tight animate-fadeIn font-[Century_Gothic]">
      DRIVING NEXT-GENERATION INNOVATION THROUGH<br/>
      <span className="bg-gradient-to-r from-[#017907] to-[#008f2b] bg-clip-text text-transparent font-Normal">
        AI
      </span>{" "}
      AND{" "}
      <span className="bg-gradient-to-r from-[rgb(1,124,32)] to-[#018823] bg-clip-text text-transparent font-normal">
        QUANTUM COMPUTING
      </span>
    </p>

  </div>
</div>

          </section>







      {/* ---------------- COUNTERS ---------------- */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16 text-center h-50">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
       <div data-aos="fade-up">
        <h3 className="text-[100px] font-extrabold mb-2">{clients}+</h3>
        <p className="text-[28px]">Happy Clients</p>
      </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-[100px] font-bold mb-2">{projects}+</h3>
            <p className="text-[28px]">AI Projects Delivered</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-[100px] font-bold mb-2">{awards}</h3>
            <p className="text-[28px]">Awards & Recognitions</p>
          </div>
        </div>
      </section>

      {/* ---------------- SERVICES ---------------- */}
{/* ---------------- INDUSTRIES WE SERVICE (BLUE THEME) ---------------- */}
<section id="services" className="py-20 bg-transparent backdrop-blur-0">
  {/* Heading */}
  <div className="text-center mb-12" data-aos="fade-up">
    <h3 className="text-5xl  text-gray-800 mb-3">
      Industries We Service
      
    </h3>
    <p className="text-gray-500 text-3xl">
      Empowering every sector through AI-driven transformation and automation.
    </p>
  </div>

  {/* Industries Grid - 4 per row */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-20 place-items-center">
    {[
      {
        icon: <GraduationCap className="w-12 h-12 text-[#4285F4] transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-500  " />,
        title: "Education",
        desc: "AI-powered learning platforms adaptive assessments  and smart academic analytics",
      },
      {
        icon: <HeartPulse className="w-12 h-12 text-[#4285F4] transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-500" />,
        title: "Healthcare & Pharma",
        desc: "AI diagnostics  telemedicine  predictive analytics  and connected medical ecosystems",
      },
      {
        icon: <Factory className="w-12 h-12 text-[#4285F4] transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-500" />,
        title: "Manufacturing",
        desc: "Smart factory automation  robotics integration  and predictive maintenance ",
      },
      {
        icon: <Clapperboard className="w-12 h-12 text-[#4285F4] transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-500" />,
        title: "Media & Entertainment",
        desc: "Content recommendation  media automation  and AI-driven audience insights ",
      },
      {
        icon: <Briefcase className="w-12 h-12 text-[#4285F4] transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-500" />,
        title: "Professional Services",
        desc: "Workflow optimization  document AI and smart client management systems ",
      },
      {
        icon: <Landmark className="w-12 h-12 text-[#4285F4] transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-500" />,
        title: "Public Sector",
        desc: "Smart governance  digital citizen services  and policy analytics using AI ",
      },
      {
        icon: <Building2 className="w-12 h-12 text-[#4285F4] transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-500" />,
        title: "Real Estate",
        desc: "AI property valuation  virtual tours  and predictive real estate analytics ",
      },
      {
        icon: <ShoppingBag className="w-12 h-12 text-[#4285F4] transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-500" />,
        title: "Retail",
        desc: "AI-driven personalization  inventory forecasting  and sentiment-based engagement ",
      },
    ].map((industry, i) => (
      <div
        key={i}
        data-aos="fade-up"
        data-aos-delay={i * 100}
        className="group relative backdrop-blur-sm bg-white/20 border border-white/30 rounded-2xl shadow-md w-72 text-center p-8 hover:scale-105 hover:shadow-blue-300 transition-all overflow-hidden"
      >
        {/* Blue Glow Layer */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-2xl bg-[#4285F4]/25"></div>

        {/* Icon */}
        <div className="flex justify-center mb-4 relative z-10 animate-float">
          {industry.icon}
        </div>

        {/* Content */}
        <h4 className="font-semibold text-2xl mb-2 text-gray-800 relative z-10 text-century gothic">
          {industry.title}
        </h4>
        <p className="text-gray-700 text-xl relative z-10 text-century gothic">{industry.desc}</p>
      </div>
    ))}
  </div>
</section>





    {/* ---------------- PRODUCTS ---------------- */}
<section id="products" className="py-20 bg-transparent backdrop-blur-0">
  {/* Heading */}
  <div className="text-center mb-12" data-aos="fade-up">
    <h3 className="text-6xl  text-gray-800 mb-3">Our Products</h3>
    <p className="text-gray-500 text-4xl">Innovations developed by GAINT </p>
  </div>

  {/* Products Grid */}
  <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 px-6 md:px-20">
    {[
        {
        icon: <Heart className="w-12 h-12 text-[#4285F4]" />,
        name: "DonorGO",
        desc: "Smart blood donation and emergency request system integrating donors, hospitals, and NGOs.",
        link: "/donorgo",
      },
        {
        icon: <Rocket className="w-12 h-12 text-[#4285F4]" />,
        name: "GAINTIntern Hub",
        desc: "AI-driven internship & training platform with projects, code evaluation, and job placement.",
        link: "/internsapp",
      },
      
            {
            icon: (
          <Banknote className="w-12 h-12 text-[#4285F4] animate-bounce drop-shadow-[0_0_15px_rgba(66,133,244,0.5)]" />
                ),
        name: "GAINTImmuneIQ",
        desc: "AI-fintech dashboard for investment analytics, trading insights, and market prediction.",
        link: "/Immuneiq",
      },
        {
             icon: (
  <Atom className="w-12 h-12 text-[#4285F4] animate-spin drop-shadow-[0_0_15px_rgba(52,168,83,0.6)]" />
),
              name: "Quantum Key Distribution",
              desc: "Quantum Key Distribution (QKD) leverages quantum mechanics principles superposition and entanglement - to securely exchange encryption keys between two parties.Unlike classical cryptography,QKD instantly detects eavesdropping attempts, post-quantum era",
              link: "/QKD",
            }
        

    ].map((product, i) => (
      <a
        key={i}
        href={product.link}
        data-aos="zoom-in"
        data-aos-delay={i * 150}
        className="group relative backdrop-blur-sm bg-white/20 border border-white/30 rounded-2xl shadow-md p-8 text-center hover:scale-105 hover:shadow-blue-300 transition-all overflow-hidden"
      >
        {/* Blue Glow Layer */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-2xl bg-[#4285F4]/25"></div>

        {/* Icon */}
        <div className="flex justify-center mb-4 relative z-10 animate-float">
          {product.icon}
        </div>

        {/* Content */}
        <h4 className="font-semibold text-2xl mb-2 text-gray-800 relative z-10 text-century gothic">
          {product.name}
        </h4>
        <p className="text-gray-700 text-xl relative z-10 text-century gothic">{product.desc}</p>
      </a>
    ))}
  </div>
</section>


      {/* ---------------- TESTIMONIALS ---------------- */}
      {/* <section id="testimonials" className="py-20 bg-gray-50">
        <div className="text-center mb-12" data-aos="fade-up">
          <h3 className="text-6xl  mb-2">Testimonials</h3>
          <p className="text-gray-500 text-4xl">What our clients say about us</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 px-6 md:px-20">
  {[
    {
      name: "Sarah Taylor",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      quote:
        "GAINT’s AI solutions revolutionized our operations. Their innovation and professionalism are unmatched.",
    },
    {
      name: "Michael Anderson",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      quote:
        "Working with GAINT was a game-changer. Their team brought real intelligence and automation to our business processes.",
    },
    {
      name: "Priya Nair",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
      quote:
        "GAINT’s approach to AI and analytics is cutting-edge. They truly understand how to turn data into decisions.",
    },
  ].map((client, index) => (
    <div
      key={index}
      data-aos="zoom-in"
      className="bg-white rounded-3xl shadow-lg w-80 p-6 text-center hover:shadow-2xl transition-all"
    >
      <img
        src={client.img}
        alt={client.name}
        className="w-16 h-16 rounded-full mx-auto mb-4"
      />
      <h4 className="font-semibold mb-2 text-2xl text-century gothic">{client.name}</h4>
      <p className="text-gray-500 text-xl mb-4 text-century gothic">“{client.quote}”</p>
      <div className="flex justify-center gap-4 text-gray-500 text-2xl">
        <FaFacebookF className="hover:text-green-600" />
        <FaInstagram className="hover:text-green-600" />
        <FaLinkedinIn className="hover:text-green-600" />
      </div>
    </div>
  ))}
</div>

      </section> */}


  {/* Scrolling logos */}

     <section className="bg-white py-10 overflow-hidden">
      <div className="text-center mb-8">
        <h3 className="text-6xl  text-gray-800">Our Collaborations</h3>
        <p className="text-gray-500 text-4xl">
          Industry, Academia, and Media partnerships powering GAINT 
        </p>
      </div>

      {/* Scrolling logos wrapper */}
      <div className="relative flex overflow-hidden py-10 bg-white">
      {/* Duplicate logos for seamless loop */}
      <div className="flex animate-scroll gap-20">
        {[...logos, ...logos].map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt={`Partner ${i + 1}`}
            className="h-10  object-contain grayscale hover:grayscale-0 transition-all duration-300"
          />
        ))}
      </div>
    </div>

      {/* Tailwind custom animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: calc(200%); /* double width for looping */
          animation: scroll 35s linear infinite;
        }
      `}</style>
    </section>




      {/* ---------------- FOOTER ---------------- */}
        {/* <footer className="relative w-full bg-black/70 backdrop-blur-lg text-gray-300 border-t border-gray-800"> */}
              <footer className="relative w-full bg-black/60 backdrop-blur-xl text-gray-300 border-t border-gray-700 py-16 overflow-hidden">
        {/* ========= Top Grid ========= */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-6 text-sm">
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Popular Links</h3>
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

          <div className="mt-3 flex justify-center gap-6 text-xs text-gray-100">
            <a href="#" className="hover:text-[#c5a77b]">Privacy Policy</a>
            <a href="#" className="hover:text-[#c5a77b]">Terms & Conditions</a>
            {/* <a href="#" className="hover:text-[#c5a77b]">Refund Policy</a> */}
          </div>
        </div>

        {/* ========= Glow Line ========= */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#c5a77b]/40 to-transparent"></div>
      </footer>
    {/* </footer> */}
    </div>
  );
}
