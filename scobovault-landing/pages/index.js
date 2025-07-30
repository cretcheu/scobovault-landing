import React from "react";

export default function ScoboVaultLanding() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="flex justify-between items-center p-6 shadow-sm">
        <div className="flex items-center space-x-2">
          <img src="/logo-scobovault.png" alt="ScoboVault" className="h-10 w-10" />
          <span className="text-xl font-bold text-blue-900">ScoboVault</span>
        </div>
        <div className="flex space-x-4">
        <a
  href="/pitchdeck.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="text-sm font-medium text-blue-900 hover:underline"
>
  Pitch Deck
</a>
<a
  href="mailto:adaliosemedo@scobovault.org"
  className="bg-blue-900 text-white px-4 py-2 rounded text-sm font-medium"
>
  Contact Us
</a>
        </div>
      </header>

      <section className="text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-950">
          Accelerating the future of independent software
        </h1>
        <a
  href="/scobovault_projects_detailed_with_images.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-semibold shadow hover:bg-blue-800">
    View Projects
  </button>
</a>
      </section>

      <section className="text-center px-6 py-12">
        <h2 className="text-2xl font-semibold mb-4 text-blue-950">What is ScoboVault?</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          We are a Dubai-based intelligent SaaS studio focused on productivity tools and local growth.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 pb-16">
        {[
          {
            name: "HoraCerta",
            description: "Intelligent scheduling for small businesses.",
            logo: "/logo-horacerta.png",
          },
          {
            name: "Verbum",
            description: "Gamified multilingual learning with AI.",
            logo: "/logo-verbum.png",
          },
          {
            name: "Locly",
            description: "Connects people to local opportunities and services.",
            logo: "/logo-locly.png",
          },
          {
            name: "EasyQuote",
            description: "Simple quotes with integrated payment.",
            logo: "/logo-orcamentofacil.png",
          },
        ].map((project) => (
          <div key={project.name} className="bg-white border p-6 rounded-lg shadow-sm text-center">
            <img
              src={project.logo}
              alt={project.name}
              className="mx-auto h-12 w-12 mb-4"
            />
            <h3 className="text-lg font-bold text-blue-900 mb-2">{project.name}</h3>
            <p className="text-sm text-gray-600">{project.description}</p>
          </div>
        ))}
      </section>

      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-6 text-blue-950">Our Culture</h2>
        <div className="max-w-3xl mx-auto text-gray-700 text-sm md:text-base leading-relaxed space-y-4">
          <p>
            We are building a strong, joyful community where happiness matters more than hustle.
            We don’t believe hard work is the only path to success — it’s just one of many.
            Here, you’re welcome to take a break when life demands it, without fear for your career.
          </p>
          <p>
            We stay forever connected to innovation, driven by curiosity, love for the world and all its wonders.
            We support every idea, every dream and every member.
            Whether we’re two people, four million or just four magical thinkers — we are one community.
          </p>
          <p>
            No restrictions. No barriers. No bias.
            We welcome all: any belief, any identity, any orientation or any spirituality.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-12 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-blue-950">Why ScoboVault?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto text-sm text-gray-700">
          <div>Clear monetization vision</div>
          <div>Modern, scalable technology</div>
          <div>Lean and agile team</div>
          <div>Validation in real markets</div>
          <div>Everyone is welcome</div>
          <div>We are one community</div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-12 px-6 text-center">
        <h2 className="text-2xl font-bold mb-2">Join Us</h2>
        <p className="mb-6">We are open to strategic partnerships and smart investments.</p>
        <a
          href="/pitchdeck.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-blue-700 px-6 py-3 font-medium rounded-md"
        >
          View Pitch Deck
        </a>
      </section>

      <footer className="text-center py-6 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} ScoboVault. All rights reserved.
      </footer>
    </div>
  );
}