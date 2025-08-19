import React from "react";
import logo from "../assets/image/logo.png";

// Sample SVGs for social icons (replace with your own if you wish)
const socials = [
  {
    href: "#",
    icon: (
      <svg fill="#15BFFD" width={26} height={26} viewBox="0 0 24 24">
        <path d="M24 4.6..." />
      </svg>
    ), // Replace ... with actual path or use your icon.
  },
  {
    href: "#",
    icon: (
      <svg fill="#15BFFD" width={26} height={26} viewBox="0 0 24 24">
        <path d="M19 0h-14c..." />
      </svg>
    ),
  },
  {
    href: "#",
    icon: (
      <svg fill="#15BFFD" width={26} height={26} viewBox="0 0 24 24">
        <path d="M24 4.5..." />
      </svg>
    ),
  },
];

const Footer = () => (
  <footer
    className="w-full pt-8 pb-4 px-6 md:px-16"
    style={{
      background:
        "radial-gradient(ellipse at 70% 40%, #183550 75%, #09111a 100%)",
    }}
  >
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
      {/* Column 1: Logo & Contact */}
      <div className="flex-1">
        <div
          className="font-black text-2xl mb-3 tracking-wider"
          style={{ letterSpacing: "0.1em" }}
        >
          <img src={logo} alt="" />
        </div>
        <div className="mb-1 text-white">
          <span className="text-[#15BFFD]"> Contact Us: </span>
          <a href="mailto:support@bigod.to" className="underline">
            support@bigod.to
          </a>
        </div>
        <div className="mb-1 text-white">
          <span className="text-[#15BFFD]">HQ:</span> Singapore | Vaults:
          Singapore, UAE
        </div>
        <div className="mb-4 text-white">
          Website :{" "}
          <a href="https://www.bingold.com" className=" underline">
            www.bingold.com
          </a>
        </div>
        <div className="flex gap-5 mt-2">
          {socials.map((s, i) => (
            <a href={s.href} target="_blank" rel="noopener noreferrer" key={i}>
              {s.icon}
            </a>
          ))}
        </div>
        <div className="mt-4 text-xs text-white/70">
          Copyright © BINGOLD 2025 All right reserved
        </div>
      </div>

      {/* Column 2: Site Map */}
      <div className="flex-1">
        <div className="text-white font-semibold text-lg mb-3">Site Map</div>
        <ul className="text-white/90">
          <li className="mb-2">Home</li>
          <li className="mb-2">About</li>
          <li className="mb-2">Road map</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Column 3: Company */}
      <div className="flex-1">
        <div className="text-white font-semibold text-lg mb-3">Company</div>
        <ul className="text-white/90">
          <li className="mb-2">Help &amp; Support</li>
          <li className="mb-2">Terms &amp; Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>

      {/* Column 4: Resource */}
      <div className="flex-1">
        <div className="text-white font-semibold text-lg mb-3">Resource</div>
        <ul className="text-white/90">
          <li className="mb-2">Partner</li>
          <li className="mb-2">Blog</li>
          <li>Newsletter</li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
