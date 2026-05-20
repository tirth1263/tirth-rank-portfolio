import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
};

export function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = Math.min(72, Math.max(36, Math.floor(width / 18)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.32,
        vy: (Math.random() - 0.5) * 0.32,
        radius: 1 + Math.random() * 1.8
      }));
    };

    const draw = () => {
      const styles = getComputedStyle(document.documentElement);
      const wash = styles.getPropertyValue("--canvas-wash").trim();
      const teal = styles.getPropertyValue("--teal-rgb").trim() || "56, 231, 200";
      const amber = styles.getPropertyValue("--amber-rgb").trim() || "246, 197, 83";
      const rose = styles.getPropertyValue("--rose-rgb").trim() || "255, 93, 143";

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = wash || "rgba(8, 9, 20, 0.36)";
      ctx.fillRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;
      });

      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 150) {
            const alpha = (1 - distance / 150) * 0.22;
            ctx.strokeStyle = `rgba(${teal}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      particles.forEach((particle, index) => {
        const accent = index % 4 === 0 ? amber : index % 3 === 0 ? rose : teal;
        ctx.fillStyle = `rgba(${accent}, 0.86)`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="neural-canvas" aria-hidden="true" />;
}
