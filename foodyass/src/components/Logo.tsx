"use client";

import React from "react";

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 40, className = "" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 hover:scale-110">
        {/* Background Circle */}
        <circle
          cx="100"
          cy="100"
          r="95"
          className="fill-light-primaryContainer dark:fill-dark-primaryContainer"
        />

        {/* Fork */}
        <g className="fill-light-primary dark:fill-dark-primary">
          <rect x="50" y="80" width="8" height="90" rx="4" />
          <rect x="42" y="70" width="8" height="35" rx="4" />
          <rect x="58" y="70" width="8" height="40" rx="4" />
          <rect x="34" y="70" width="8" height="30" rx="4" />
        </g>

        {/* Spoon */}
        <g className="fill-light-primary dark:fill-dark-primary">
          <rect x="142" y="80" width="8" height="90" rx="4" />
          <ellipse cx="146" cy="75" rx="15" ry="18" />
        </g>

        {/* Plate/Bowl */}
        <ellipse
          cx="100"
          cy="100"
          rx="35"
          ry="15"
          className="fill-light-secondary dark:fill-dark-secondary opacity-80"
        />

        {/* Food items on plate */}
        <circle
          cx="95"
          cy="95"
          r="8"
          className="fill-light-tertiary dark:fill-dark-tertiary"
        />
        <circle
          cx="110"
          cy="93"
          r="6"
          className="fill-light-tertiary dark:fill-dark-tertiary"
        />
        <circle
          cx="102"
          cy="100"
          r="7"
          className="fill-light-tertiary dark:fill-dark-tertiary"
        />

        {/* Decorative elements */}
        <path
          d="M 85 55 Q 100 45 115 55"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          className="text-light-primary dark:text-dark-primary opacity-60"
          strokeLinecap="round"
        />
        <circle
          cx="80"
          cy="58"
          r="2.5"
          className="fill-light-primary dark:fill-dark-primary opacity-70"
        />
        <circle
          cx="120"
          cy="58"
          r="2.5"
          className="fill-light-primary dark:fill-dark-primary opacity-70"
        />
      </svg>
      <span className="text-2xl font-bold bg-gradient-to-r from-light-primary to-light-tertiary dark:from-dark-primary dark:to-dark-tertiary bg-clip-text text-transparent">
        Foody
      </span>
    </div>
  );
};

export default Logo;
