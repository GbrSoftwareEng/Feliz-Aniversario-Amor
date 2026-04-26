import { useMemo } from "react";

const Particles = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 60 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 4 + 1,
        delay: Math.random() * 20,
        duration: Math.random() * 15 + 12,
        opacity: Math.random() * 0.6 + 0.4,
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: `hsl(var(--purple-bright))`,
            boxShadow: `0 0 ${p.size * 4}px hsl(var(--purple-bright)), 0 0 ${p.size * 8}px hsl(var(--purple-glow))`,
            opacity: p.opacity,
            animation: `float-particle ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
