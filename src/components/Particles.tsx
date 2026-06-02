import { useMemo } from "react";

interface Particle {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

const colors = ["#9CFF11", "#00FFBB", "#D800FF", "#FFA100", "#0084FF"];

export function Particles({ count = 12 }: { count?: number }) {
  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 4 + 1,
        duration: Math.random() * 15 + 10,
        delay: Math.random() * 10,
        color: colors[Math.floor(Math.random() * colors.length)],
      })),
    [count]
  );

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            borderRadius: "50%",
            boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
