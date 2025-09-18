"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Verifica tema inicial do sistema
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-center p-6">
      <main className="w-full max-w-3xl flex flex-col gap-8">
        <h1 className="text-6xl font-bold text-center p-8">
          Quem é Renan Santos?
        </h1>
        <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/suJJjWFu_44?si=DNPLIP-5uGUA3QRE&autoplay=1&mute=1&showinfo=0&autohide=1"
            title="Vídeo Quem é Renan Santos? Por: Renan Santos"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <section className="text-lg leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
        <section className="p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            Entre em contato
          </h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Seu nome"
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <textarea
              placeholder="Sua mensagem"
              className="border rounded-lg p-3 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button
              type="submit"
              className="bg-yellow-500 text-black py-3 rounded-lg hover:bg-yellow-600 transition"
            >
              Enviar
            </button>
          </form>
        </section>
      </main>

      <button
        onClick={toggleTheme}
        aria-label="Alternar tema"
        style={{
          background: "var(--btn-bg)",
          color: "var(--btn-fg)",
          boxShadow: "var(--btn-shadow)",
        }}
        className="fixed bottom-9 left-9 p-5 rounded-full hover:scale-105 active:scale-90 transition-all duration-200 ease-in-out focus:outline-none"
      >
        {darkMode ? "🌙" : "☀️"}
      </button>    </div>
  );
}
