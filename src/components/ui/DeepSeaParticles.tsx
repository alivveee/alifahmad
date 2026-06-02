import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  opacity: number;
  opacityDir: number;
  canvas: HTMLCanvasElement;
  radius: number;
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

  const createParticle = useCallback(
    (w: number, h: number, forceY?: number): Particle => {
      const hue = Math.random();
      const size = Math.random() * 2.5 + 0.5;
      const glowRadius = Math.random() * 8 + 4;
      const totalRadius = glowRadius; // The max extent of the particle

      // Create an offscreen canvas for this particle
      const pCanvas = document.createElement("canvas");
      pCanvas.width = totalRadius * 2;
      pCanvas.height = totalRadius * 2;
      const pCtx = pCanvas.getContext("2d");
      
      if (pCtx) {
        const cx = totalRadius;
        const cy = totalRadius;

        const r = Math.round(91 + hue * 33);
        const g = Math.round(91 + hue * 49);
        const b = Math.round(247 + hue * 8);

        // Draw glow
        const gradient = pCtx.createRadialGradient(cx, cy, 0, cx, cy, glowRadius);
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.8)`);
        gradient.addColorStop(0.4, `rgba(${r}, ${g}, ${b}, 0.3)`);
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

        pCtx.beginPath();
        pCtx.arc(cx, cy, glowRadius, 0, Math.PI * 2);
        pCtx.fillStyle = gradient;
        pCtx.fill();

        // Draw core
        pCtx.beginPath();
        pCtx.arc(cx, cy, size, 0, Math.PI * 2);
        pCtx.fillStyle = `rgba(${r}, ${g}, ${b}, 1)`;
        pCtx.fill();
      }

      return {
        x: Math.random() * w,
        y: forceY !== undefined ? forceY : Math.random() * h,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: -(Math.random() * 0.4 + 0.1),
        opacity: Math.random() * 0.5 + 0.1,
        opacityDir: Math.random() > 0.5 ? 1 : -1,
        canvas: pCanvas,
        radius: totalRadius,
      };
    },
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = Math.min(window.devicePixelRatio, 1);
      canvas.width = parent.clientWidth * dpr;
      canvas.height = parent.clientHeight * dpr;
      canvas.style.width = parent.clientWidth + "px";
      canvas.style.height = parent.clientHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    const w = canvas.width / Math.min(window.devicePixelRatio, 1);
    const h = canvas.height / Math.min(window.devicePixelRatio, 1);

    // Init particles
    particlesRef.current = Array.from({ length: count }, () =>
      createParticle(w, h)
    );

    let lastTime = 0;
    const fps = 24;
    const frameInterval = 1000 / fps;

    const loop = (t: number) => {
      animFrameRef.current = requestAnimationFrame(loop);

      if (t - lastTime < frameInterval) return;
      lastTime = t;

      const cw = canvas.width / Math.min(window.devicePixelRatio, 1);
      const ch = canvas.height / Math.min(window.devicePixelRatio, 1);

      ctx.clearRect(0, 0, cw, ch);

      for (const p of particlesRef.current) {
        // Movement
        p.x += p.speedX;
        p.y += p.speedY;

        // Opacity pulse
        p.opacity += p.opacityDir * 0.003;
        if (p.opacity >= 0.7) p.opacityDir = -1;
        if (p.opacity <= 0.1) p.opacityDir = 1;

        // Wrap around
        if (p.y < -20) {
          Object.assign(p, createParticle(cw, ch, ch + 20));
        }
        if (p.x < -20) p.x = cw + 20;
        if (p.x > cw + 20) p.x = -20;

        // Draw pre-rendered canvas
        ctx.globalAlpha = p.opacity;
        ctx.drawImage(p.canvas, p.x - p.radius, p.y - p.radius);
      }
      
      // Reset global alpha
      ctx.globalAlpha = 1.0;
    };

    animFrameRef.current = requestAnimationFrame(loop);

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
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
