import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 text-center text-slate-500 text-sm border-t border-white/5 bg-darkbg/50 backdrop-blur-sm">
      <p>© {new Date().getFullYear()} Shrikanth Vilvadrinath. All rights reserved.</p>
      <p className="mt-2">Built with React, Tailwind CSS & Framer Motion</p>
    </footer>
  );
}
