import type { Dispatch, RefObject, SetStateAction } from "react";

export const handleMouseDown = (
  event: React.MouseEvent,
  containerRef: RefObject<HTMLDivElement | null>,
  setIsDragging: Dispatch<SetStateAction<boolean>>,
  setStartX: Dispatch<SetStateAction<number>>,
  setScrollLeft: Dispatch<SetStateAction<number>>
) => {
  if (!containerRef.current) return;
  setIsDragging(true);
  setStartX(event.pageX - containerRef.current.offsetLeft);
  setScrollLeft(containerRef.current.scrollLeft);
};

export const handleMouseMove = (
  event: React.MouseEvent,
  isDragging: boolean,
  containerRef: RefObject<HTMLDivElement | null>,
  startX: number,
  scrollLeft: number
) => {
  if (!isDragging || !containerRef.current) return;
  const x = event.pageX - containerRef.current.offsetLeft;
  const walk = (x - startX) * 2;
  containerRef.current.scrollLeft = scrollLeft - walk;
};

export const handleMouseUp = (
  setIsDragging: Dispatch<SetStateAction<boolean>>
) => {
  setIsDragging(false);
};
