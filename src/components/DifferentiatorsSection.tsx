import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ModularBlocksSVG from './hero/ModularBlocksSVG';
import SectionBackground from './shared/SectionBackground';

interface Principle {
    title: string;
    explanation: string;
    icon: React.ReactNode;
}

const DifferentiatorsSection = () => {
    const [selectedPrinciple, setSelectedPrinciple] = useState<Principle | null>(null);

    const principles: Principle[] = [
        {
            title: "Engineering-First",
            explanation: "We prioritize system design, scalability, and long-term maintainability.",
            icon: (
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shadow-sm border border-blue-100">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                </div>
            )
        },
        {
            title: "Product & Platform Thinking",
            explanation: "We build extensible platforms, not one-off project solutions.",
            icon: (
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shadow-sm border border-emerald-100">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                </div>
            )
        },
        {
            title: "Open-Source & Community",
            explanation: "We actively engage with open ecosystems and developer communities.",
            icon: (
                <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600 shadow-sm border border-rose-100">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </div>
            )
        },
        {
            title: "Research & Academia Integration",
            explanation: "We bridge academic research with applied, real-world systems.",
            icon: (
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 shadow-sm border border-amber-100">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.254.477 4.5 1.253v13C19.746 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                </div>
            )
        },
        {
            title: "Real-World Deployment Focus",
            explanation: "Our systems are designed for real constraints and long-term operation.",
            icon: (
                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shadow-sm border border-indigo-100">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9h18" />
                    </svg>
                </div>
            )
        }
    ];

    return (
        <section className="relative py-24 sm:py-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden" id="principles">
            <div className="absolute inset-0 z-0">
                <SectionBackground />
            </div>

            {/* Background SVG Decoration */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.03] pointer-events-none rotate-12 translate-x-1/4 z-10">
                <ModularBlocksSVG />
            </div>
            <div className="absolute left-0 top-0 w-[400px] h-[400px] opacity-[0.02] pointer-events-none -rotate-12 -translate-x-1/4 z-10">
                <ModularBlocksSVG />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 sm:mb-24"
                >
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Our Principles
                    </h2>
                </motion.div>

                {/* Principles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {principles.map((principle, index) => (
                        <PrincipleCard
                            key={index}
                            principle={principle}
                            index={index}
                            onMobileTap={() => setSelectedPrinciple(principle)}
                        />
                    ))}
                </div>
            </div>

            {/* Mobile Modal */}
            <AnimatePresence>
                {selectedPrinciple && (
                    <div
                        className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/40 backdrop-blur-sm lg:hidden"
                        onClick={() => setSelectedPrinciple(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full max-w-sm bg-white rounded-2xl p-8 shadow-2xl border border-slate-100"
                        >
                            <div className="text-blue-900 mb-6 group-hover:scale-110 transition-transform">
                                {selectedPrinciple.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
                                {selectedPrinciple.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed font-medium">
                                {selectedPrinciple.explanation}
                            </p>
                            <button
                                onClick={() => setSelectedPrinciple(null)}
                                className="mt-8 w-full py-3 bg-slate-900 text-white rounded-xl font-bold text-sm tracking-wide"
                            >
                                Close
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

const PrincipleCard = ({ principle, index, onMobileTap }: { principle: Principle; index: number; onMobileTap: () => void }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
            }}
            className="group relative h-64 [perspective:1000px]"
            onClick={() => {
                if (window.innerWidth < 1024) onMobileTap();
            }}
        >
            <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] cursor-default">
                {/* Front Face */}
                <div className="absolute inset-0 h-full w-full rounded-2xl border border-slate-200 bg-white p-8 [backface-visibility:hidden] flex flex-col items-center justify-center text-center gap-6">
                    <div className="text-blue-900 opacity-60 group-hover:opacity-100 transition-opacity">
                        {principle.icon}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 tracking-tight leading-tight">
                        {principle.title}
                    </h3>
                </div>

                {/* Back Face */}
                <div className="absolute inset-0 h-full w-full rounded-2xl border border-slate-200 bg-white p-8 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col items-center justify-center text-center gap-4 shadow-sm">
                    <h3 className="text-sm font-black uppercase tracking-widest text-blue-900">
                        {principle.title}
                    </h3>
                    <p className="text-sm text-slate-600 font-medium leading-relaxed">
                        {principle.explanation}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default DifferentiatorsSection;
