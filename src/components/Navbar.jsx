import React from "react";
import logo from "../assets/image/logo.png";

const Navbar = () => (
  <div
    style={{
      background: "linear-gradient(90deg, #00080D, #011A29, #00080D)",
    }}
  >
    <nav className="flex items-center justify-between px-10 py-6 bg-transparent">
      {/* Logo */}
      <div className="text-3xl font-bold tracking-widest">
        <img src={logo} alt="" />
      </div>

      {/* Nav Links */}
      <div className="flex space-x-10">
        <a
          href="#features"
          className="text-gray-200 text-lg hover:text-cyan-300 transition"
        >
          Features
        </a>
        <a
          href="#comparison"
          className="text-gray-200 text-lg hover:text-cyan-300 transition"
        >
          Comparision
        </a>
        <a
          href="#tokenomics"
          className="text-gray-200 text-lg hover:text-cyan-300 transition"
        >
          Tokenomics
        </a>
        <a
          href="#roadmap"
          className="text-gray-200 text-lg hover:text-cyan-300 transition"
        >
          Roadmap
        </a>
        <a
          href="#faq"
          className="text-gray-200 text-lg hover:text-cyan-300 transition"
        >
          FAQ
        </a>
        <button className="bg-transparent border-2 border-cyan-400 text-white px-6 py-2 rounded-lg font-medium shadow hover:shadow-cyan-400/40 transition">
          JOIN PRE-ICO
        </button>
      </div>

      {/* Button */}
    </nav>
  </div>
);

export default Navbar;
