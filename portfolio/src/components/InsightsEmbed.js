import React, { useRef, useState, useEffect } from 'react';

export default function InsightsEmbed({ src = "https://us.posthog.com/embedded/8dt6LTPTzPrGteDvADGYP-za9m48FA?legend&detailed", width = "100%", maxWidth = "800px", height = "400px" }) {
  const containerRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleChange = () => {
      const fsElement = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
      setIsFullscreen(!!fsElement && fsElement === containerRef.current);
    };
    document.addEventListener('fullscreenchange', handleChange);
    document.addEventListener('webkitfullscreenchange', handleChange);
    document.addEventListener('mozfullscreenchange', handleChange);
    document.addEventListener('MSFullscreenChange', handleChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleChange);
      document.removeEventListener('webkitfullscreenchange', handleChange);
      document.removeEventListener('mozfullscreenchange', handleChange);
      document.removeEventListener('MSFullscreenChange', handleChange);
    };
  }, []);

  const handleFullscreen = () => {
    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      } else if (containerRef.current.webkitRequestFullscreen) {
        containerRef.current.webkitRequestFullscreen();
      } else if (containerRef.current.mozRequestFullScreen) {
        containerRef.current.mozRequestFullScreen();
      } else if (containerRef.current.msRequestFullscreen) {
        containerRef.current.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };

  return (
    <div
      ref={containerRef}
      style={{
        width,
        maxWidth,
        margin: "2rem auto",
        height,
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 2px 16px rgba(0,0,0,0.12)",
        border: "1px solid #eee",
        background: "#fff",
        position: "relative"
      }}
    >
      <button
        onClick={handleFullscreen}
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          zIndex: 10,
          padding: "0.5rem 1rem",
          borderRadius: "6px",
          border: "none",
          background: "#222",
          color: "#fff",
          cursor: "pointer",
          opacity: 0.8
        }}
      >
        {isFullscreen ? 'Minimize' : 'Fullscreen'}
      </button>
      <iframe
        src={src}
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          display: "block"
        }}
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
}
