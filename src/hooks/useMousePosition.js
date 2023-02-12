import { useState } from 'react';

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handlePosition = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    console.log('handlePosition', mouseX, mouseY);
    setPosition({ x: mouseX, y: mouseY });
  };

  return {
    position,
    handlePosition,
  };
};

export default useMousePosition;
