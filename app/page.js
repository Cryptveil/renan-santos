"use client";
import { useEffect, useState } from "react";
import Image from 'next/image';

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
        <h1 style={{color: "var(--highlight)"}} className="text-4xl md:text-6xl font-bold text-center p-8">
          Quem é Renan Santos?
        </h1>
        <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/suJJjWFu_44?si=DNPLIP-5uGUA3QRE&autoplay=1&showinfo=0&autohide=1"
            title="Vídeo Quem é Renan Santos? Por: Renan Santos"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        
        <h2 style={{color: "var(--highlight)"}} className="text-3xl font-bold text-center pt-4 pb-4">Livro Amarelo - O maior Projeto de País em formação</h2>
        <div className="text-lg leading-relaxed text-justify flex flex-col md:grid md:grid-cols-2 gap-8 space-y-4">
          <p>O Livro Amarelo, do Partido Missão liderado por Renan Santos, <b style={{color: "var(--highlight)"}} className="text-xl">é um projeto político único no Brasil</b>. Fruto de dois anos de debates com centenas de pesquisadores e intelectuais, esta coleção de fascículos propõe uma reconstrução ousada do país, com foco em reindustrialização, segurança pública, educação de alto padrão e gestão qualificada, <b style={{color: "var(--highlight)"}} className="text-xl">projetando um Brasil próspero até 2050</b>. Combinando liberalismo econômico com um Estado forte em áreas estratégicas, o livro rompe com polarizações tradicionais e oferece uma visão pragmática e inovadora, tornando-se leitura essencial para quem deseja entender e participar da renovação da direita brasileira.</p>
        <Image
          src="/1.png"
          alt="Renan Santos e o Livro Amarelo"
          className="float-right ml-6 mb-4"
          height={0}
          width={800}
        />
        </div>

        <div className="md:grid md:grid-cols-2 gap-8">
          <div>
            <h3 style={{color: "var(--highlight)"}}className="text-2xl font-bold pt-4 pb-4">
              Guerra ao crime organizado e direito penal do inimigo
            </h3>
            <p className="text-justify text-lg">
Renan Santos apoia a <b style={{color: "var(--highlight)"}} className="text-xl">declaração de guerra ao crime organizado</b> e a aplicação do direito penal do inimigo, atribuindo às facções o título de Estado paralelo, com o objetivo de retomar o poder em zonas dominadas pelo tráfico e resgatar a população periférica que vive como refém do crime. Com o direito penal do inimigo instituído no Brasil, faccionados não voltarão às ruas com facilidade.
            </p>
          </div>

          <div>
            <h3 style={{color: "var(--highlight)"}}className="text-2xl font-bold pt-4 pb-4">
              Presidente do Partido Missão
            </h3>
            <p className="text-justify text-lg">
                Renan Santos coordenou um dos processos mais difíceis de se executar no país — <b style={{color: "var(--highlight)"}} className="text-xl">a criação de um partido político</b> — e com recorde de assinaturas em comparação a todos os outros partidos brasileiros, chegando a mais de 800 mil assinaturas coletadas de pessoas que concordam com as ideias do projeto.
            </p>
          </div>
        </div>
        <Image
          src="/3.jpg"
          alt="Renan Santos discursando"
          height={0}
          width={800}
        />

        <h2 style={{color: "var(--highlight)"}}className="text-3xl md:text-5xl font-bold text-center p-8">História de Renan Santos</h2>
        <div className="text-lg leading-relaxed flex flex-col space-y-4 text-justify">
          <p>
Nascido em 14 de fevereiro de 1984, em São Paulo, Renan Santos iniciou sua atuação política ainda jovem, enquanto cursava Direito na Universidade de São Paulo. Foi nos corredores da faculdade, participando e liderando seu próprio movimento estudantil que começou a se destacar como ativista  e articulador, e encontrou sua <b style={{color: "var(--highlight)"}} className="text-xl">vocação política</b>.
          </p>
    <p>
    Nessa mesma época começou a trabalhar com a sua família no negócio de recuperação de empresas, em que adquiria empresas que estavam em sérias dificuldades financeiras e as recuperava. Foi durante esse período que enfrentou sua primeira situação de perigo, em que policiais corruptos ameaçaram seu pai cobrando dinheiro. Apesar das ameaças contra sua segurança, <b style={{color: "var(--highlight)"}} className="text-xl">formalizou a denúncia e auxiliou na investigação</b> que depois levou às prisões dos envolvidos.
    </p>
    <p>
    <b style={{color: "var(--highlight)"}} className="text-xl">Esse evento foi o estopim para sua volta à política</b>, em um primeiro momento com sua participação nas Jornadas de Junho, em 2013. Após isso, em 2014 fundou um movimento político chamado de Movimento Renova Vinhedo. O grupo buscava novas formas de comunicação política e utilizava a internet como principal ferramenta para promover pautas liberais. Mais tarde naquele mesmo ano esse grupo seria base para a formação do <b style={{color: "var(--highlight)"}} className="text-xl">Movimento Brasil Livre</b>, mais conhecido com <b style={{color: "var(--highlight)"}} className="text-xl">MBL</b>, que estreou no cenário político com uma manifestação em frente ao Masp, em São Paulo, que reuniu cerca de 5 mil pessoas. Esse ato marcou a chegada de uma nova geração de ativistas e simbolizou o início de um ciclo em que a política digital passava a ocupar as ruas com cada vez mais força, o símbolo maximo disso foi no <b style={{color: "var(--highlight)"}} className="text-xl">Impeachment da então presidente Dilma Rousseff em 2016</b>, assim consagrando o movimento.
    </p>
    <p>
    Desde então, Renan Santos tem se dedicado a múltiplas frentes de atuação, abrangendo a militância política, a produção intelectual e iniciativas no campo cultural, o que lhe conferiu projeção contínua como um <b style={{color: "var(--highlight)"}} className="text-xl">agente relevante nos debates públicos nacionais</b>.
    </p>
        </div>
      </main>

    <footer className="pt-8 bg-[] w-full flex flex-col items-center justify-center gap-2 opacity-70 hover:opacity-100 transition">
      <Image 
        src="/macambiras.png" 
        alt="Logo Gatos Macambiras"
        width={60}
        height={60}/>
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        @ Gatos Macambiras {new Date().getFullYear()}
      </p>
    </footer>

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
