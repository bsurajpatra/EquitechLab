const Footer = () => {
    return (
        <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 mb-16">
                    {/* Column 1: Brand & Description */}
                    <div className="md:col-span-5">
                        <div className="flex items-center gap-3 mb-6">
                            <img
                                src="/logo.png"
                                alt="Equitech"
                                className="h-20 w-auto"
                                onError={(e) => {
                                    (e.target as any).style.display = 'none';
                                    (e.target as any).nextSibling.style.display = 'block';
                                }}
                            />
                            <span className="hidden text-xl font-bold text-slate-900 tracking-tight">
                                Equitech
                            </span>
                        </div>
                        <p className="text-slate-600 text-[15px] leading-relaxed max-w-sm">
                            Equitech Lab is a technology innovation lab building intelligent platforms and real-world digital systems.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="md:col-span-3">
                        <h4 className="text-slate-900 font-medium text-sm mb-6">Explore</h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="#" className="text-slate-700 hover:text-blue-900 text-sm transition-colors">Portfolio</a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-700 hover:text-blue-900 text-sm transition-colors">Products</a>
                            </li>
                            <li>
                                <a href="#case-studies" className="text-slate-700 hover:text-blue-900 text-sm transition-colors">Case Studies</a>
                            </li>
                            <li>
                                <a href="#contact" className="text-slate-700 hover:text-blue-900 text-sm transition-colors">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Connect */}
                    <div className="md:col-span-4">
                        <h4 className="text-slate-900 font-medium text-sm mb-6">Connect</h4>
                        <ul className="space-y-6">
                            <li className="group flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-0.5">Email</span>
                                    <a href="mailto:contact@equitechlab.com" className="text-[13px] font-bold text-slate-700 hover:text-blue-900 transition-colors">contact@equitechlab.com</a>
                                </div>
                            </li>
                            <li className="group flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-0.5">LinkedIn</span>
                                    <a href="https://www.linkedin.com/company/equitechlab/" target="_blank" rel="noopener noreferrer" className="text-[13px] font-bold text-slate-700 hover:text-blue-900 transition-colors">Equitech Lab</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-200 text-center">
                    <p className="text-slate-500 text-[11px] font-medium tracking-wide">
                        &copy; 2026 Equitech Lab Pvt. Ltd. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
