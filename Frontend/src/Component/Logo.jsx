import React from 'react';
const QuickCareLogo = () => {
  return (
    <svg
      width="217"
      height="46"
      viewBox="0 0 217 46"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block"
    >
      {/* Stethoscope Icon in Blue */}
      <g transform="translate(5, 5)">
        <circle cx="10" cy="10" r="8" stroke="#007BFF" strokeWidth="2.5" fill="none" />
        <line x1="10" y1="18" x2="10" y2="28" stroke="#007BFF" strokeWidth="2.5" />
        <line x1="0" y1="28" x2="20" y2="28" stroke="#007BFF" strokeWidth="2.5" />
        <circle cx="0" cy="28" r="2.5" fill="#007BFF" />
        <circle cx="20" cy="28" r="2.5" fill="#007BFF" />
      </g>

      {/* QuickCare Text */}
      <text
        x="50"
        y="32"
        className="font-semibold text-black text-[24px]"
        fontFamily="Segoe UI"
      >
        QuickCare
      </text>
    </svg>
  );
};

export default QuickCareLogo;
