import { useState, useCallback } from 'react';

export const useTilt = (maxAngle = 8) => {
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)');

  const onMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -maxAngle;
    const rotateY = ((x - centerX) / centerX) * maxAngle;
    
    setTransform(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02,1.02,1.02)`
    );
  }, [maxAngle]);

  const onMouseLeave = useCallback(() => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)');
  }, []);

  return {
    style: { transform, transition: 'transform 0.1s ease' },
    handlers: { onMouseMove, onMouseLeave },
  };
};
