"use client";

import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";

export default function NewsletterModal() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState(""); // ✅ missing state
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Show modal after delay
  useEffect(() => {

    const alreadyShown = localStorage.getItem("newsletter_shown");

    if (alreadyShown) return;

    const timer = setTimeout(() => {
      setOpen(true);

      localStorage.setItem("newsletter_shown", "true");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // simple validation
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValid) {
      setMessage("Please enter a valid email.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // ✅ important
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setMessage("🎉 Subscribed successfully!");
      setEmail("");

      // auto close after success
      setTimeout(() => setOpen(false), 1500);

    } catch (err) {
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">

  {/* MODAL */}
  <div className="bg-white w-full max-w-3xl overflow-hidden relative animate-fadeIn flex flex-col md:flex-row">

    {/* CLOSE BUTTON */}
    <button
      onClick={() => setOpen(false)}
      className="absolute top-4 right-4 text-gray-300 hover:text-white z-10"
    >
      <FiX size={22} />
    </button>

    {/* LEFT: IMAGE */}
    <div className="md:w-1/2 h-64 md:h-auto">
      <img
        src="/background.webp"
        alt="Newsletter"
        className="w-full h-full object-cover"
      />
    </div>

    {/* RIGHT: CONTENT */}
    <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-center bg-[#d65e13] text-white">

      {/* HEADING */}
      <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6 uppercase">
        STAY IN STYLE
      </h2>

      {/* ADVANTAGES */}
      <ul className="flex flex-col gap-1 mb-6 text-xs">
        <li className="flex items-center gap-3">
          <span className="text-white text-sm">✔</span>
          <span className="font-semibold">Exclusive Fashion Tips & Trends</span>
        </li>
        <li className="flex items-center gap-3">
          <span className="text-white text-sm">✔</span>
          <span className="font-semibold">Early Access to Style Guides & Articles</span>
        </li>
        <li className="flex items-center gap-3">
          <span className="text-white text-sm">✔</span>
          <span className="font-semibold">Get unlimited access</span>
        </li>
      </ul>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="border border-white/60 bg-white/10 placeholder-white/70 text-white px-4 py-3 text-sm focus:outline-none focus:border-white rounded"
        />

        {/* TERMS */}
        <p className="text-[10px] text-white/80 mb-2">
          By subscribing, you agree to our <span className="underline cursor-pointer">Terms & Privacy Policy</span>.
        </p>

        <button
          type="submit"
          disabled={loading}
          className="bg-[#cd8458] text-white py-3 text-sm uppercase tracking-wide hover:bg-[#cc7946] transition disabled:opacity-50 cursor-pointer"
        >
          {loading ? "Submitting..." : "Subscribe"}
        </button>
      </form>

      {/* MESSAGE */}
      {message && (
        <p className="text-sm mt-4 text-white/90">
          {message}
        </p>
      )}

    </div>
  </div>
</div>
  );
}