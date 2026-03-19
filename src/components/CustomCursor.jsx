// CustomCursor.jsx - Enhanced custom cursor with ring, dot, hover effects, and mobile detection
import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const raf = useRef(null);

  useEffect(() => {
    // Check if device supports touch
    const checkMobile = () => {
      const hasTouchSupport = () => {
        return (
          navigator.maxTouchPoints > 0 ||
          navigator.msMaxTouchPoints > 0 ||
          window.matchMedia('(pointer:coarse)').matches
        );
      };
      setIsMobile(hasTouchSupport());
    };

    checkMobile();
    window.addEventListener('orientationchange', checkMobile);

    return () => window.removeEventListener('orientationchange', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return; // Don't run custom cursor on mobile

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
      }
    };

    const onEnter = () => setHovered(true);
    const onLeave = () => setHovered(false);

    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        const scale = hovered ? 1.8 : 1;
        ringRef.current.style.transform = `translate(${ring.current.x - 18}px, ${ring.current.y - 18}px) scale(${scale})`;
      }
      raf.current = requestAnimationFrame(animate);
    };

    // Add hover listeners to all clickable elements
    const addListeners = (selector) => {
      document.querySelectorAll(selector).forEach((el) => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    // Debounce listener attachment
    const timeoutId = setTimeout(() => {
      addListeners('a, button, [data-cursor], input, textarea, [role="button"]');
    }, 100);

    window.addEventListener('mousemove', onMove);
    raf.current = requestAnimationFrame(animate);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('mousemove', onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
      document.querySelectorAll('a, button, [data-cursor], input, textarea, [role="button"]').forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, [hovered, isMobile]);

  if (isMobile) return null; // Don't render cursor on mobile

  return (
    <>
      {/* Cursor dot (inner circle) */}
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{
          position: 'fixed',
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          pointerEvents: 'none',
          background: '#6366F1',
          boxShadow: '0 0 20px #6366F1',
          transform: 'translate(-50%, -50%)',
          zIndex: 9999,
          transition: hovered ? 'background 0.2s ease, box-shadow 0.2s ease' : 'none',
        }}
      />

      {/* Cursor ring (outer circle with lag) */}
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          position: 'fixed',
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          pointerEvents: 'none',
          border: '2px solid rgba(99, 102, 241, 0.5)',
          boxShadow: hovered
            ? '0 0 20px rgba(99, 102, 241, 0.6), 0 0 40px rgba(139, 92, 246, 0.4)'
            : '0 0 10px rgba(99, 102, 241, 0.3)',
          transform: 'translate(-50%, -50%)',
          zIndex: 9998,
          mixBlendMode: 'difference',
          transition: 'box-shadow 0.2s ease, border-color 0.2s ease',
          borderColor: hovered ? 'rgba(139, 92, 246, 0.8)' : 'rgba(99, 102, 241, 0.5)',
        }}
      />
    </>
  );
};

export default CustomCursor;
