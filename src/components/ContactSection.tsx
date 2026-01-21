import { motion } from 'framer-motion';
import ModularBlocksSVG from './hero/ModularBlocksSVG';
import SectionBackground from './shared/SectionBackground';

const ContactSection = () => {
    return (
        <section className="relative py-24 sm:py-32 bg-white overflow-hidden" id="contact">
            <div className="absolute inset-0 z-0">
                <SectionBackground />
            </div>

            {/* Background SVG Decoration */}
            <div className="absolute left-0 top-0 w-[500px] h-[500px] opacity-[0.02] pointer-events-none -translate-x-1/4 -translate-y-1/4 -rotate-12 z-10">
                <ModularBlocksSVG />
            </div>
            <div className="absolute right-0 bottom-0 w-[400px] h-[400px] opacity-[0.015] pointer-events-none translate-x-1/4 translate-y-1/4 rotate-12 z-10">
                <ModularBlocksSVG />
            </div>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Left Column: Text & Info */}
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
                            Let’s Build Something Meaningful
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed font-medium mb-12">
                            Whether you’re exploring a partnership, deploying a platform, or collaborating on research, we’d like to hear from you.
                        </p>

                        <ul className="space-y-6">
                            <li className="flex items-center gap-4 text-slate-700">
                                <div className="text-blue-900 flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="m16 13 5.223 3.482a2 2 0 0 1 .097 3.297l-2.417 1.934a2 2 0 0 1-2.858-.302l-1.14-1.425" />
                                        <path d="m8 13-5.223 3.482a2 2 0 0 0-.097 3.297l2.417 1.934a2 2 0 0 0 2.858-.302l1.14-1.425" />
                                        <path d="m12 11 4-4 4 4" />
                                        <path d="m12 11-4-4-4 4" />
                                        <path d="m12 4v7" />
                                    </svg>
                                </div>
                                <span className="font-semibold text-sm tracking-wide">Partnerships</span>
                            </li>
                            <li className="flex items-center gap-4 text-slate-700">
                                <div className="text-blue-900 flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                                        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                                        <path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3" />
                                        <path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5" />
                                    </svg>
                                </div>
                                <span className="font-semibold text-sm tracking-wide">Product deployments</span>
                            </li>
                            <li className="flex items-center gap-4 text-slate-700">
                                <div className="text-blue-900 flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                        <path d="M6 12v5c3 3 9 3 12 0v-5" />
                                    </svg>
                                </div>
                                <span className="font-semibold text-sm tracking-wide">Research & collaboration</span>
                            </li>
                        </ul>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="bg-slate-50/50 p-8 sm:p-10 rounded-3xl border border-slate-100">
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            {/* Name Field */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-900 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                            <circle cx="12" cy="7" r="4" />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Alex Rivera"
                                        className="block w-full pl-11 pr-4 py-3.5 bg-white border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-all text-sm font-medium"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-900 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect width="20" height="16" x="2" y="4" rx="2" />
                                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                        </svg>
                                    </div>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="alex@innovation-lab.org"
                                        className="block w-full pl-11 pr-4 py-3.5 bg-white border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-all text-sm font-medium"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Organization Field */}
                            <div>
                                <label htmlFor="organization" className="block text-sm font-bold text-slate-700 mb-2">Organization <span className="text-slate-400 font-normal">(Optional)</span></label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-900 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
                                            <path d="M9 22v-4h6v4" />
                                            <path d="M8 6h.01" />
                                            <path d="M16 6h.01" />
                                            <path d="M12 6h.01" />
                                            <path d="M12 10h.01" />
                                            <path d="M12 14h.01" />
                                            <path d="M16 10h.01" />
                                            <path d="M16 14h.01" />
                                            <path d="M8 10h.01" />
                                            <path d="M8 14h.01" />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        id="organization"
                                        name="organization"
                                        placeholder="Company or Research Lab"
                                        className="block w-full pl-11 pr-4 py-3.5 bg-white border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-all text-sm font-medium"
                                    />
                                </div>
                            </div>

                            {/* Message Field */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                                <div className="relative group">
                                    <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none text-slate-400 group-focus-within:text-blue-900 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                        </svg>
                                    </div>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        placeholder="How can we help you?"
                                        className="block w-full pl-11 pr-4 py-3.5 bg-white border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-all text-sm font-medium resize-none"
                                        required
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 px-6 bg-blue-900 hover:bg-slate-900 text-white rounded-xl font-black text-xs tracking-widest uppercase transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
                            >
                                Get in Touch
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="22" y1="2" x2="11" y2="13" />
                                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default ContactSection;
