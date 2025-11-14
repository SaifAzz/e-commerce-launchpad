import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', showText = true, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        className={sizeClasses[size]}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(185, 85%, 35%)" />
            <stop offset="100%" stopColor="hsl(185, 85%, 50%)" />
          </linearGradient>
        </defs>
        {/* Main square with rounded corners */}
        <rect
          x="4"
          y="4"
          width="24"
          height="24"
          rx="6"
          fill="url(#logoGradient)"
        />
        {/* Sync/connection symbol - two overlapping circles */}
        <circle
          cx="12"
          cy="12"
          r="4"
          fill="white"
          opacity="0.9"
        />
        <circle
          cx="20"
          cy="20"
          r="4"
          fill="white"
          opacity="0.9"
        />
        {/* Connection line between circles */}
        <path
          d="M 14.5 14.5 L 17.5 17.5"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.8"
        />
        {/* Small accent dots */}
        <circle
          cx="16"
          cy="8"
          r="1.5"
          fill="hsl(15, 85%, 60%)"
        />
        <circle
          cx="24"
          cy="16"
          r="1.5"
          fill="hsl(15, 85%, 60%)"
        />
      </svg>
      {showText && (
        <span className={`font-bold ${textSizeClasses[size]}`}>
          MindSync
        </span>
      )}
    </div>
  );
};

export default Logo;

