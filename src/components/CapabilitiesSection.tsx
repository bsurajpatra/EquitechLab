import { motion } from 'framer-motion';
import SectionBackground from './shared/SectionBackground';
import ModularBlocksSVG from './hero/ModularBlocksSVG';

const containerVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1] as any,
            staggerChildren: 0.1
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
};

const CapabilitiesSection = () => {
    const pillars = [
        {
            title: "Intelligence & Data",
            description: "Designing intelligent systems using data, AI, and automation.",
            keywords: "AI • GenAI • Analytics",
            color: "blue",
            icon: (
                <div className="w-16 h-16 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                </div>
            )
        },
        {
            title: "Platforms & Infra",
            description: "Building scalable, cloud-native platforms and digital foundations.",
            keywords: "Cloud • SaaS • Scalable",
            color: "emerald",
            icon: (
                <div className="w-16 h-16 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-600/20">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                </div>
            )
        },
        {
            title: "Security & Trust",
            description: "Engineering secure, resilient systems for real-world environments.",
            keywords: "SecOps • Compliance • Trust",
            color: "rose",
            icon: (
                <div className="w-16 h-16 rounded-xl bg-rose-600 flex items-center justify-center text-white shadow-lg shadow-rose-600/20">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                </div>
            )
        },
        {
            title: "Connected Systems",
            description: "Creating connected systems and user-focused digital products.",
            keywords: "IoT • Product • Connectivity",
            color: "amber",
            icon: (
                <div className="w-16 h-16 rounded-xl bg-amber-600 flex items-center justify-center text-white shadow-lg shadow-amber-600/20">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                </div>
            )
        }
    ];

    return (
        <section className="relative py-24 sm:py-32 overflow-hidden bg-slate-50" id="capabilities">
            <div className="absolute inset-0 z-0">
                <SectionBackground />
            </div>

            {/* Background SVG Decoration */}
            <div className="absolute right-0 top-0 w-[450px] h-[450px] opacity-[0.02] pointer-events-none translate-x-1/4 -translate-y-1/4 rotate-45 z-10">
                <ModularBlocksSVG />
            </div>
            <div className="absolute left-0 bottom-0 w-[550px] h-[550px] opacity-[0.025] pointer-events-none -translate-x-1/4 translate-y-1/4 -rotate-12 z-10">
                <ModularBlocksSVG />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                {/* Header */}
                <div className="max-w-3xl mb-16 sm:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                            Our Capabilities
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed font-medium">
                            Four core capability pillars that work together to build scalable, real-world systems.
                        </p>
                    </motion.div>
                </div>

                {/* Capability Pillars Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
                >
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="group relative rounded-2xl border border-slate-200 bg-white/65 backdrop-blur-lg hover:border-slate-300 transition-all duration-300 flex flex-col items-start h-full overflow-hidden"
                        >
                            {/* Visual Preview Plate */}
                            <div className="w-full h-44 bg-slate-50 border-b border-slate-100 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 opacity-[0.03]">
                                    <svg width="100%" height="100%">
                                        <pattern id={`pillar-pattern-${index}`} width="10" height="10" patternUnits="userSpaceOnUse">
                                            <rect width="1" height="1" fill="currentColor" className="text-slate-900" />
                                        </pattern>
                                        <rect width="100%" height="100%" fill={`url(#pillar-pattern-${index})`} />
                                    </svg>
                                </div>
                                <div className="relative z-10 transform transition-transform duration-500 group-hover:scale-110">
                                    {pillar.icon}
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-lg font-bold text-slate-900 mb-2 transition-colors">
                                    {pillar.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-sm mb-6 flex-grow">
                                    {pillar.description}
                                </p>
                                <div className="w-full pt-4 border-t border-slate-100">
                                    <p className="text-[10px] font-black tracking-widest text-slate-400 uppercase">
                                        {pillar.keywords}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default CapabilitiesSection;
