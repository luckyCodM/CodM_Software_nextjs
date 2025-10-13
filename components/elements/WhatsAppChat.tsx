"use client";

import { useEffect, useState } from "react";

export default function WhatsAppChat() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Optionally, make it appear after scrolling
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <a
        href="https://wa.me/919876543210" // 🔹 replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-white border border-green-400 rounded-2xl shadow-lg p-3 hover:scale-105 transition"
      >
        <img
          src="/assets/img/whatsapp.png" // 🔹 path to your WhatsApp icon
          alt="WhatsApp Chat"
          className="w-8 h-8 mr-2"
        />
        <div>
          <p className="text-sm font-semibold text-gray-900">Codm Software</p>
          <p className="text-xs text-gray-500">Chat on WhatsApp</p>
        </div>
      </a>
    </div>
  );
}
