import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionBackground from './shared/SectionBackground';
import ModularBlocksSVG from './hero/ModularBlocksSVG';

const ProductsSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const products = [
        {
            title: "Smart Digital Networks",
            tags: ["Infrastructure", "Connectivity"],
            description: "Digital infrastructure platforms enabling smart connectivity and community-scale networks.",
            color: "blue",
            plateImage: "/digital networks.webp",
            icon: (
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 shadow-lg shadow-blue-600/10 overflow-hidden border border-slate-100">
                    <img src="/digital networks.webp" alt="Smart Digital Networks" className="w-full h-full object-cover" />
                </div>
            ),
            inside: ["AI in a Box", "Digital Library", "Internet to last mile", "Community digital infrastructure"]
        },
        {
            title: "eLearning Platform Suite",
            tags: ["Education", "Platforms"],
            description: "A comprehensive learning ecosystem combining LMS, simulations, and digital education tools.",
            color: "emerald",
            plateImage: "/elearning.webp",
            icon: (
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 shadow-lg shadow-emerald-600/10 overflow-hidden border border-slate-100">
                    <img src="/elearning.webp" alt="eLearning Platform Suite" className="w-full h-full object-cover" />
                </div>
            ),
            inside: ["LMS", "Simulations", "STEM", "Language labs"]
        },
        {
            title: "Cyber Security Suite",
            tags: ["Security", "Compliance"],
            description: "End-to-end cyber security solutions focused on protection, monitoring, and resilience.",
            color: "rose",
            plateImage: "/cyber security.webp",
            icon: (
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 shadow-lg shadow-rose-600/10 overflow-hidden border border-slate-100">
                    <img src="/cyber security.webp" alt="Cyber Security Suite" className="w-full h-full object-cover" />
                </div>
            ),
            inside: ["Threat intelligence", "Phishing protection", "SOC Monitoring"]
        },
        {
            title: "KL Eats",
            tags: ["Products", "Platforms"],
            description: "A full-stack digital food ordering and management platform for campuses and institutions.",
            color: "indigo",
            plateImage: "/kleats.webp",
            icon: (
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 shadow-lg shadow-indigo-600/10 overflow-hidden border border-slate-100">
                    <img src="/kleats.webp" alt="KL Eats" className="w-full h-full object-cover" />
                </div>
            ),
            inside: ["Mobile ordering", "Kiosks", "Admin dashboard", "Finance analytics"]
        }
    ];

    const nextSlide = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % products.length);
    }, [products.length]);

    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(nextSlide, 4000);
        return () => clearInterval(interval);
    }, [isAutoPlaying, nextSlide]);

    return (
        <section className="relative py-24 sm:py-32 overflow-hidden bg-white" id="products">
            <div className="absolute inset-0 z-0 text-slate-100">
                <SectionBackground />
            </div>

            {/* Background SVG Decoration */}
            <div className="absolute right-0 bottom-0 w-[500px] h-[500px] opacity-[0.015] pointer-events-none translate-x-1/4 translate-y-1/4 -rotate-12 z-10 text-slate-900">
                <ModularBlocksSVG />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                {/* Header */}
                <div className="max-w-3xl mb-16 sm:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
                            Products & Accelerators
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed font-medium">
                            Premium scaleable products designed for global impact and seamless functionality.
                        </p>
                    </motion.div>
                </div>

                {/* 3D Carousel Container */}
                <div
                    className="relative px-0 md:px-20 h-[500px] flex items-center justify-center"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                >
                    <div className="relative w-full h-full flex items-center justify-center overflow-visible">
                        {products.map((product, index) => {
                            // Calculate relative position and distance
                            let offset = index - activeIndex;

                            // Handling wrap-around for circular feel
                            if (offset < -Math.floor(products.length / 2)) offset += products.length;
                            if (offset > Math.floor(products.length / 2)) offset -= products.length;

                            const isActive = offset === 0;
                            const absOffset = Math.abs(offset);
                            const isVisible = absOffset <= 1;

                            return (
                                <motion.div
                                    key={index}
                                    initial={false}
                                    animate={{
                                        x: offset * 320, // Horizontal spread
                                        scale: isActive ? 1.15 : 0.85,
                                        zIndex: 10 - absOffset,
                                        opacity: isVisible ? 1 : 0,
                                        rotateY: offset * -15, // Perspective rotation
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 20
                                    }}
                                    className="absolute w-[320px] md:w-[420px] h-[450px] cursor-pointer"
                                    onClick={() => setActiveIndex(index)}
                                >
                                    <div className={`
                                        w-full h-full rounded-[3rem] bg-white border border-slate-100 shadow-2xl transition-all duration-500 overflow-hidden
                                        ${isActive ? 'shadow-slate-200/50' : 'grayscale opacity-60'}
                                    `}>
                                        {/* Image Box */}
                                        <div className="h-60 relative overflow-hidden">
                                            <img
                                                src={product.plateImage}
                                                alt={product.title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                        </div>

                                        {/* Content Box */}
                                        <div className="p-8">
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {product.tags.map((tag, tIdx) => (
                                                    <span key={tIdx} className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                                {product.title}
                                            </h3>
                                            <p className="text-sm text-slate-600 line-clamp-2 font-medium">
                                                {product.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Progress Indicators */}
                <div className="flex justify-center gap-3 mt-12">
                    {products.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`h-1 transition-all duration-500 rounded-full ${index === activeIndex ? 'w-12 bg-slate-900' : 'w-4 bg-slate-200 hover:bg-slate-300'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;

