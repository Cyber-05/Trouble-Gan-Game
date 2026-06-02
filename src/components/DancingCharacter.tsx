export function DancingCharacter({ size = 200, className = "" }: { size?: number; className?: string }) {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 200 240"
        className="w-full h-full animate-dance"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Shadow */}
        <ellipse cx="100" cy="232" rx="40" ry="6" fill="rgba(0,0,0,0.3)" className="animate-pulse" />
        
        {/* Left Ear (wiggling) */}
        <g className="animate-ear-left" style={{ transformOrigin: "75px 60px" }}>
          <ellipse cx="68" cy="40" rx="14" ry="38" fill="#FFA1B0" />
          <ellipse cx="68" cy="42" rx="7" ry="28" fill="#FF6B85" />
        </g>
        
        {/* Right Ear (wiggling) */}
        <g className="animate-ear-right" style={{ transformOrigin: "125px 60px" }}>
          <ellipse cx="132" cy="40" rx="14" ry="38" fill="#FFA1B0" />
          <ellipse cx="132" cy="42" rx="7" ry="28" fill="#FF6B85" />
        </g>
        
        {/* Head */}
        <ellipse cx="100" cy="100" rx="55" ry="52" fill="#FFB8C5" />
        
        {/* Face Highlight */}
        <ellipse cx="100" cy="90" rx="45" ry="40" fill="#FFC8D4" />
        
        {/* Eyes */}
        <g>
          {/* Left Eye */}
          <ellipse cx="80" cy="95" rx="9" ry="11" fill="white" />
          <circle cx="80" cy="97" r="6" fill="#1a1a1a" />
          <circle cx="82" cy="94" r="2" fill="white" />
          
          {/* Right Eye */}
          <ellipse cx="120" cy="95" rx="9" ry="11" fill="white" />
          <circle cx="120" cy="97" r="6" fill="#1a1a1a" />
          <circle cx="122" cy="94" r="2" fill="white" />
        </g>
        
        {/* Cheeks */}
        <circle cx="65" cy="115" r="7" fill="#FF6B85" opacity="0.5" />
        <circle cx="135" cy="115" r="7" fill="#FF6B85" opacity="0.5" />
        
        {/* Smile */}
        <path
          d="M 85 125 Q 100 138 115 125"
          stroke="#1a1a1a"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Nose */}
        <ellipse cx="100" cy="110" rx="4" ry="3" fill="#FF6B85" />
        
        {/* Body */}
        <ellipse cx="100" cy="180" rx="40" ry="35" fill="#9CFF11" />
        <ellipse cx="100" cy="175" rx="35" ry="30" fill="#B6FF45" />
        
        {/* Arms (waving) */}
        <g className="animate-arm-left" style={{ transformOrigin: "65px 155px" }}>
          <ellipse cx="50" cy="170" rx="12" ry="22" fill="#FFB8C5" transform="rotate(-20 50 170)" />
        </g>
        <g className="animate-arm-right" style={{ transformOrigin: "135px 155px" }}>
          <ellipse cx="150" cy="170" rx="12" ry="22" fill="#FFB8C5" transform="rotate(20 150 170)" />
        </g>
        
        {/* Feet */}
        <ellipse cx="80" cy="220" rx="14" ry="8" fill="#FFA1B0" />
        <ellipse cx="120" cy="220" rx="14" ry="8" fill="#FFA1B0" />
        
        {/* Sparkles around character */}
        <g className="animate-float">
          <circle cx="20" cy="80" r="2" fill="#9CFF11" />
          <circle cx="180" cy="100" r="2" fill="#00FFBB" />
          <circle cx="30" cy="160" r="2" fill="#D800FF" />
          <circle cx="170" cy="180" r="2" fill="#FFA100" />
        </g>
      </svg>
    </div>
  );
}
