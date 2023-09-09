"use client";
import React, { useEffect } from "react";

interface CursorHistoryItem {
  x: number;
  y: number;
}

const TAIL_LENGTH = 20;

const GooeyCursor: React.FC = () => {
  let mouseX = 0;
  let mouseY = 0;

  let cursorCircles: HTMLDivElement[] | null;
  let cursorHistory: CursorHistoryItem[] = Array(TAIL_LENGTH).fill({
    x: 0,
    y: 0,
  });

  const onMouseMove = (event: MouseEvent) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  useEffect(() => {
    const cursor = document.getElementById("cursor");

    if (cursor) {
      for (let i = 0; i < TAIL_LENGTH; i++) {
        const div = document.createElement("div");
        div.classList.add("cursor-circle");
        cursor.append(div);
      }
      cursorCircles = Array.from(document.querySelectorAll(".cursor-circle"));
    }
  }, []);

  useEffect(() => {
    const updateCursor = () => {
      cursorHistory.shift();
      cursorHistory.push({ x: mouseX, y: mouseY });

      for (let i = 0; i < TAIL_LENGTH; i++) {
        const current = cursorHistory[i];
        const next = cursorHistory[i + 1] || cursorHistory[TAIL_LENGTH - 1];

        const xDiff = next.x - current.x;
        const yDiff = next.y - current.y;

        current.x += xDiff * 0.35;
        current.y += yDiff * 0.35;

        if (cursorCircles && cursorCircles[i]) {
          cursorCircles[i].style.transform = `translate(${current.x}px, ${
            current.y
          }px) scale(${i / TAIL_LENGTH})`;
        }
      }
      requestAnimationFrame(updateCursor);
    };

    const animationFrameId = requestAnimationFrame(updateCursor);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
    
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="goo"
        version="1.1"
        width="100%">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="6"
              result="blur"></feGaussianBlur>
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15"
              result="goo"></feColorMatrix>
            <feComposite
              in="SourceGraphic"
              in2="goo"
              operator="atop"></feComposite>
          </filter>
        </defs>
      </svg>
      <div id="cursor" />
    </>
  );
};

export default GooeyCursor;
