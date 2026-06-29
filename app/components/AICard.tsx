'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface Screen {
  label: string;
  src: string;
  url?: string;
  img?: HTMLImageElement;
  chips?: Array<{
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    dot: string;
    label: string;
    val: string;
  }>;
}

interface AICardProps {
  screens?: Screen[];
  currentIndex?: number;
  onIndexChange?: (index: number) => void;
  autoRotate?: boolean;
  showTabs?: boolean;
  showStatusBar?: boolean;
  showLabel?: boolean;
  scrollTriggerConfig?: {
    start?: string;
    end?: string;
    scrub?: number;
    rotateX?: { start?: number; end?: number };
    rotateY?: { start?: number; end?: number };
  };
  style?: React.CSSProperties;
  className?: string;
}

export default function AICard({
  screens = [],
  currentIndex = 0,
  onIndexChange = () => {},
  autoRotate = true,
  showTabs = true,
  showStatusBar = true,
  showLabel = true,
  scrollTriggerConfig,
  style = {},
  className = '',
}: AICardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const perspWrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasWrapRef = useRef<HTMLDivElement>(null);
  const chipLayerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const autoTimerRef = useRef<NodeJS.Timeout | null>(null);
  const gsapScrollTweenRef = useRef<any>(null);

  // Mouse parallax state
  const mouseTarget = useRef({ x: 4, y: 0 });
  const mouseCurrent = useRef({ x: 4, y: 0 });
  const entryDone = useRef(false);
  const scrollRot = useRef({ x: 0, y: 0 });

  const [activeIndex, setActiveIndex] = useState(currentIndex);
  const [fadeKey, setFadeKey] = useState(0);

  // Draw the screenshot on canvas with AI holographic tint
  const drawImage = useCallback((index: number) => {
    const screen = screens[index];
    if (!screen || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const W = 1456;
    const H = 840;
    canvas.width = W;
    canvas.height = H;

    ctx.clearRect(0, 0, W, H);

    if (screen.img && screen.img.complete && screen.img.naturalWidth > 0) {
      ctx.drawImage(screen.img, 0, 0, W, H);
    } else {
      ctx.fillStyle = '#0A0A0A';
      ctx.fillRect(0, 0, W, H);
    }

    const overlay = ctx.createLinearGradient(0, 0, W, H);
    overlay.addColorStop(0, 'rgba(80,60,180,0.06)');
    overlay.addColorStop(0.5, 'rgba(232,112,13,0.02)');
    overlay.addColorStop(1, 'rgba(0,100,200,0.05)');
    ctx.fillStyle = overlay;
    ctx.fillRect(0, 0, W, H);
  }, [screens]);

  // Update chips
  const updateChips = useCallback((index: number) => {
    const screen = screens[index];
    if (!screen || !chipLayerRef.current) return;

    const chipLayer = chipLayerRef.current;
    if (!chipLayer) return;
    chipLayer.innerHTML = '';
    (screen.chips || []).forEach((chip) => {
      const el = document.createElement('div');
      el.className = 'ai-chip';
      const pos: Record<string, string> = {};
      if (chip.top) pos.top = chip.top;
      if (chip.bottom) pos.bottom = chip.bottom;
      if (chip.left) pos.left = chip.left;
      if (chip.right) pos.right = chip.right;
      Object.assign(el.style, pos as any);
      el.innerHTML = `
        <div class="ai-chip-dot" style="background:${chip.dot};box-shadow:0 0 6px ${chip.dot}55"></div>
        <span class="ai-chip-label">${chip.label}</span>
        <span class="ai-chip-val">${chip.val}</span>
      `;
      chipLayer.appendChild(el);
    });
  }, [screens]);

  // Switch screen
  const switchTo = useCallback((index: number, animate = false) => {
    setActiveIndex(index);
    onIndexChange(index);

    if (animate) {
      setFadeKey((k) => k + 1);
      requestAnimationFrame(() => {
        drawImage(index);
        updateChips(index);
      });
    } else {
      drawImage(index);
      updateChips(index);
    }
  }, [drawImage, updateChips, onIndexChange]);

  // Load images
  useEffect(() => {
    screens.forEach((screen, i) => {
      if (screen.src && !screen.img) {
        const img = new Image();
        img.onload = () => {
          screen.img = img;
          if (i === activeIndex) {
            drawImage(i);
          }
        };
        img.src = screen.src;
      }
    });

    if (screens[activeIndex]) {
      drawImage(activeIndex);
      updateChips(activeIndex);
    }
  }, [screens, activeIndex, drawImage, updateChips]);

  // Auto-rotate
  useEffect(() => {
    if (!autoRotate || screens.length <= 1) return;

    autoTimerRef.current = setInterval(() => {
      const next = (activeIndex + 1) % screens.length;
      switchTo(next, true);
    }, 5000);

    return () => {
      if (autoTimerRef.current) clearInterval(autoTimerRef.current);
    };
  }, [autoRotate, screens.length, activeIndex, switchTo]);

  // Mouse parallax
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = stage.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      mouseTarget.current = { x: 4 - dy * 14, y: dx * 12 };
    };

    const handleMouseLeave = () => {
      mouseTarget.current = { x: 4, y: 0 };
    };

    stage.addEventListener('mousemove', handleMouseMove);
    stage.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      stage.removeEventListener('mousemove', handleMouseMove);
      stage.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // GSAP ScrollTrigger
  useEffect(() => {
    if (!scrollTriggerConfig) return;

    const wrap = perspWrapRef.current;
    if (!wrap) return;

    let gsap: any;
    let ScrollTrigger: any;
    const loadGSAP = async () => {
      try {
        const gsapModule = await import('gsap');
        gsap = gsapModule.default;
        const { ScrollTrigger: ST } = await import('gsap/ScrollTrigger');
        ScrollTrigger = ST;
        gsap.registerPlugin(ScrollTrigger);

        const { start, end, scrub, rotateX, rotateY } = {
          start: 'top 90%',
          end: 'top 20%',
          scrub: 1,
          rotateX: { start: 18, end: 4 },
          rotateY: { start: -8, end: 0 },
          ...scrollTriggerConfig,
        };

        const sx = rotateX.start !== undefined ? rotateX.start : 18;
        const sy = rotateY.start !== undefined ? rotateY.start : -8;
        const ex = rotateX.end !== undefined ? rotateX.end : 4;
        const ey = rotateY.end !== undefined ? rotateY.end : 0;
        const rangeX = ex - sx;
        const rangeY = ey - sy;

        const tween = gsap.to(wrap, {
          scrollTrigger: {
            trigger: stageRef.current || (wrap.closest as any)('section'),
            start,
            end,
            scrub,
            invalidateOnRefresh: true,
            onUpdate: (self: any) => {
              const p = self.progress;
              scrollRot.current = {
                x: sx + rangeX * p,
                y: sy + rangeY * p,
              };
            },
          },
        });

        gsapScrollTweenRef.current = tween;
        scrollRot.current = { x: sx, y: sy };

        ScrollTrigger.addEventListener('refresh', () => ScrollTrigger.refresh());
      } catch (e) {
        // GSAP unavailable
      }
    };

    loadGSAP();

    return () => {
      if (gsapScrollTweenRef.current) {
        gsapScrollTweenRef.current.scrollTrigger && gsapScrollTweenRef.current.scrollTrigger.kill();
        gsapScrollTweenRef.current.kill();
      }
    };
  }, [scrollTriggerConfig]);

  // Entry animation
  useEffect(() => {
    if (entryDone.current) return;
    entryDone.current = true;

    const card = cardRef.current;
    if (!card) return;

    const doEntry = async () => {
      let gsap: any;
      try {
        const mod = await import('gsap');
        gsap = mod.default;
      } catch {
        card.style.opacity = '1';
        card.style.transform = 'rotateX(4deg) rotateY(0deg) scale(1)';
        return;
      }

      gsap.set(card, { opacity: 0, scale: 0.9, rotateX: 0, rotateY: 0 });
      gsap.to(card, {
        opacity: 1,
        scale: 1,
        rotateX: 4,
        rotateY: 0,
        duration: 1.1,
        delay: 0.3,
        ease: 'power3.out',
      });
    };

    doEntry();
  }, []);

  // Main animation loop
  useEffect(() => {
    const card = cardRef.current;
    const canvasWrap = canvasWrapRef.current;
    if (!card) return;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      mouseCurrent.current.x = lerp(mouseCurrent.current.x, mouseTarget.current.x, 0.06);
      mouseCurrent.current.y = lerp(mouseCurrent.current.y, mouseTarget.current.y, 0.06);

      if (card) {
        const mx = mouseCurrent.current.x;
        const my = mouseCurrent.current.y;
        card.style.transform = `rotateX(${mx}deg) rotateY(${my}deg)`;
      }

      if (canvasWrap) {
        const sr = scrollRot.current;
        const mr = mouseCurrent.current;
        const totalX = sr.x + (mr.x - 4);
        const totalY = sr.y + mr.y;
        const tx = totalY * 0.8;
        const ty = -(totalX - 4) * 0.6;
        canvasWrap.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={stageRef}
      className={`ai-card-stage ${className}`}
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        ...style,
      }}
    >
      {showTabs && screens.length > 1 && (
        <div className="ai-tab-bar">
          {screens.map((screen, i) => (
            <button
              key={i}
              className={`ai-tab-btn ${i === activeIndex ? 'active' : ''}`}
              onClick={() => {
                if (autoTimerRef.current) clearInterval(autoTimerRef.current);
                switchTo(i, true);
              }}
            >
              {screen.label}
            </button>
          ))}
        </div>
      )}

      {showStatusBar && screens[activeIndex] && (
        <div className="ai-status-bar">
          <span className="ai-status-url">{screens[activeIndex]!.url || screens[activeIndex]!.label}</span>
          <div className="ai-status-live">
            <div className="ai-live-dot"></div>
            LIVE
          </div>
        </div>
      )}

      <div ref={perspWrapRef} className="ai-perspective-wrap">
        <div ref={cardRef} className="ai-product-card">
          <div className="ai-glow" />

          <div className="ai-glass-frame">
            <div className="ai-scanlines"></div>
            <div className="ai-top-tint"></div>
            <div className="ai-bottom-tint"></div>

            <div className="ai-corner ai-corner-tl"></div>
            <div className="ai-corner ai-corner-tr"></div>
            <div className="ai-corner ai-corner-bl"></div>
            <div className="ai-corner ai-corner-br"></div>

            <div
              ref={canvasWrapRef}
              className="ai-canvas-wrap"
              style={{
                position: 'relative',
                zIndex: 1,
                willChange: 'transform',
              }}
            >
              <canvas
                ref={canvasRef}
                className="ai-screen-canvas"
                style={{
                  width: '100%',
                  display: 'block',
                  opacity: 1,
                  transition: 'none',
                }}
              />
            </div>

            <div ref={chipLayerRef} className="ai-chip-layer"></div>
          </div>
        </div>

        <div className="ai-reflection"></div>
      </div>

      {showLabel && (
        <div className="ai-product-label">
          Forgera OS · Intelligent Business Operations
        </div>
      )}

      <style>{`
        .ai-card-stage {
          perspective: 1000px;
          perspective-origin: 50% 40%;
        }

        .ai-tab-bar {
          display: flex;
          gap: 6px;
          margin-bottom: 20px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 50px;
          padding: 5px;
          position: relative;
          z-index: 10;
        }
        .ai-tab-btn {
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 500;
          color: rgba(255,255,255,0.4);
          background: transparent;
          border: none;
          cursor: pointer;
          transition: all 0.25s;
          font-family: inherit;
          letter-spacing: 0.01em;
          white-space: nowrap;
        }
        .ai-tab-btn.active {
          background: rgba(232,112,13,0.15);
          border: 1px solid rgba(232,112,13,0.35);
          color: #E8700D;
        }
        .ai-tab-btn:not(.active):hover {
          color: rgba(255,255,255,0.7);
        }

        .ai-status-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 4px;
          margin-bottom: 10px;
          width: 100%;
          max-width: 860px;
          position: relative;
          z-index: 10;
        }
        .ai-status-url {
          font-size: 11px;
          color: rgba(232,112,13,0.6);
          letter-spacing: 0.06em;
          font-family: 'SF Mono', 'Fira Code', monospace;
        }
        .ai-status-live {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 11px;
          color: rgba(255,255,255,0.3);
          letter-spacing: 0.05em;
        }
        .ai-live-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #4CAF50;
          box-shadow: 0 0 6px #4CAF50;
          animation: ai-live-pulse 2s infinite;
        }
        @keyframes ai-live-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .ai-perspective-wrap {
          perspective: 1000px;
          perspective-origin: 50% 40%;
          width: 100%;
          max-width: 860px;
          position: relative;
          transform-style: preserve-3d;
          will-change: transform;
        }

        .ai-product-card {
          width: 100%;
          transform-style: preserve-3d;
          border-radius: 18px;
          position: relative;
          will-change: transform;
        }

        .ai-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 50%;
          border-radius: 50%;
          background: radial-gradient(ellipse, rgba(232,112,13,0.06) 0%, transparent 70%);
          filter: blur(60px);
          pointer-events: none;
          z-index: -1;
        }

        .ai-glass-frame {
          border-radius: 18px;
          overflow: hidden;
          position: relative;
          border: 1px solid rgba(232,112,13,0.22);
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.04),
            0 32px 80px rgba(0,0,0,0.7),
            0 0 60px rgba(232,112,13,0.08),
            inset 0 1px 0 rgba(255,255,255,0.08);
        }

        .ai-scanlines {
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 3px,
            rgba(0,0,0,0.06) 3px,
            rgba(0,0,0,0.06) 4px
          );
          pointer-events: none;
          z-index: 20;
          border-radius: 18px;
        }

        .ai-top-tint {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          background: linear-gradient(180deg, rgba(232,112,13,0.06) 0%, transparent 100%);
          pointer-events: none;
          z-index: 18;
        }

        .ai-bottom-tint {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100px;
          background: linear-gradient(0deg, rgba(7,7,16,0.5) 0%, transparent 100%);
          pointer-events: none;
          z-index: 18;
        }

        .ai-corner {
          position: absolute;
          width: 18px;
          height: 18px;
          z-index: 25;
        }
        .ai-corner-tl {
          top: -1px;
          left: -1px;
          border-top: 2px solid rgba(232,112,13,0.7);
          border-left: 2px solid rgba(232,112,13,0.7);
          border-radius: 4px 0 0 0;
        }
        .ai-corner-tr {
          top: -1px;
          right: -1px;
          border-top: 2px solid rgba(232,112,13,0.7);
          border-right: 2px solid rgba(232,112,13,0.7);
          border-radius: 0 4px 0 0;
        }
        .ai-corner-bl {
          bottom: -1px;
          left: -1px;
          border-bottom: 2px solid rgba(232,112,13,0.7);
          border-left: 2px solid rgba(232,112,13,0.7);
          border-radius: 0 0 0 4px;
        }
        .ai-corner-br {
          bottom: -1px;
          right: -1px;
          border-bottom: 2px solid rgba(232,112,13,0.7);
          border-right: 2px solid rgba(232,112,13,0.7);
          border-radius: 0 0 4px 0;
        }

        .ai-canvas-wrap {
          overflow: hidden;
        }
        .ai-screen-canvas {
          width: 100%;
          display: block;
        }

        .ai-chip-layer {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 22;
        }

        .ai-chip {
          position: absolute;
          background: rgba(7,7,16,0.82);
          border: 1px solid rgba(232,112,13,0.3);
          border-radius: 8px;
          padding: 6px 10px;
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          gap: 7px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.4), 0 0 12px rgba(232,112,13,0.08);
          white-space: nowrap;
        }
        .ai-chip-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .ai-chip-label {
          font-size: 11px;
          font-weight: 600;
          color: rgba(255,255,255,0.5);
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .ai-chip-val {
          font-size: 13px;
          font-weight: 700;
          color: #E8700D;
          font-family: 'SF Mono', 'Fira Code', monospace;
          margin-left: 2px;
        }

        .ai-reflection {
          width: 90%;
          height: 40px;
          margin: 0 auto;
          background: linear-gradient(180deg, rgba(232,112,13,0.04) 0%, transparent 100%);
          border-radius: 0 0 50% 50%;
          filter: blur(12px);
        }

        .ai-product-label {
          margin-top: 28px;
          text-align: center;
          font-size: 12px;
          color: rgba(255,255,255,0.2);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .ai-product-label::before,
        .ai-product-label::after {
          content: '';
          display: block;
          width: 40px;
          height: 1px;
          background: rgba(255,255,255,0.1);
        }

        @media (max-width: 640px) {
          .ai-tab-btn {
            padding: 6px 12px;
            font-size: 11px;
          }
          .ai-chip {
            padding: 4px 8px;
          }
          .ai-chip-label {
            font-size: 9px;
          }
          .ai-chip-val {
            font-size: 11px;
          }
        }
      `}</style>
    </div>
  );
}