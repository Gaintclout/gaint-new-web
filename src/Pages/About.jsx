import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Users,
  Target,
  TrendingUp,
  Lightbulb,
  Workflow,
  Menu,
  X,
  Eye,
  HeartHandshake,
  Cpu,
  MessageSquare,
  ChevronDown,
  Rocket,
  GraduationCap,
  Handshake,
  BrainCircuit,
  Diamond,
  Clock4,
  Hand,
  Heart,
  Quote,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { motion } from "framer-motion";
import { Atom } from "lucide-react";



// ========================== NAVBAR ==========================
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  //  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-12 py-4 /70 backdrop-blur-md shadow-sm z-50">
      <img
        src="/gaint-logo.png"
        alt="GAINT Clout Technologies"
        className="w-32 h-auto"
      />

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex justify-center gap-8 text-4xl  items-center bg-gray-100 w-[1000px] h-24 rounded-[60px] px-6 mr-[360px]">
          <a href="/" className="hover:text-[#4285F4] transition duration-300">
            Home
          </a>
          <li>
            <Link to="/About" className="hover:text-[#4285F4] transition duration-300">
              About
            </Link>
          </li>
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
              href="/Contact"
              className="hover:text-[#4285F4] transition duration-300"
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
  );
};

// ========================== ABOUT PAGE ==========================
export default function PQCtGAINT() {
    // ✅ FIX ADDED HERE — the state must be inside this component
  const [isExpanded, setIsExpanded] = useState(false);
  const strengths = [
      {
      icon: <Users className="w-9 h-9" />,
      title: "Single Point of Contact",
      desc: "One partner for strategy design engineering deployment and support",
    },

    {
      icon: <ShieldCheck className="w-9 h-9" />,
      title: "Dedicated Experts",
      desc: "A focused multidisciplinary team committed to outcomes",
    },
    {
      icon: <Target className="w-9 h-9" />,
      title: "Quality & Value",
      desc: "We measure success by reliability security and real business value",
    },
    {
      icon: <Lightbulb className="w-9 h-9" />,
      title: "Domain Depth",
      desc: "Experience across multiple industries to move faster with fewer risks.",
    },
    {
      icon: <TrendingUp className="w-9 h-9" />,
      title: "Competitive Pricing",
      desc: "Transparent India-first pricing with flexible engagement models",
    },
    {
      icon: <Workflow className="w-9 h-9" />,
      title: "Always Upgrading",
      desc: "Continuous adoption of new and emerging technologies",
    },
  ];

  const reasons = [
    {
      icon: <Diamond className="w-6 h-6 text-white" />,
      title: "Excellence in Innovation",
      desc: "We deliver cutting-edge AI and digital solutions tailored to your goals.",
      color: "from-[#6D28D9] to-[#9333EA]",
    },
    {
      icon: <Clock4 className="w-6 h-6 text-white" />,
      title: "On-Time Delivery",
      desc: "Our agile teams ensure every project meets deadlines without compromise.",
      color: "from-[#3B82F6] to-[#06B6D4]",
    },
    {
      icon: <Hand className="w-6 h-6 text-white" />,
      title: "Client-Centric Approach",
      desc: "We collaborate closely with clients to build scalable, human-centered tech.",
      color: "from-[#14B8A6] to-[#0EA5E9]",
    },
    {
      icon: <Heart className="w-6 h-6 text-white" />,
      title: "Trusted Partnerships",
      desc: "Our success is built on integrity, transparency, and long-term relationships.",
      color: "from-[#F43F5E] to-[#EC4899]",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 60, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1, ease: "easeOut", staggerChildren: 0.15 },
    },
  };

  return (
    <div className="w-full text-gray-800">
      <Navbar />

      {/* ===== HERO ===== */}
      <header className="relative overflow-hidden mt-32">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: "url('./about-image.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#4285F4]/60 to-black/60"></div>
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-24 text-white">
          <div className="flex items-center gap-3 mb-6">
            <Cpu className="w-7 h-7" />
            <span className="uppercase tracking-widest text-white/90 text-sm">
              About Us
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            
            THE BEST AI SOLUTION - GAINT CLOUT TECHNOLOGIES
          </h1>
         <p className="mt-6 max-w-3xl text-white/90 text-3xl uppercase">
  FOUNDED IN 2024, GAINT IS AN AI-DRIVEN STARTUP BASED IN INDIA. WE DESIGN AND BUILD INTELLIGENT SYSTEMS THAT AUTOMATE WORKFLOWS, AUGMENT DECISION-MAKING, AND UNLOCK MEASURABLE GROWTH ACROSS INDUSTRIES.
</p>

        </div>
      </header>

      {/* ===== VISION / MISSION / VALUES ===== */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white overflow-hidden py-28 font-century gothic"
        style={{ backgroundImage: "url('/assets/vision-bg-transparent.png')" }}
      >
        
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/70"></div>
        <div className="relative z-10 text-center mb-20">
        <h2 className="text-6xl font-bold tracking-tight text-center font-century gothic">
          <span className="text-[#34A853]">VISSION</span>
         <span className="text-black font-light text-6xl leading-none"> | </span>
          <span className="text-[#34A853]">MISSION</span>
           <span className="text-black font-light text-6xl leading-none"> | </span>
          <span className="text-[#34A853]">VALUES</span>
        </h2>
         <div className="flex items-center gap-2">
    {/* <Cpu className="w-8 h-8 text-[#34A853] animate-pulse" /> */}
    <BrainCircuit className="w-8 h-8 text-[#EA4335] animate-bounce " />
  </div>
  

          <p className="text-black/80 mt-4 max-w-2xl mx-auto text-3xl">
            BUILDING A SUSTAINABLE, INTELLIGENT, AND INCLUSIVE INDIA THROUGH
            INNOVATION.
          </p>
        </div>

        <div className="relative z-10 grid md:grid-cols-3 gap-10 px-10 lg:px-24">
          {/* Vision */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-white/10 border border-black/10 rounded-3xl p-10 hover:scale-[1.03] hover:bg-white/20 hover:shadow-[0_0_25px_#FBBC05] transition-all"
          >
            <div className="flex justify-center mb-6">
              <Eye className="w-14 h-14 text-[#FBBC05] animate-pulse" />
            </div>
            <h3 className="text-3xl font-semibold mb-3 text-center">
              Our Vision
            </h3>
            <p className="text-black/80 text-center leading-relaxed text-xl">
              We envision a world where AI drives efficiency, innovation, and
              intelligent automation, empowering individuals and organizations.
              Our ethical, transparent solutions aim to revolutionize industries
              and contribute to a smarter, more successful future.
            </p>
          </motion.div>
          

          {/* Mission */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-white/10 border border-black/10 rounded-3xl p-10 hover:scale-[1.03] hover:bg-white/20 hover:shadow-[0_0_25px_#34A853] transition-all"
          >
            <div className="flex justify-center mb-6">
              <Target className="w-14 h-14 text-[#34A853] animate-pulse" />
            </div>
            <h3 className="text-3xl font-semibold mb-3 text-center">
              Our Mission
            </h3>
            <p className="text-black/80 text-center leading-relaxed text-xl">
              Our mission is to harness AI to solve complex business problems,
              enabling clients to stay ahead in a competitive landscape. We
              create user-friendly, robust, and intelligent solutions that
              deliver real value.
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-white/10 border border-black/10 rounded-3xl p-10 hover:scale-[1.03] hover:bg-white/20 hover:shadow-[0_0_25px_#EA4335] transition-all"
          >
            <div className="flex justify-center mb-6">
              <HeartHandshake className="w-14 h-14 text-[#EA4335] animate-pulse" />
            </div>
            <h3 className="text-3xl font-semibold mb-3 text-center">
              Our Values
            </h3>

            <p className="text-black/80 text-center leading-relaxed text-xl">
              Integrity, Collaboration, Innovation, and Respect are the core
              values that guide us. We believe in acting with honesty, working
              together to achieve shared goals, driving creativity, and fostering
              a culture of mutual respect.
            </p>
          </motion.div>
        </div>
        <div className="flex items-center gap-2">
    <Cpu className="w-8 h-8 text-[#34A853] animate-pulse" />
    {/* <BrainCircuit className="w-8 h-8 text-[#EA4335] animate-bounce" /> */}
  </div>
      </section>

      {/* ===== OUR STRENGTHS ===== */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-8">
        <ShieldCheck className="w-14 h-14 text-[#4285F4]" />
          <h2 className="text-2xl md:text-6xl font-bold">Our Strengths</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 ">
          {strengths.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#4285F4]/10 text-[#4285F4] w-10 h-10">
                  {s.icon}
                </div>
                <h3 className="text-3xl font-semibold">{s.title}</h3>
              </div>
              <p className="mt-3 text-gray-600 text-2xl">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#34A853]/10 via-[#4285F4]/10 to-transparent blur-3xl"></div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative max-w-6xl mx-auto px-6"
        >
          <div className="bg-white shadow-2xl rounded-3xl border border-gray-100 p-10 backdrop-blur-sm">
            <div className="text-center mb-10">
              <div className="flex justify-center mb-4">
                <MessageSquare className="w-10 h-10 text-[#34A853]" />
                {/* <div className="absolute -top-6 right-10 w-8 h-8 bg-[#3b82f6] rotate-45 rounded-sm"></div> */}
                  <div className="absolute -top-12 right-8 text-[#3b82f6]">
                  <Atom className="w-10 h-10 animate-spin-slow" />
                </div>
              </div>
              
              <h2 className="text-6xl font-bold text-[#2e7d32]">
               
              FUTURE PLANS OF GAINT
              </h2>
              {/* <p className="text-gray-600 mt-3 text-3xl">
          
              FUTURE PLANS OF GAINT
              </p> */}
            </div>

            <div className="divide-y divide-gray-200">
              {[
                {
                  icon: <Target className="w-6 h-6 text-[#34A853]" />,
                  q: "Year 1: Foundation & Growth?",
                  a: "Focus Areas: Branding Product Development, Prototyping Market Penetration, Brand Awareness, Networking, Team Building & Infrastructure, Establish Gaint Clout Technologies as a leader in AI, cybersecurity, and emerging tech.",
                },
                {
                  icon: <Rocket className="w-6 h-6 text-[#EA4335]" />,
                  q: "Year 2: Expansion & Innovation?",
                  a: "Focus Areas: Scaling Operations, Diversification Product Refinement, Scaling Customer Acquisition, Expansion Partnerships, Collaborations, Revenue Growth, Funding, Integrate AI-powered features, Develop a custom AI-powered LMS for online learning and targeting Indian students.",
                },
                {
                  icon: <GraduationCap className="w-6 h-6 text-[#FBBC05]" />,
                  q: "Year 3: Market Leadership & Diversification?",
                  a: "Focus Areas: AI Innovation, Market Leadership, Global Expansion Al Innovation, R&D Global Market Leadership, Sustainability, Quantum computing research initiatives for AI and cybersecurity, and grow Gaint Clout Technologies into a trusted brand in AI & ML, AI Agent and Agentic AI",
                },
                // {
                //   icon: <Handshake className="w-6 h-6 text-[#4285F4]" />,
                //   q: "How can colleges or organizations collaborate with GAINT CLOUT?",
                //   a: "We partner through MoUs, CSR collaborations, and joint innovation programs — enabling technology-driven education, healthcare, and research initiatives aligned with India’s future tech vision.",
                // },
                // {
                //   icon: <BrainCircuit className="w-6 h-6 text-[#34A853]" />,
                //   q: "What makes GAINT CLOUT unique among AI startups?",
                //   a: "We combine deep domain expertise, cost-effective engineering, and human-centered design — integrating AI Agents, quantum computing, and sustainable innovation to make real-world impact.",
                // },
                
              ].map((faq, i) => (
                <motion.details
                  key={i}
                  className="group py-5 cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <summary className="flex justify-between items-center text-3xl  text-gray-800 hover:text-[#34A853] transition list-none ">
                    <div className="flex items-center gap-3 ">
                      <div className="p-2 bg-gray-100 rounded-lg">{faq.icon}</div>
                      {faq.q}
                    </div>
                    <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform duration-300" />
                  </summary>
                  <p className="text-gray-500 mt-3 ml-11 leading-relaxed text-xl">
                    {faq.a}
                  </p>
                </motion.details>
              ))}
              
            </div>
          </div>
        </motion.div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}


<section className="relative overflow-hidden py-24 bg-gradient-to-br from-white via-[#f9fafb] to-white">
  {/* Background Glow */}
  <div className="absolute inset-0 bg-gradient-to-tr from-[#34A853]/10 via-[#4285F4]/10 to-transparent blur-3xl"></div>

  {/* Motion Container */}
  <motion.div
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: true }}
    className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 items-center gap-16"
  >
    {/* Left Side */}
<div className="flex flex-col items-start gap-10 text-2xl">
  {[
    "Time Tested Business Model",
    "Diverse Domain Competency",
    "Strong Technical Expertise",
    "Reliable And Consistent Communication",
  ].map((title, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: i * 0.2 }}
      viewport={{ once: true }}
      className="flex items-center justify-start gap-6"
    >
      {/* Circle Number */}
      <motion.div
        whileHover={{ scale: 1.15, rotate: 8 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="flex items-center justify-center
                   w-14 h-14 rounded-full
                   bg-gradient-to-br from-[#34A853] to-[#4285F4]
                   text-white text-lg font-bold
                   shadow-lg shrink-0"
      >
        {i + 1}
      </motion.div>

      {/* Text */}
      <h4 className="text-2xl text-gray-900 font-medium leading-snug max-w-xs">
        {title}
      </h4>
    </motion.div>
  ))}
</div>



    {/* Center Circle */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center text-center relative"
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute w-80 h-80 bg-gradient-to-br from-[#4285F4] to-[#34A853] rounded-full blur-3xl opacity-30"
            />
            <div className="relative w-60 h-60 bg-gradient-to-br from-[#4285F4] to-[#34A853] rounded-full flex flex-col items-center justify-center text-white shadow-2xl">
              <h3 className="text-2xl font-semibold">WHY</h3>
              <h2 className="text-4xl font-extrabold tracking-wide">CHOOSE</h2>
              <h3 className="text-2xl font-semibold">US</h3>
            </div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-sm mt-8 text-gray-600 text-center leading-relaxed text-2xl"
              >
                GAINT CLOUT COMBINES DEEP TECHNICAL EXPERTISE, AI INNOVATION, AND CUSTOMER-CENTRIC DESIGN TO CREATE SUSTAINABLE VALUE FOR EVERY PARTNER.

              </motion.p>
            </motion.div>

            {/* Right Side */}
      <div className="flex flex-col items-start gap-10 text-2xl">
  {[
    "A Flexible Pricing Model Flexible",
    "Standardize And Automate Processes",
    "Enhance Public Service Delivery",
    "Empower Staff With Knowledge",
    "Effective Program Monitoring",
  ].map((title, i) => (
    <motion.div
      key={i + 4}
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: i * 0.2 }}
      viewport={{ once: true }}
      className="flex items-center justify-start gap-6"
    >
      {/* Circle Number */}
      <motion.div
        whileHover={{ scale: 1.15, rotate: -8 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="flex items-center justify-center
                    w-14 h-14 rounded-full
                    bg-gradient-to-br from-[#4285F4] to-[#34A853]
                    text-white text-lg font-bold
                    shadow-lg shrink-0"
      >
        {i + 5}
      </motion.div>

      {/* Text */}
      <h4 className="text-2xl text-gray-800 font-medium leading-snug max-w-xs">
        {title}
      </h4>
    </motion.div>
  ))}
</div>


          </motion.div>
        </section>




      {/* ===== MEET OUR CEO ===== */}
      <section className="relative bg-white py-20 px-6 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden">
        {/* Left Text */}
        <div className="lg:w-1/2">
         <div className="flex flex-col items-start gap-2 mb-6">
          {/* Title Row */}
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-4xl font-bold text-gray-900">
               Mr. PRASAD KOTTAMASU
            </h2>
          </div>

          {/* Name */}
          <h3 className="text-2xl  text-gray-500 tracking-wide">
            Co-Founder & Chairman
          </h3>
        </div>

          <p className="text-gray-600 text-lg leading-relaxed">
          At Giant Clout, we aim to become more than just a technology company; we want to be a catalyst for education, innovation, and transformation across sectors.
          Our roadmap is clear:<br></br>
          • Empower the next generation of innovators through education and mentoring.<br></br>• Drive R&D in AI, quantum computing, and cybersecurity.<br></br>
          • Develop smart platforms for healthcare, education, media, and public services.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed mt-6">
                    We believe in strategic partnerships and building a creative, inclusive culture. The future lies in making technology more human-centric and accessible for all.
          Together, we are shaping a better tomorrow with purposeful innovation.
                    </p>
                  </div>

        {/* Right Image */}
        <div className="relative flex justify-center items-center lg:w-1/2">
          <div className="absolute -top-6 -left-6 bg-[#fbb040] text-white px-6 py-4 rounded-lg shadow-md rotate-12 transform hover:rotate-0 transition duration-300">
            <h3 className="font-bold text-2xl leading-tight text-center">
              Co-Founder <br />&<br></br>
              <span className="text-3xl"> Chairman</span>
            </h3>
          </div>
          <div className="absolute -top-6 right-10 w-8 h-8 bg-[#3b82f6] rotate-45 rounded-sm"></div>
          <div className="absolute bottom-0 left-8 w-6 h-6 bg-[#3b82f6] rotate-45 rounded-sm"></div>
     

<div className="relative w-80 h-80 rounded-full overflow-hidden shadow-xl border-4 border-gray-100 group">
  {/* Profile Image */}
  <img
    src="/public/Prasad Sir.jpg"
    alt="chairman"
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-6">
    {[
      { Icon: FaFacebookF, link: "https://www.facebook.com/" },
      { Icon: FaInstagram, link: "https://www.instagram.com/" },
      { Icon: FaXTwitter, link: "https://x.com/" },
      { Icon: FaLinkedinIn, link: "https://www.linkedin.com/" },
    ].map(({ Icon, link }, i) => (
      <a
        key={i}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-3xl hover:text-[#c5a77b] transform hover:scale-110 transition-all duration-300"
      >
        <Icon />
      </a>
    ))}
  </div>
</div>

          <div className="absolute -top-12 right-8 flex flex-col items-center text-[#3b82f6]">
  {/* Animated Atom Icon */}
  
 
        </div>
        <div className="relative">
            <Atom className="w-10 h-10 animate-spin-slow" />
            {/* ‘Si’ text inside the atom */}
            <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-[#3b82f6]">
              Si
            </span>
          </div>
                </div>
              </section>

              <div className="relative">
            <Atom className="w-10 h-10 animate-spin-slow" />
            {/* ‘Si’ text inside the atom */}
            <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-[#3b82f6]">
              Si
            </span>
          </div>
  


      <section className="relative bg-white py-20 px-6 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden">
        {/* Left Text */}
     
         <div className="relative flex justify-center items-center lg:w-1/2">
          <div className="absolute -top-6 -left-6 bg-[#fbb040] text-white px-6 py-4 rounded-lg shadow-md rotate-12 transform hover:rotate-0 transition duration-300">
            <h3 className="font-bold text-2xl leading-tight text-center">
              Founder <br />&<br></br>
              <span className="text-3xl">CEO</span>
            </h3>
            
          </div>
          
          <div className="absolute -top-6 right-10 w-8 h-8 bg-[#3b82f6] rotate-45 rounded-sm"></div>
          <div className="absolute bottom-0 left-8 w-6 h-6 bg-[#3b82f6] rotate-45 rounded-sm"></div>
          
      

            <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-xl border-4 border-gray-100 group">
            {/* Profile Image */}
            <img
              src="/public/ceo.jpg"
              alt="CEO"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-6">
              {[
                { Icon: FaFacebookF, link: "https://www.facebook.com/SrinivasaRao.Kolakaluri" },
                { Icon: FaInstagram, link: "https://www.instagram.com/" },
                { Icon: FaXTwitter, link: "https://x.com/kolakalurisrinu" },
                { Icon: FaLinkedinIn, link: "https://www.linkedin.com/in/srinivasraokolakaluri/" },
              ].map(({ Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-3xl hover:text-[#c5a77b] transform hover:scale-110 transition-all duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          
        </div>

        {/* Right Image */}
           <div className="lg:w-1/2">
      <div className="flex flex-col items-start gap-2 mb-6">
        <div className="flex items-center gap-3">
          {/* <Quote className="w-10 h-10 text-[#fbb040]" /> */}
          <h2 className="text-4xl font-bold text-gray-900">
            Mr. SRINIVASA RAO KOLAKALURI
            {/* Founder & CEO – Gaint Clout Technologies Pvt. Ltd. */}
          </h2>
        </div>

        {/* Name Section */}
        <h3 className="text-2xl font-semibold text-[#34A853] tracking-wide">
          {/* Mr. Srinivasa Rao Kolakaluri */}
        </h3>
        <h3 className="text-2xl text-gray-500 tracking-wide relative text-right">
          Founder & CEO
        </h3>
      </div>

      {/* Description */}
   <p
  className={`text-gray-600 text-lg leading-relaxed transition-all duration-500 ${
    isExpanded ? "max-h-full" : "max-h-48 overflow-hidden"
  }`}
>
  With over a decade of experience in the IT industry, I bring a unique blend of
  technical expertise, leadership, and a futuristic vision to the table. I hold
  a <b>B.Tech</b> and <b>M.Tech</b> in Computer Science & Engineering and have
  strengthened my knowledge through global certifications in:
  <br /><br />
  • Data Science - IIT Madras
  <br />
  • Machine Learning (ML) - Stanford University
  <br />
  • Data Analytics - Google
  <br />
  • Quantum Computing (Qiskit) - IBM
  <br /><br />
  Driven by a deep passion for artificial intelligence, my focus is to lead
  innovation in AI until 2030 and beyond. From AI-driven healthcare platforms to
  agentic AI systems and quantum computing-based research, I am committed to
  building technologies that create real-world impact.
  <br /><br />
  <b>My Vision</b>
  <br />
  To transform industries through AI-first thinking and quantum-powered
  innovation while making emerging technologies accessible, impactful, and
  ethical — especially for India at large.
  <br /><br />
  <b>Visionary Tech Entrepreneur:</b> On a mission to revolutionize India’s
  future — one AI-powered solution at a time. From mentoring students in AI/ML
  to building healthcare platforms with quantum computing.
  <br /><br />
  <b>The Innovator:</b> Blending bleeding-edge tech like GPT, MedPaLM, and
  quantum computing with grounded use cases — whether it’s a VR-powered med
  school tutor or a real-time blood donor app saving lives.
  <br /><br />
  <b>The Strategist:</b> Not just building, but planning — breaking complex
  roadmaps into MVPs, growth strategies, legal frameworks, and marketing
  blueprints — all while guiding trainees, running workshops, and drafting
  investor plans.
  <br /><br />
  <b>The Brand Builder:</b> Through <b>Giant Clout Technologies</b>, launching
  everything from cybersecurity courses to a media network (GiantTV) to digital
  training platforms — all with bold, regional impact and global ambition.
  <br /><br />
  <b>The Impact Driver:</b> Whether it’s fake news detection, finance
  automation, or public sector innovations, my focus always comes back to one
  thing — real-world change using technology, especially for underserved
  communities.
  <br /><br />
  <b>Digital Presence Strategy:</b> Through Giant Clout, I’m creating a
  digital-first brand ecosystem — combining training, AI agent services,
  workshops, digital marketing, and YouTube broadcasting to educate, innovate,
  and inspire.
  <br /><br />
  <b>Key Projects & Focus Areas:</b>
  <br />
  • Giant Clout Technologies Pvt. Ltd. — Pioneering AI solutions for healthcare,
  education, cybersecurity, and more.
  <br />
  • AI for Medicos & Doctors — Tutoring systems, diagnosis support, and hospital
  automation.
  <br />
  • AI-Driven Public Platforms — From DonorGO (Blood Donation App) to GiantTV
  (Media & Awareness Channel).
  <br />
  • R&D in Quantum Computing — Exploring quantum-powered applications across
  pharma, finance, and national infrastructure.
  <br />
  • Cybersecurity Education & Training — Equipping the next generation through
  hands-on, industry-grade courses.
</p>

<h4 className="text-2xl font-semibold text-[#34A853] tracking-wide">
  {/* Mr. Srinivasa Rao Kolakaluri */}
</h4>

      {/* ✅ Working Read More / Less Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-9 px-6 py-2 text-sm font-Normal text-white rounded-full 
                       bg-gradient-to-r from-[#2563EB] to-[#00ACC1] 
                       shadow-md hover:opacity-90 transition-all duration-300"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>

   
   
    </div>
                      <div className="relative">
          <Atom className="w-10 h-10 animate-spin-slow" />
          {/* ‘Si’ text inside the atom */}
          <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-[#3b82f6]">
            Si
          </span>
        </div>
      </section>


      
  <footer
      id="footer"
      className="relative w-full bg-black/60 backdrop-blur-xl text-gray-300 border-t border-gray-700 py-16 overflow-hidden"
    >
      {/* ========= Top Grid ========= */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-6 text-sm">
        {/* ===== Column 1 ===== */}
        <div>
          <h3 className="text-white font-Normal mb-4 text-lg">
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

        {/* ===== Column 2 ===== */}
        <div>
          <h3 className="text-white font-Normal mb-4 text-lg">Free Tools</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-[#c5a77b]">
                AI Text Generator
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#c5a77b]">
                Resume Builder
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#c5a77b]">
                File Converter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#c5a77b]">
                Data Formatter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#c5a77b]">
                PDF Split & Merge
              </a>
            </li>
          </ul>
        </div>

        {/* ===== Column 3 ===== */}
        <div>
          <h3 className="text-white font-Normal mb-4 text-lg">Company</h3>
           <ul className="space-y-2">
              <li><a href="/About" className="hover:text-[#c5a77b]">About Us</a></li>
              <li><a href="/Service" className="hover:text-[#c5a77b]">Services</a></li>
              <li><a href="/" className="hover:text-[#c5a77b]">Products</a></li>
              <li><a href="/Career" className="hover:text-[#c5a77b]">Careers</a></li>
              <li><a href="/Contact" className="hover:text-[#c5a77b]">Contact</a></li>
            </ul>
        </div>

        {/* ===== Column 4 ===== */}
        <div>
          <h3 className="text-white font-Normal mb-4 text-lg">Services</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-[#c5a77b]">
                Website Design
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#c5a77b]">
                App Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#c5a77b]">
                AI & ML Solutions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#c5a77b]">
                Cloud Integration
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#c5a77b]">
                IT Consulting
              </a>
            </li>
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
          © {new Date().getFullYear()} GAINT CLOUT TECHNOLOGIES PVT LTD. All
          rights reserved.
        </p>

        <div className="mt-3 flex justify-center gap-6 text-xs text-gray-500">
          <a href="#" className="hover:text-[#c5a77b]">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-[#c5a77b]">
            Terms & Conditions
          </a>
          {/* <a href="#" className="hover:text-[#c5a77b]">
            Refund Policy
          </a> */}
        </div>
      </div>

      {/* ========= Glow Line ========= */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#c5a77b]/40 to-transparent"></div>
    </footer>

     
    </div>
  );
}
