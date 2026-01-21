import { motion } from 'framer-motion';
import ModularBlocksSVG from './hero/ModularBlocksSVG';

const PartnerLogos = () => {
    const partners = [
        { name: "Partner Alpha", path: "M4 12h16M4 12l8-8m-8 8l8 8" }, // Mock paths for abstract logos
        { name: "Partner Beta", path: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" },
        { name: "Partner Gamma", path: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
        { name: "Partner Delta", path: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
        { name: "Partner Epsilon", path: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" }
    ];

    return (
        <section className="relative bg-white py-12 border-b border-slate-100 overflow-hidden">
            {/* Background SVG Decoration */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.015] pointer-events-none z-0">
                <ModularBlocksSVG />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <p className="text-center text-xs font-bold tracking-widest text-slate-400 uppercase mb-10">
                    Collaborating with Industry Leaders & Research Institutions
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:opacity-100 transition-all duration-500">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-3"
                        >
                            <svg className="w-8 h-8 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d={partner.path} />
                            </svg>
                            <span className="text-sm font-extrabold text-slate-900 tracking-tight whitespace-nowrap">
                                {partner.name.toUpperCase()}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnerLogos;
