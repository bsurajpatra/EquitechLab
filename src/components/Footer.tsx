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
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <div className="text-blue-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                    </svg>
                                </div>
                                <span className="text-slate-700 text-sm">contact@equitechlabs.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <a href="#" className="flex items-center gap-3 group">
                                    <div className="text-blue-900 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
                                        </svg>
                                    </div>
                                    <span className="text-slate-700 group-hover:text-blue-900 text-sm transition-colors">LinkedIn</span>
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <a href="#" className="flex items-center gap-3 group">
                                    <div className="text-blue-900 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" />
                                        </svg>
                                    </div>
                                    <span className="text-slate-700 group-hover:text-blue-900 text-sm transition-colors">GitHub</span>
                                </a>
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
