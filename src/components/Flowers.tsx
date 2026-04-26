import { useMemo } from "react";

const FLOWERS = ["🌸", "🌺", "💜", "🌷", "🪻", "❀"];

const Flowers = () => {
  const flowers = useMemo(
    () =>
      Array.from({ length: 25 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 18 + 14,
        delay: Math.random() * 15,
        duration: Math.random() * 12 + 14,
        emoji: FLOWERS[Math.floor(Math.random() * FLOWERS.length)],
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden">
      {flowers.map((f) => (
        <div
          key={f.id}
          className="absolute"
          style={{
            left: `${f.left}%`,
            top: 0,
            fontSize: `${f.size}px`,
            animation: `fall-flower ${f.duration}s linear infinite`,
            animationDelay: `${f.delay}s`,
            filter: "drop-shadow(0 0 6px hsl(var(--purple-glow) / 0.8))",
          }}
        >
          {f.emoji}
        </div>
      ))}
    </div>
  );
};

export default Flowers;
