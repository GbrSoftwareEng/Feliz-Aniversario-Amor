import { useEffect } from "react";
import bgImage from "@/assets/background.png";
import Particles from "@/components/Particles";
import Flowers from "@/components/Flowers";
import MusicPlayer from "@/components/MusicPlayer";

const LYRICS: { text: string; type?: "title" | "heart" | "verse" | "break" }[] = [
  { text: "Feliz aniversário,", type: "title" },
  { text: "meu amor ❤️", type: "title" },
  { text: "", type: "break" },
  { text: "Hoje é o dia da pessoa mais especial da minha vida,", type: "verse" },
  { text: "e mesmo tentando, eu nunca vou conseguir colocar em palavras", type: "verse" },
  { text: "tudo o que você significa pra mim.", type: "verse" },
  { text: "Você é tão amorosa, tão carinhosa, tão cuidadosa…", type: "verse" },
  { text: "tão linda, tão gostosa, tão perfeita,", type: "verse" },
  { text: "que às vezes eu paro e penso", type: "verse" },
  { text: "como eu tive a sorte de ter você.", type: "verse" },
  { text: "", type: "break" },
  { text: "O seu jeito me encanta em cada detalhe.", type: "verse" },
  { text: "O jeito que você cuida de mim,", type: "verse" },
  { text: "que se importa, que me faz sentir amado…", type: "verse" },
  { text: "tudo em você é especial.", type: "verse" },
  { text: "Você transforma qualquer momento simples", type: "verse" },
  { text: "em algo inesquecível, só por estar ali comigo.", type: "verse" },
  { text: "", type: "break" },
  { text: "Você é, sem dúvida nenhuma,", type: "verse" },
  { text: "a mulher que eu mais amo nessa vida.", type: "heart" },
  { text: "A pessoa que um dia eu sonhei em ter ao meu lado…", type: "verse" },
  { text: "e hoje eu tenho como minha namorada,", type: "verse" },
  { text: "minha companheira, minha melhor amiga.", type: "verse" },
  { text: "E isso, pra mim, é tudo.", type: "heart" },
  { text: "", type: "break" },
  { text: "Eu nunca encontrei nem 2% do que você é em ninguém.", type: "verse" },
  { text: "Você é única, é rara,", type: "verse" },
  { text: "é diferente de tudo que eu já vivi.", type: "verse" },
  { text: "Você é muito mais do que eu imaginei que existia.", type: "verse" },
  { text: "", type: "break" },
  { text: "Você merece muito mais do que imagina.", type: "verse" },
  { text: "Merece ser feliz todos os dias,", type: "verse" },
  { text: "merece ser cuidada, valorizada, amada…", type: "verse" },
  { text: "do jeito mais intenso e verdadeiro que existe.", type: "verse" },
  { text: "E eu quero estar ao seu lado em cada momento,", type: "verse" },
  { text: "te fazendo sentir exatamente isso.", type: "verse" },
  { text: "", type: "break" },
  { text: "Pra mim, você é perfeita.", type: "heart" },
  { text: "Do jeitinho que você é.", type: "verse" },
  { text: "E eu amo cada detalhe seu,", type: "verse" },
  { text: "cada parte, cada sorriso, cada olhar.", type: "verse" },
  { text: "", type: "break" },
  { text: "Obrigado por existir.", type: "verse" },
  { text: "Obrigado por me escolher.", type: "verse" },
  { text: "Obrigado por ser a melhor coisa", type: "verse" },
  { text: "que já aconteceu na minha vida.", type: "verse" },
  { text: "", type: "break" },
  { text: "Eu te amo muito ❤️", type: "title" },
];

const Index = () => {
  useEffect(() => {
    document.title = "Feliz Aniversário, meu amor 💜";
    // Carrega a fonte
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;700&family=Great+Vibes&display=swap";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // Caminho relativo para funcionar no GitHub Pages com qualquer base
  const musicSrc = `${import.meta.env.BASE_URL}music.mp3`.replace("//", "/");

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-background">
      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          filter: "brightness(0.45) saturate(1.1)",
        }}
        aria-hidden
      />
      {/* Overlay roxo */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(280 80% 20% / 0.55) 0%, hsl(270 90% 6% / 0.85) 70%, hsl(270 90% 3% / 0.95) 100%)",
        }}
        aria-hidden
      />

      {/* Partículas brilhantes roxas */}
      <Particles />

      {/* Flores caindo */}
      <Flowers />

      {/* Carrossel de letras */}
      <section
        className="lyrics-mask absolute inset-0 z-30 flex items-start justify-center"
        aria-label="Carta de aniversário"
      >
        <h1 className="sr-only">Feliz Aniversário, meu amor</h1>
        <div className="animate-lyrics flex w-full max-w-3xl flex-col items-center gap-8 px-6 text-center">
          {LYRICS.map((line, idx) => {
            if (line.type === "break") {
              return <div key={idx} className="h-12" aria-hidden />;
            }
            const base = "text-glow animate-pulse-glow leading-tight";
            const sizeClass =
              line.type === "title"
                ? "text-5xl md:text-7xl font-bold text-glow-strong"
                : line.type === "heart"
                ? "text-3xl md:text-5xl font-bold"
                : "text-2xl md:text-4xl font-medium";
            return (
              <p key={idx} className={`${base} ${sizeClass}`}>
                {line.text}
              </p>
            );
          })}
          {/* Espaço extra ao final para o loop respirar */}
          <div className="h-40" aria-hidden />
        </div>
      </section>

      {/* Player de música */}
      <MusicPlayer src={musicSrc} />
    </main>
  );
};

export default Index;
