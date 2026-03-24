"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-16 text-center">

      {/* HEADING */}
      <h2 className="text-2xl md:text-3xl font-semibold leading-snug mb-6">
        Get the latest fashion stories, style, and tips, handpicked for you, everyday.
      </h2>

      {/* INPUT */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6"
      >
        <input
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full sm:w-[320px] px-4 py-3 border border-gray-400 outline-none text-sm"
        />

        <button
          type="submit"
          className="px-6 py-3 bg-black text-white text-sm uppercase tracking-wider hover:opacity-80 transition"
        >
          Sign Up
        </button>
      </form>

      {/* DISCLAIMER */}
      <p className="text-xs text-gray-500 leading-relaxed max-w-xl mx-auto">
        By signing up, you agree to our user agreement (including class action waiver and arbitration provisions), and acknowledge our privacy policy.
      </p>

    </section>
  );
}