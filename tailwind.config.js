/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",  // ✅ supports React + Vite + Tailwind
  ],
  theme: {
    extend: {
      keyframes: {
        // ✨ Smooth fade-in animation for sections and modals
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        // ✨ Fade in and slide upward (used in hero text, cards, etc.)
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        // ✨ Floating up-down animation for icons & buttons
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        // ✨ Slow spin for background blobs or visual accents
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },

      animation: {
        // ✅ Reusable animation shortcuts
        fadeIn: "fadeIn 1.2s ease-in-out",
        fadeInUp: "fadeInUp 1.5s ease-in forwards",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 6s linear infinite",
        "spin-slower": "spin 20s linear infinite",
        "spin-very-slow": "spinSlow 25s linear infinite",
      },

      colors: {
        // 🎨 GAINT brand palette
        gaint: {
          green: "#16a34a",
          blue: "#2563eb",
          gradientStart: "#22c55e",
          gradientEnd: "#3b82f6",
        },
      },

      boxShadow: {
        // 🌟 Clean soft shadows for UI depth
        "gaint-sm": "0 2px 6px rgba(0,0,0,0.08)",
        "gaint-md": "0 4px 12px rgba(0,0,0,0.12)",
        "gaint-lg": "0 10px 25px rgba(0,0,0,0.15)",
      },

      fontFamily: {
        // 🧠 Professional sans-serif font pairing
        sans: ["Inter", "Poppins", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};


