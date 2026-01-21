const ModularBlocksSVG = () => {
    return (
        <svg
            viewBox="0 0 500 500"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Main container: Removed floating animation for steady look */}
            <g>
                {/* Group A: Foundation Layer (Steady and high contrast) */}
                <g opacity="0.95">
                    <rect x="60" y="320" width="140" height="90" rx="10" className="fill-slate-800" />
                    <rect x="220" y="350" width="180" height="60" rx="8" className="fill-slate-700 stroke-slate-500" strokeWidth="1" />
                    <rect x="420" y="310" width="40" height="100" rx="6" className="fill-slate-500 opacity-20" />

                    {/* Fast Status Indicators */}
                    <circle cx="80" cy="340" r="2" className="fill-blue-500 animate-pulse" />
                    <circle cx="90" cy="340" r="2" className="fill-blue-400 group-hover:fill-blue-300 transition-colors" />
                    <circle cx="100" cy="340" r="2" className="fill-slate-600" />
                </g>

                {/* Group B: Core Processing Modules */}
                <g opacity="0.95">
                    {/* Scanning Module (Blue) */}
                    <g transform="translate(90, 180)">
                        <rect x="0" y="0" width="120" height="120" rx="10" className="fill-blue-900 shadow-xl" />
                        <clipPath id="clip-scan-v2">
                            <rect x="0" y="0" width="120" height="120" rx="10" />
                        </clipPath>
                        <rect x="0" y="0" width="120" height="4" className="fill-blue-400 animate-scan-fast" clipPath="url(#clip-scan-v2)" />

                        {/* Data Bit Flow inside block */}
                        <g clipPath="url(#clip-scan-v2)" opacity="0.3">
                            <rect x="20" y="20" width="4" height="4" className="fill-white animate-bit-flow" />
                            <rect x="60" y="40" width="4" height="4" className="fill-white animate-bit-flow [animation-delay:0.5s]" />
                            <rect x="90" y="10" width="4" height="4" className="fill-white animate-bit-flow [animation-delay:1.2s]" />
                        </g>
                    </g>

                    {/* Processing Unit (Slate) */}
                    <g transform="translate(230, 200)">
                        <rect x="0" y="0" width="100" height="130" rx="10" className="fill-slate-800" />

                        {/* Fast Activity Bars */}
                        {[...Array(5)].map((_, i) => (
                            <rect
                                key={i}
                                x="15"
                                y={25 + (i * 18)}
                                width="70"
                                height="4"
                                rx="2"
                                className={`fill-slate-600 ${i % 2 === 0 ? 'animate-processing' : 'animate-pulse'}`}
                                style={{ animationDelay: `${i * 0.2}s` }}
                            />
                        ))}
                    </g>

                    <rect x="350" y="190" width="110" height="80" rx="8" fill="none" className="stroke-slate-500" strokeWidth="2" />
                </g>

                {/* Group C: Interface Units */}
                <g>
                    {/* Removed the large fading grey block, replaced with a structured layout */}
                    <rect x="50" y="60" width="220" height="100" rx="10" className="fill-slate-700" />
                    <g transform="translate(70, 80)" opacity="0.4">
                        {[...Array(6)].map((_, i) => (
                            <rect
                                key={i}
                                x={i * 30}
                                y="0"
                                width="15"
                                height="60"
                                rx="2"
                                className={`fill-slate-400 ${i % 3 === 0 ? 'animate-pulse' : ''}`}
                            />
                        ))}
                    </g>

                    <rect x="290" y="80" width="130" height="90" rx="10" className="fill-blue-800" />
                    {/* Fast activity on blue block */}
                    <rect x="310" y="100" width="90" height="4" rx="2" className="fill-blue-400 opacity-50 animate-scan-fast" />
                </g>

                {/* Data Transfer Paths (Higher Visibility) */}
                <g className="text-blue-500">
                    {/* Path 1: Interface to Processing */}
                    <path d="M150 150 L150 190" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.1" />
                    <path d="M150 150 L150 190" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="4,8" className="animate-data-flow-fast" />

                    {/* Path 2: Inter-module transfer */}
                    <path d="M210 240 L230 240" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.1" />
                    <path d="M210 240 L230 240" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="3,6" className="animate-data-flow-fast" />

                    {/* Path 3: Core to Foundation */}
                    <path d="M280 330 L280 350" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.1" />
                    <path d="M280 330 L280 350" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="4,8" className="animate-data-flow-fast" />
                </g>

                {/* Micro Details (Steady) */}
                <rect x="150" y="150" width="10" height="40" rx="2" className="fill-slate-500" opacity="0.3" />
                <rect x="280" y="320" width="40" height="8" rx="2" className="fill-slate-500" opacity="0.3" />
            </g>
        </svg>
    );
};

export default ModularBlocksSVG;
