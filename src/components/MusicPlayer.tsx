import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Volume1 } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const DEFAULT_VOLUME = 0.3;

const MusicPlayer = ({ src }: { src: string }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(DEFAULT_VOLUME);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = DEFAULT_VOLUME;
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

  const handleVolume = (values: number[]) => {
    const v = values[0] / 100;
    setVolume(v);
    const audio = audioRef.current;
    if (audio) {
      audio.volume = v;
      if (v > 0 && audio.muted) {
        audio.muted = false;
        setMuted(false);
      }
    }
  };

  const VolumeIcon = muted || volume === 0 ? VolumeX : volume < 0.5 ? Volume1 : Volume2;

  return (
    <>
      <audio ref={audioRef} src={src} loop preload="auto" />
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full border border-border bg-card/40 px-3 py-2 backdrop-blur-md">
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
          <VolumeIcon size={18} />
        </button>
        <div className="w-28 px-1">
          <Slider
            value={[muted ? 0 : Math.round(volume * 100)]}
            onValueChange={handleVolume}
            min={0}
            max={100}
            step={1}
            aria-label="Volume da música"
          />
        </div>
      </div>
    </>
  );
};

export default MusicPlayer;
