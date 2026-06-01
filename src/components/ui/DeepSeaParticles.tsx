import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  opacityDir: number;
  glowRadius: number;
  hue: number; // 0 = purple, 1 = blue
}

interface DeepSeaParticlesProps {
  count?: number;
  className?: string;
}

const DeepSeaParticles: React.FC<DeepSeaParticlesProps> = ({
  count = 40,
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number>(0);
  const mouseRef = useRef({ x: -1, y: -1 });

  const createParticle = useCallback(
    (w: number, h: number, forceY?: number): Particle => {
      const hue = Math.random();
      return {
        x: Math.random() * w,
        y: forceY !== undefined ? forceY : Math.random() * h,
        size: Math.random() * 2.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: -(Math.random() * 0.4 + 0.1),
        opacity: Math.random() * 0.5 + 0.1,
        opacityDir: Math.random() > 0.5 ? 1 : -1,
        glowRadius: Math.random() * 8 + 4,
        hue,
      };
    },
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = parent.clientWidth * dpr;
      canvas.height = parent.clientHeight * dpr;
      canvas.style.width = parent.clientWidth + "px";
      canvas.style.height = parent.clientHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    const w = canvas.width / Math.min(window.devicePixelRatio, 2);
    const h = canvas.height / Math.min(window.devicePixelRatio, 2);

    // Init particles
    particlesRef.current = Array.from({ length: count }, () =>
      createParticle(w, h)
    );

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1, y: -1 };
    };

    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const loop = () => {
      const cw =
        canvas.width / Math.min(window.devicePixelRatio, 2);
      const ch =
        canvas.height / Math.min(window.devicePixelRatio, 2);

      ctx.clearRect(0, 0, cw, ch);

      for (const p of particlesRef.current) {
        // Movement
        p.x += p.speedX;
        p.y += p.speedY;

        // Opacity pulse
        p.opacity += p.opacityDir * 0.003;
        if (p.opacity >= 0.7) p.opacityDir = -1;
        if (p.opacity <= 0.1) p.opacityDir = 1;

        // Mouse interaction — gentle push away
        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;
        if (mx > 0 && my > 0) {
          const dx = p.x - mx;
          const dy = p.y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const force = (120 - dist) / 120;
            p.x += (dx / dist) * force * 0.5;
            p.y += (dy / dist) * force * 0.5;
          }
        }

        // Wrap around
        if (p.y < -10) {
          Object.assign(p, createParticle(cw, ch, ch + 10));
        }
        if (p.x < -10) p.x = cw + 10;
        if (p.x > cw + 10) p.x = -10;

        // Draw glow
        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.glowRadius
        );

        // Color based on hue — mix between bioluminescent purple and glow blue
        const r = Math.round(91 + p.hue * 33); // 91→124
        const g = Math.round(91 + p.hue * 49); // 91→140
        const b = Math.round(247 + p.hue * 8); // 247→255

        gradient.addColorStop(
          0,
          `rgba(${r}, ${g}, ${b}, ${p.opacity * 0.8})`
        );
        gradient.addColorStop(
          0.4,
          `rgba(${r}, ${g}, ${b}, ${p.opacity * 0.3})`
        );
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw particle core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${p.opacity})`;
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [count, createParticle]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-auto z-[2] ${className}`}
      style={{ mixBlendMode: "screen" }}
    />
  );
};

export default DeepSeaParticles;
