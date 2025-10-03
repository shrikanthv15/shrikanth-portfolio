import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Demo: in production hook this to an email API or server
    setStatus("Thanks! I will get back to you.");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section id="contact" className="py-12">
      <h2 className="text-2xl font-bold">Contact</h2>
      <p className="mt-2 text-slate-400">Open to AI/ML roles — email me or send a message below.</p>

      <form onSubmit={handleSubmit} className="mt-6 max-w-xl grid gap-3">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="p-3 rounded bg-white/3" required />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="p-3 rounded bg-white/3" type="email" required />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" className="p-3 rounded bg-white/3" rows={6} required />
        <div className="flex items-center gap-3">
          <button className="px-5 py-2 bg-primary rounded-md">Send Message</button>
          {status && <div className="text-sm text-slate-300">{status}</div>}
        </div>
      </form>
    </section>
  );
}
