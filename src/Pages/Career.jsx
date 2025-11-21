import React from "react";
import { MapPin, Clock, Building2, Users, Laptop, FileCheck, Phone, Mail, Globe } from "lucide-react";

export default function CareerPage() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Career Opportunity</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Join Gaint Clout Technologies under our <span className="font-semibold">Skill Development Initiative</span>
        </p>
      </header>

      {/* Job Overview */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-4">Associate Software Engineer</h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
          <p className="flex items-center gap-2"><MapPin className="w-5 h-5 text-indigo-600" /> Location: All Districts of Andhra Pradesh</p>
          <p className="flex items-center gap-2"><Clock className="w-5 h-5 text-indigo-600" /> Type: Full-Time (Contract/Probation – 1 Year)</p>
          <p className="flex items-center gap-2"><Users className="w-5 h-5 text-indigo-600" /> Vacancies: 1 per district (Total: 26)</p>
          <p className="flex items-center gap-2"><Building2 className="w-5 h-5 text-indigo-600" /> Company: Gaint Clout Technologies Pvt. Ltd.</p>
        </div>
      </section>

      {/* About the Initiative */}
      <section className="bg-white border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <h3 className="text-xl font-semibold mb-3">About the Initiative</h3>
          <p className="text-gray-700">
            Gaint Clout Technologies is launching a statewide Skill Development Program to empower youth with
            industry-relevant software development skills. As part of this mission, we are hiring Associate
            Software Engineers across each district of Andhra Pradesh who will play a vital role in local training,
            tech development, and community engagement.
          </p>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h3 className="text-xl font-semibold mb-4">Responsibilities</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Assist in the development of web and mobile applications and bots using modern technologies (HTML, CSS, JavaScript, React, Node.js, Python, AI/ML, Data Science, etc.)</li>
          <li>Support local skill training workshops and bootcamps for engineering and diploma students</li>
          <li>Help implement AI and software projects under the supervision of the central tech team</li>
          <li>Coordinate with local colleges, training centers, and youth groups</li>
          <li>Maintain progress reports and update the core team on district-level activities</li>
          <li>Test and debug code to ensure quality and functionality</li>
          <li>Participate in regular online meetings and training with the HQ team</li>
        </ul>
      </section>

      {/* Eligibility */}
      <section className="bg-white border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <h3 className="text-xl font-semibold mb-4">Eligibility</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>B.Tech/B.E. in CSE, IT, ECE, EEE, or relevant fields (2022–2024 passouts preferred)</li>
            <li>Diploma holders with strong coding skills are also eligible</li>
            <li>Basic programming knowledge in Python, JavaScript, Java, or C/C++</li>
            <li>Passion for teaching, community engagement, and software development</li>
            <li>Good communication skills in English and Telugu</li>
            <li>Willingness to work in the allocated district</li>
          </ul>
        </div>
      </section>

      {/* Preferred Skills */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h3 className="text-xl font-semibold mb-4">Preferred Skills (Good to Have)</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Experience with React, Node.js, or backend frameworks</li>
          <li>Knowledge of AI, ML, or emerging tech</li>
          <li>Familiarity with Git/version control and live projects</li>
          <li>Leadership experience in college tech clubs/fests</li>
        </ul>
      </section>

      {/* Benefits */}
      <section className="bg-white border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <h3 className="text-xl font-semibold mb-4">Benefits</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Monthly stipend/salary as per company norms</li>
            <li>Certificate and Letter of Recommendation (LOR)</li>
            <li>Opportunity to work on live tech and AI-based projects</li>
            <li>Special preference for permanent roles based on performance</li>
            <li>Leadership and tech exposure across AP through Gaint Clout Network</li>
          </ul>
        </div>
      </section>

      {/* Selection Process */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h3 className="text-xl font-semibold mb-4">Selection Process</h3>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700">
          <li>Written Test (Aptitude + Basic Coding)</li>
          <li>Personal Interview (Online/Offline)</li>
          <li>Final Selection and District-Level Induction</li>
        </ol>
      </section>

      {/* How to Apply */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600 text-white">
        <div className="max-w-5xl mx-auto px-6 py-12 text-center">
          <h3 className="text-2xl font-bold mb-4">How to Apply</h3>
          <p className="mb-6">Candidates can register at the Job Mela event or apply online.</p>
          <a
            href="https://gaintclout.com"
            className="inline-block bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold shadow hover:shadow-lg transition"
          >
            Apply Now
          </a>
          <div className="mt-6 space-y-2 text-sm">
            <p className="flex justify-center items-center gap-2"><Mail className="w-4 h-4" /> talent-acquisition@gaintclout.com</p>
            <p className="flex justify-center items-center gap-2"><Phone className="w-4 h-4" /> +91 8897238849</p>
            <p className="flex justify-center items-center gap-2"><Globe className="w-4 h-4" /> www.gaintclout.com</p>
          </div>
          <p className="mt-8 text-xs text-white/70">© 2025 Gaint Clout Technologies Pvt. Ltd. All rights reserved.</p>
        </div>
      </section>
    </div>
  );
}
