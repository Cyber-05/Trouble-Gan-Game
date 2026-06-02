export function Logo({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <div className={`logo-container ${className}`} style={{ width: size, height: size }}>
      <div className="logo-glow" />
      <svg
        viewBox="0 0 100 100"
        className="relative z-10 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9CFF11" />
            <stop offset="50%" stopColor="#00FFBB" />
            <stop offset="100%" stopColor="#D800FF" />
          </linearGradient>
        </defs>
        
        {/* Outer hexagon */}
        <path
          d="M 50 5 L 90 27.5 L 90 72.5 L 50 95 L 10 72.5 L 10 27.5 Z"
          fill="url(#logoGradient)"
          opacity="0.2"
        />
        
        {/* Inner shape - Stylized "T" with bunny ears */}
        <g>
          {/* Bunny ears */}
          <ellipse cx="38" cy="25" rx="5" ry="15" fill="url(#logoGradient)" />
          <ellipse cx="62" cy="25" rx="5" ry="15" fill="url(#logoGradient)" />
          
          {/* T base */}
          <rect x="25" y="42" width="50" height="10" fill="url(#logoGradient)" rx="2" />
          
          {/* T stem */}
          <rect x="44" y="42" width="12" height="38" fill="url(#logoGradient)" rx="2" />
          
          {/* Eyes (mischievous) */}
          <circle cx="35" cy="62" r="3" fill="white" />
          <circle cx="65" cy="62" r="3" fill="white" />
          <circle cx="35" cy="63" r="1.5" fill="#0a0014" />
          <circle cx="65" cy="63" r="1.5" fill="#0a0014" />
          
          {/* Mischievous smile */}
          <path
            d="M 38 73 Q 50 80 62 73"
            stroke="white"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
}
