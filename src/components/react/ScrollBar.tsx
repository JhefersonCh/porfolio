import { useEffect, useRef } from 'react';

export const ScrollBar = () => {
  const thumbRef = useRef<HTMLDivElement>(null);
  const scrolling = useRef(false);
  const frameId = useRef<number | null>(null);
  const isDragging = useRef(false);
  const startY = useRef(0);
  const startScroll = useRef(0);

  const updateThumbPosition = () => {
    if (!scrolling.current) return;

    const scrollTop = window.scrollY;
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const containerHeight = 200;
    const thumbHeight = 50;

    const maxThumbPosition = containerHeight - thumbHeight;
    const position = Math.max(
      0,
      Math.min((scrollTop / scrollHeight) * maxThumbPosition, maxThumbPosition),
    );

    if (thumbRef.current) {
      thumbRef.current.style.transform = `translateY(${position}px)`;
    }

    frameId.current = requestAnimationFrame(updateThumbPosition);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;

    const deltaY = e.clientY - startY.current;
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const containerHeight = 200;
    const thumbHeight = 50;
    const scrollRatio = scrollHeight / (containerHeight - thumbHeight);

    window.scrollTo({
      top: startScroll.current + deltaY * scrollRatio,
      behavior: 'instant',
    });
  };

  const handleTrackClick = (e: React.MouseEvent) => {
    const track = e.currentTarget as HTMLDivElement;
    const rect = track.getBoundingClientRect();
    const clickPosition = e.clientY - rect.top;

    const containerHeight = 200;
    const thumbHeight = 50;
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollRatio = scrollHeight / (containerHeight - thumbHeight);

    window.scrollTo({
      top: (clickPosition - thumbHeight / 2) * scrollRatio,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    if (!scrolling.current) {
      scrolling.current = true;
      frameId.current = requestAnimationFrame(updateThumbPosition);
    }
  };

  const handleScrollEnd = () => {
    scrolling.current = false;
    if (frameId.current) {
      cancelAnimationFrame(frameId.current);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scrollend', handleScrollEnd);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scrollend', handleScrollEnd);
      window.removeEventListener('mousemove', handleMouseMove);
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
    };
  }, []);

  return (
    <div className="fixed right-32 h-full z-20 lg:flex items-center justify-center hidden">
      <div
        className="h-[200px] w-2 bg-gray-300 dark:bg-gray-200/80 rounded-full cursor-pointer relative overflow-hidden hover:bg-gray-300/80 transition-colors "
        onClick={handleTrackClick}
      >
        <div
          ref={thumbRef}
          className="w-full bg-gray-900/80 cursor-default rounded-full absolute hover:bg-gray-900 transition-colors"
          style={{
            height: '50px',
            transform: 'translateY(0)',
          }}
        ></div>
      </div>
    </div>
  );
};
