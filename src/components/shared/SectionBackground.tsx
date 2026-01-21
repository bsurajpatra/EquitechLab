import { useId } from 'react';

const SectionBackground = () => {
    const gridId = useId();

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
            {/* Technical Grid - Increased visibility by ~30% from the previous extremely subtle state */}
            <div className="absolute inset-0 opacity-[0.14]">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id={gridId} width="60" height="60" patternUnits="userSpaceOnUse">
                            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#64748b" strokeWidth="1" />
                            <circle cx="0" cy="0" r="1.2" fill="#475569" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#${gridId})`} />
                </svg>
            </div>

            {/* Dynamic Innovation Elements - 30% more presence */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Refined Pulsing "Node" points */}
                <g opacity="0.22">
                    <circle cx="15%" cy="25%" r="3.5" className="fill-blue-500 animate-pulse" />
                    <circle cx="85%" cy="20%" r="3.5" className="fill-blue-500 animate-pulse [animation-delay:1s]" />
                    <circle cx="45%" cy="55%" r="3.5" className="fill-blue-500 animate-pulse [animation-delay:1.5s]" />
                    <circle cx="25%" cy="85%" r="3.5" className="fill-blue-500 animate-pulse [animation-delay:0.5s]" />
                    <circle cx="75%" cy="80%" r="3.5" className="fill-blue-500 animate-pulse [animation-delay:2s]" />
                </g>

                {/* Data Flow Lines */}
                <g stroke="#64748b" strokeWidth="1.2" opacity="0.15">
                    <line x1="0" y1="20%" x2="100%" y2="50%" strokeDasharray="6,12" className="animate-data-flow-fast" />
                    <line x1="100%" y1="70%" x2="0%" y2="40%" strokeDasharray="6,12" className="animate-data-flow-fast [animation-delay:1s]" />
                </g>
            </svg>

            {/* Subtle Scan Beam */}
            <div className="absolute inset-x-0 h-[280px] bg-gradient-to-b from-transparent via-blue-400/10 to-transparent animate-scan-y pointer-events-none" />
        </div>
    );
};

export default SectionBackground;
