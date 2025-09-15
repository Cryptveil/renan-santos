export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-center p-6">
      <main className="w-full max-w-3xl flex flex-col gap-8">
        
        {/* Cabeçalho */}
        <h1 className="text-6xl font-bold text-center p-8">
          Quem é Renan Santos?
        </h1>

        {/* Vídeo responsivo */}
        <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/suJJjWFu_44?si=DNPLIP-5uGUA3QRE"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Breve apresentação */}
        <section className="text-lg leading-relaxed">
          <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>

        {/* Formulário de leads */}
        <section className="p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            Entre em contato
          </h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Seu nome"
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              placeholder="Sua mensagem"
              className="border rounded-lg p-3 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-yellow-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Enviar
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
