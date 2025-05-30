import "./PurpHaze.css";

export default function PurpleHaze() {
  // generate 60 circles with computed inline styles
  const circles = Array.from({ length: 60 }, (_, i) => {
    const index = i + 1;
    // fade‐out alpha for box‐shadow (1 at i=0 → 0 at i=40+)
    const boxAlpha = 1 - index / 40;
    // fade‐out alpha for background (1 at i=0 → 0 at i=80)
    const bgAlpha = 1 - index / 80;
    // blur amount
    const blur = index / 3 + 8;
    // shared style bits
    return {
      key: i,
      style: {
        boxShadow: [
          `3px 0px rgba(255,255,255,${boxAlpha < 0 ? 0 : boxAlpha})`,
          `6px -5px rgba(10,0,0,${boxAlpha < 0 ? 0 : boxAlpha})`,
        ].join(", "),
        width: `${index * 6}px`,
        height: `${index * 1}px`,
        right: `${index * 10}px`,
        bottom: `${index * 10}px`,
        WebkitFilter: `blur(${blur}px)`,
        MozFilter: `blur(${blur}px)`,
        OFilter: `blur(${blur}px)`,
        MsFilter: `blur(${blur}px)`,
        filter: `blur(${blur}px)`,
        transformOrigin: `${index * 4}px ${index * 2}px`,
        animationDelay: `${index / 10}s`,
        background: `rgba(${90 + index * 3},${33 + index * 1},205,${
          bgAlpha < 0 ? 0 : bgAlpha
        })`,
      },
    };
  });

  return (
    <div className="purple-haze-container">
      {/* invisible SVG filter definition (not actively used here) */}
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
        <filter id="blur">
          <feGaussianBlur stdDeviation="10" />
        </filter>
      </svg>

      <div className="h">
        <h1>Demaceo Vincent</h1>
        <h2>Developer | Designer</h2>
        {circles.map(({ key, style }) => (
          <div key={key} className="c" style={style} />
        ))}
      </div>
    </div>
  );
}
