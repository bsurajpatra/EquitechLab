import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ModularBlocksSVG from './hero/ModularBlocksSVG';
import SectionBackground from './shared/SectionBackground';

interface CaseStudy {
    id: string;
    title: string;
    emoji: string;
    shortDesc: string;
    context: string;
    overview: string;
    components: string[];
    focus: string;
}

const CaseStudiesSection = () => {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    useEffect(() => {
        if (selectedId) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
        return () => document.body.classList.remove('modal-open');
    }, [selectedId]);

    const studies: CaseStudy[] = [
        {
            id: 'kleats',
            title: "KL Eats",
            emoji: "🍱",
            shortDesc: "Full-stack campus dining & ordering platform.",
            context: "Manual campus dining leads to high wait times and poor operational oversight.",
            overview: "A unified digital platform for end-to-end food services and payments.",
            components: [
                "Web & mobile ordering apps",
                "Smart self-service kiosks",
                "Real-time admin dashboard",
                "Integrated payment processing"
            ],
            focus: "Seamless campus-wide deployment and high-volume transaction management."
        },
        {
            id: 'networks',
            title: "Smart Digital Networks",
            emoji: "📡",
            shortDesc: "Community-scale infrastructure and connectivity.",
            context: "Limited last-mile connectivity and digital access in remote communities.",
            overview: "Infrastructure platforms that bridge the digital divide through smart networks.",
            components: [
                "AI-in-a-Box processing units",
                "Smart digital libraries",
                "Last-mile connectivity hubs",
                "Real-time communication services"
            ],
            focus: "Expanding reliable digital infrastructure to underserved regions."
        },
        {
            id: 'elearning',
            title: "eLearning Platform Suite",
            emoji: "🎓",
            shortDesc: "Modular experiential learning ecosystem.",
            context: "Traditional LMS tools lack engagement and support for experiential STEM education.",
            overview: "A modular suite for digital, interactive, and community-driven learning.",
            components: [
                "Next-gen LMS architecture",
                "Interactive simulation modules",
                "Integrated STEM toolkits",
                "Language learning platforms"
            ],
            focus: "Supporting institutions with flexible, scalable education technology."
        },
        {
            id: 'cyber',
            title: "Cyber Security Suite",
            emoji: "🛡️",
            shortDesc: "Resilient protection and compliance platforms.",
            context: "Increasingly complex threat landscapes and stringent compliance requirements.",
            overview: "Advanced security platforms focused on monitoring and operational resilience.",
            components: [
                "Threat intelligence engines",
                "Phishing simulation & protection",
                "Security Operations (SOC) stacks",
                "Automated compliance monitoring"
            ],
            focus: "Ensuring 24/7 system reliability and proactive threat mitigation."
        }
    ];

    return (
        <section className="relative py-24 sm:py-32 bg-white overflow-hidden" id="case-studies">
            <div className="absolute inset-0 z-0">
                <SectionBackground />
            </div>

            {/* Background SVG Decoration */}
            <div className="absolute right-0 bottom-0 w-[600px] h-[600px] opacity-[0.02] pointer-events-none -translate-x-1/4 translate-y-1/4 rotate-12 z-10">
                <ModularBlocksSVG />
            </div>
            <div className="absolute left-0 top-0 w-[400px] h-[400px] opacity-[0.015] pointer-events-none translate-x-1/4 -translate-y-1/4 -rotate-12 z-10">
                <ModularBlocksSVG />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                {/* Header */}
                <div className="max-w-3xl mb-16 px-4">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                        Case Studies
                    </h2>
                    <p className="text-lg text-slate-600 font-medium leading-relaxed">
                        Explore our real-world deployments through technical system breakdowns.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                    {studies.map((study) => (
                        <div
                            key={study.id}
                            className="relative group"
                        >
                            {/* Card Body */}
                            <motion.div
                                className="h-full p-8 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-3xl transition-all flex flex-col items-center text-center"
                            >
                                <div className="w-20 h-20 rounded-2xl bg-slate-50 border border-slate-100 mb-8 flex items-center justify-center text-5xl shadow-sm transition-transform group-hover:scale-110 duration-500">
                                    {study.emoji}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">
                                    {study.title}
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed mb-8 flex-grow">
                                    {study.shortDesc}
                                </p>

                                <button
                                    onClick={() => setSelectedId(study.id)}
                                    className="w-full py-3 px-4 bg-slate-50 hover:bg-blue-900 hover:text-white border border-slate-200 rounded-xl text-sm font-bold text-slate-900 transition-all flex items-center justify-center gap-2"
                                >
                                    View Breakdown
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </motion.div>
                        </div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedId && (
                        <div
                            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/40 backdrop-blur-xl"
                            onClick={() => setSelectedId(null)}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                onClick={(e) => e.stopPropagation()}
                                className="w-full max-w-3xl bg-white rounded-[24px] overflow-hidden shadow-[0_32px_128px_-16px_rgba(0,0,0,0.3)] relative flex flex-col md:flex-row h-[85vh] md:h-auto max-h-[580px]"
                            >
                                {/* Left Visual Panel */}
                                <div className="hidden md:flex w-[32%] bg-blue-900 relative items-center justify-center p-8 overflow-hidden">
                                    <div className="absolute inset-0 opacity-10">
                                        <ModularBlocksSVG />
                                    </div>
                                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-800 to-slate-900 opacity-50" />

                                    <div className="relative z-10 text-center">
                                        <motion.div
                                            initial={{ scale: 0.5, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            className="text-7xl mb-4 select-none filter drop-shadow-2xl"
                                        >
                                            {studies.find(s => s.id === selectedId)?.emoji}
                                        </motion.div>
                                        <h3 className="text-xl font-black text-white tracking-tighter mb-3 leading-tight px-4">
                                            {studies.find(s => s.id === selectedId)?.title}
                                        </h3>
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-[9px] tracking-widest uppercase">
                                            Case Analysis v1.0
                                        </div>
                                    </div>
                                </div>

                                {/* Right Content Area */}
                                <div className="flex-1 flex flex-col bg-slate-50/50 relative">
                                    {/* Close Button Pin */}
                                    <button
                                        onClick={() => setSelectedId(null)}
                                        className="absolute top-8 right-8 z-30 p-2 rounded-full bg-white border border-slate-100 hover:bg-slate-900 hover:text-white transition-all shadow-sm"
                                    >
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>

                                    <div className="flex-1 overflow-y-auto p-6 sm:p-8">
                                        {/* Mobile Header (Hidden on Desktop) */}
                                        <div className="md:hidden flex items-center gap-4 mb-8">
                                            <div className="text-5xl">{studies.find(s => s.id === selectedId)?.emoji}</div>
                                            <h3 className="text-2xl font-black text-slate-900 tracking-tighter leading-tight">
                                                {studies.find(s => s.id === selectedId)?.title}
                                            </h3>
                                        </div>

                                        <div className="space-y-8">
                                            {/* Top Row: Context & Focus */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm transition-all hover:border-blue-900/10">
                                                    <h4 className="text-[9px] font-black uppercase tracking-widest text-blue-900 mb-2 opacity-50">Discovery Context</h4>
                                                    <p className="text-[13px] text-slate-700 font-medium leading-relaxed">{studies.find(s => s.id === selectedId)?.context}</p>
                                                </div>
                                                <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm transition-all hover:border-blue-900/10">
                                                    <h4 className="text-[9px] font-black uppercase tracking-widest text-blue-900 mb-2 opacity-50">Deployment Goal</h4>
                                                    <p className="text-[13px] text-slate-700 font-medium leading-relaxed">{studies.find(s => s.id === selectedId)?.focus}</p>
                                                </div>
                                            </div>

                                            {/* System Overview */}
                                            <div className="p-6 rounded-2xl bg-blue-900 text-white shadow-xl shadow-blue-900/10 relative overflow-hidden group">
                                                <div className="absolute right-0 bottom-0 opacity-10 -translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-700">
                                                    <ModularBlocksSVG />
                                                </div>
                                                <h4 className="text-[9px] font-black uppercase tracking-widest text-white/50 mb-3 relative z-10">Architectural Solution</h4>
                                                <p className="text-[15px] font-bold leading-relaxed relative z-10">{studies.find(s => s.id === selectedId)?.overview}</p>
                                            </div>

                                            {/* Detailed Components Grid */}
                                            <div className="px-4">
                                                <h4 className="text-[9px] font-black uppercase tracking-widest text-blue-900 mb-4 opacity-50">System Implementation Delta</h4>
                                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3">
                                                    {studies.find(s => s.id === selectedId)?.components.map((comp, idx) => (
                                                        <motion.li
                                                            key={comp}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: 0.1 * idx }}
                                                            className="text-[12px] text-slate-600 flex items-center gap-3 group/li"
                                                        >
                                                            <span className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center text-[9px] font-black text-blue-600 transition-colors group-hover/li:bg-blue-600 group-hover/li:text-white">
                                                                {(idx + 1).toString().padStart(2, '0')}
                                                            </span>
                                                            <span className="font-medium group-hover/li:text-blue-900 transition-colors">{comp}</span>
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Bar */}
                                    <div className="p-6 bg-white border-t border-slate-100 flex items-center justify-between">
                                        <div className="hidden sm:flex items-center gap-6 grayscale opacity-30">
                                            {/* Logo indicators */}
                                            <svg className="h-5 w-auto" fill="none" viewBox="0 0 100 24" stroke="currentColor"><path d="M10 12h80" strokeWidth="2" strokeDasharray="4 4" /></svg>
                                        </div>
                                        <button
                                            onClick={() => setSelectedId(null)}
                                            className="w-full sm:w-auto px-8 py-3 bg-slate-900 text-white rounded-xl font-black text-[10px] tracking-widest uppercase hover:bg-blue-900 hover:shadow-xl hover:shadow-blue-900/20 transition-all active:scale-95"
                                        >
                                            Dismiss Analysis
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default CaseStudiesSection;
