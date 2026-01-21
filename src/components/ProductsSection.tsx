import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionBackground from './shared/SectionBackground';
import ModularBlocksSVG from './hero/ModularBlocksSVG';

const ProductsSection = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const products = [
        {
            title: "Smart Digital Networks",
            tags: ["Infrastructure", "Connectivity"],
            description: "Digital infrastructure platforms enabling smart connectivity and community-scale networks.",
            color: "blue",
            plateImage: "/digital networks.webp",
            icon: (
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 shadow-lg shadow-blue-600/10 overflow-hidden border border-slate-100">
                    <img
                        src="/digital networks.webp"
                        alt="Smart Digital Networks"
                        className="w-full h-full object-cover"
                    />
                </div>
            ),
            inside: [
                "AI in a Box",
                "Digital Library",
                "Internet to last mile",
                "Real-time communication",
                "Utility services",
                "Community digital infrastructure"
            ]
        },
        {
            title: "eLearning Platform Suite",
            tags: ["Education", "Platforms"],
            description: "A comprehensive learning ecosystem combining LMS, simulations, and digital education tools.",
            color: "emerald",
            plateImage: "/elearning.webp",
            icon: (
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 shadow-lg shadow-emerald-600/10 overflow-hidden border border-slate-100">
                    <img
                        src="/elearning.webp"
                        alt="eLearning Platform Suite"
                        className="w-full h-full object-cover"
                    />
                </div>
            ),
            inside: [
                "Learning Management System (LMS)",
                "Simulation-based learning",
                "STEM education",
                "Language labs",
                "Community learning tools"
            ]
        },
        {
            title: "Cyber Security Suite",
            tags: ["Security", "Compliance"],
            description: "End-to-end cyber security solutions focused on protection, monitoring, and resilience.",
            color: "rose",
            plateImage: "/cyber security.webp",
            icon: (
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 shadow-lg shadow-rose-600/10 overflow-hidden border border-slate-100">
                    <img
                        src="/cyber security.webp"
                        alt="Cyber Security Suite"
                        className="w-full h-full object-cover"
                    />
                </div>
            ),
            inside: [
                "Threat intelligence",
                "Phishing protection",
                "Security Operations (SOC)",
                "Compliance (ISO, HIPAA, GDPR)",
                "24×7 monitoring"
            ]
        },
        {
            title: "KL Eats",
            tags: ["Products", "Platforms"],
            description: "A full-stack digital food ordering and management platform for campuses and institutions.",
            color: "indigo",
            plateImage: "/kleats.webp",
            icon: (
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 shadow-lg shadow-indigo-600/10 overflow-hidden border border-slate-100">
                    <img
                        src="/kleats.webp"
                        alt="KL Eats"
                        className="w-full h-full object-cover"
                    />
                </div>
            ),
            inside: [
                "Web & mobile ordering",
                "Smart kiosks",
                "Admin dashboard",
                "POS system",
                "Telegram admin bot",
                "Payments & finance analytics"
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1] as any
            }
        }
    };

    return (
        <section className="relative py-24 sm:py-32 overflow-hidden bg-white" id="products">
            <div className="absolute inset-0 z-0">
                <SectionBackground />
            </div>

            {/* Background SVG Decoration */}
            <div className="absolute right-0 bottom-0 w-[500px] h-[500px] opacity-[0.015] pointer-events-none translate-x-1/4 translate-y-1/4 -rotate-12 z-10">
                <ModularBlocksSVG />
            </div>
            <div className="absolute left-1/2 top-0 w-[400px] h-[400px] opacity-[0.01] pointer-events-none -translate-x-1/2 -translate-y-1/2 rotate-12 z-10">
                <ModularBlocksSVG />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                {/* Header */}
                <div className="max-w-3xl mb-16 sm:mb-20 flex items-end gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex-grow"
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                            Our Products & Accelerators
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed font-medium">
                            Platforms and accelerators designed to solve real-world problems at scale.
                        </p>
                    </motion.div>
                </div>

                {/* Products Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start"
                >
                    {products.map((product, index) => {
                        const isExpanded = expandedIndex === index;

                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                className={`bg-white/65 backdrop-blur-lg p-8 rounded-2xl border transition-all duration-300 flex flex-col h-full relative overflow-hidden group ${isExpanded ? 'border-slate-300 shadow-sm' : 'border-slate-200 hover:border-slate-300'
                                    }`}
                            >
                                {/* Product Preview Plate */}
                                <div className="h-48 -mx-8 -mt-8 mb-8 bg-slate-100 border-b border-slate-200 flex items-center justify-center relative overflow-hidden group-hover:bg-slate-200 transition-colors">
                                    {(product as any).plateImage ? (
                                        <img
                                            src={(product as any).plateImage}
                                            alt={product.title}
                                            className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                        />
                                    ) : (
                                        <>
                                            <div className="absolute inset-0 opacity-[0.03]">
                                                <svg width="100%" height="100%">
                                                    <pattern id={`pattern-${index}`} width="20" height="20" patternUnits="userSpaceOnUse">
                                                        <circle cx="2" cy="2" r="1" fill="currentColor" />
                                                    </pattern>
                                                    <rect width="100%" height="100%" fill={`url(#pattern-${index})`} className="text-slate-900" />
                                                </svg>
                                            </div>
                                            <div className="transform scale-150 relative z-10 transition-transform duration-500 group-hover:scale-[1.6]">
                                                {product.icon}
                                            </div>
                                        </>
                                    )}
                                </div>

                                <div className="flex justify-end items-start mb-6 relative z-20">
                                    {product.title === "KL Eats" && (
                                        <span className="bg-indigo-600 text-white text-[10px] font-black uppercase tracking-tighter px-2.5 py-1 rounded-md shadow-sm border border-white/20">
                                            Flagship
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-20">
                                    {product.title}
                                </h3>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6 relative z-20">
                                    {product.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider border border-slate-100 bg-slate-50/50 text-slate-600"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-slate-600 leading-relaxed text-sm mb-6 relative z-20">
                                    {product.description}
                                </p>

                                <button
                                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                                    className="flex items-center gap-2 text-slate-900 text-sm font-bold hover:gap-3 transition-all w-fit relative z-20"
                                >
                                    What's inside
                                    <svg
                                        className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden relative z-20"
                                        >
                                            <div className="pt-6 mt-6 border-t border-slate-100">
                                                <ul className="space-y-2">
                                                    {product.inside.map((item, itemIndex) => (
                                                        <li key={itemIndex} className="text-sm text-slate-600 flex items-start gap-2">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-900/40 mt-1.5 flex-shrink-0" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default ProductsSection;
