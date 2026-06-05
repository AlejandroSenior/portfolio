// Lightweight ambient particle field — drifting, twinkling dots.
// Mirrors the decorative <particle-canvas> elements on the target site.
interface Particle {
  x: number;
  y: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  dx: number;
  dy: number;
  twinkle: number;
}

export function initParticleCanvas(canvas: HTMLCanvasElement): void {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const quantity = Number(canvas.dataset.quantity ?? "60");
  const color = canvas.dataset.color ?? "rgb(255, 255, 255)";
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  let particles: Particle[] = [];
  let width = 0;
  let height = 0;
  let raf = 0;

  const rand = (min: number, max: number) => Math.random() * (max - min) + min;

  function spawn(): Particle {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      size: rand(0.6, 1.8),
      baseAlpha: rand(0.1, 0.6),
      alpha: 0,
      dx: rand(-0.15, 0.15),
      dy: rand(-0.15, 0.15),
      twinkle: rand(0.002, 0.01),
    };
  }

  function resize() {
    const rect = canvas.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    if (width === 0 || height === 0) return;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    particles = Array.from({ length: quantity }, spawn);
  }

  function draw() {
    ctx!.clearRect(0, 0, width, height);
    for (const p of particles) {
      p.x += p.dx;
      p.y += p.dy;
      p.alpha += p.twinkle;
      if (p.alpha > p.baseAlpha || p.alpha < 0) p.twinkle *= -1;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx!.beginPath();
      ctx!.globalAlpha = Math.max(0, Math.min(p.baseAlpha, p.alpha));
      ctx!.fillStyle = color;
      ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx!.fill();
    }
    ctx!.globalAlpha = 1;
    raf = requestAnimationFrame(draw);
  }

  resize();
  // Reveal the canvas (it starts at opacity-0 to avoid a flash).
  requestAnimationFrame(() => canvas.classList.remove("opacity-0"));

  if (!prefersReduced) {
    draw();
  } else {
    // Static render for reduced-motion users.
    for (const p of particles) p.alpha = p.baseAlpha;
    ctx.globalAlpha = 1;
    for (const p of particles) {
      ctx.beginPath();
      ctx.globalAlpha = p.baseAlpha;
      ctx.fillStyle = color;
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  const ro = new ResizeObserver(() => resize());
  ro.observe(canvas);
  window.addEventListener("beforeunload", () => cancelAnimationFrame(raf));
}
