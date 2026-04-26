import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

const MusicPlayer = ({ src }: { src: string }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.55;
    // Tenta autoplay (pode ser bloqueado pelo navegador)
    const tryPlay = async () => {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    };
    tryPlay();
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      await audio.play();
      setPlaying(true);
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !audio.muted;
    setMuted(audio.muted);
  };

  return (
    <>
      <audio ref={audioRef} src={src} loop preload="auto" />
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-2 backdrop-blur-md">
        <button
          onClick={toggle}
          aria-label={playing ? "Pausar música" : "Tocar música"}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary transition hover:bg-primary/30"
        >
          {playing ? <Pause size={18} /> : <Play size={18} />}
        </button>
        <button
          onClick={toggleMute}
          aria-label={muted ? "Ativar som" : "Silenciar"}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/40 text-foreground transition hover:bg-secondary/70"
        >
          {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
      </div>
    </>
  );
};

export default MusicPlayer;
