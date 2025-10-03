import React from "react";

export default function Footer() {
  return (
    <footer className="bg-darkbg/80 border-t border-white/6 mt-12 py-8">
      <div className="container px-6 text-center text-slate-400">Designed & Built by Shrikanth Vilvadrinath | AI/ML Engineer • © {new Date().getFullYear()}</div>
    </footer>
  );
}
