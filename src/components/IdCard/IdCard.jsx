import { useRef } from "react";
import "./IdCard.css";

const IdCard = () => {
  const cardRef = useRef(null);

  const isMobile = window.innerWidth <= 768;

  const handleMouseMove = (e) => {
    if (isMobile) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 18;
    const rotateY = (x - centerX) / 18;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);

    card.style.transform = `
      perspective(1200px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.06)
    `;
  };

  const handleMouseLeave = () => {
    if (isMobile) return;

    const card = cardRef.current;
    card.style.transform = `
      perspective(1200px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
  };

  return (
    <div
      ref={cardRef}
      className="photo-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img src="/raihan.png" alt="Photo" />
    </div>
  );
};

export default IdCard;
