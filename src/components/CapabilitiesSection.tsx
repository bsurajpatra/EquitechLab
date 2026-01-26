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

const itemVariantsLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

const itemVariantsRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1]
        }
    }
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

                {/* Capability Pillars List */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col gap-6 max-w-5xl mx-auto"
                >
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            variants={index % 2 === 0 ? itemVariantsLeft : itemVariantsRight}
                            className="group relative flex flex-col md:flex-row items-center gap-8 p-8 rounded-3xl border border-slate-200/60 bg-white/70 backdrop-blur-xl hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
                        >
                            {/* Icon Section */}
                            <div className="relative flex-shrink-0">
                                <div className="absolute inset-0 bg-slate-100 rounded-2xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10 transition-transform duration-500 group-hover:scale-110">
                                    {pillar.icon}
                                </div>
                            </div>

                            {/* Text Section */}
                            <div className="flex-grow text-center md:text-left">
                                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-3">
                                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                                        {pillar.title}
                                    </h3>
                                    <div className="hidden md:block h-1.5 w-1.5 rounded-full bg-slate-300" />
                                    <span className="text-[11px] font-black tracking-[0.2em] text-slate-400 uppercase">
                                        {pillar.keywords}
                                    </span>
                                </div>
                                <p className="text-lg text-slate-600 leading-relaxed font-medium max-w-2xl">
                                    {pillar.description}
                                </p>
                            </div>


                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default CapabilitiesSection;
