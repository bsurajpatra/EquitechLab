const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <img
                            src="/logo.png"
                            alt="Equitech Lab Logo"
                            className="h-12 w-auto"
                        />
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#capabilities" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
                            Portfolio
                        </a>
                        <a href="#products" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
                            Products
                        </a>
                        <a href="#case-studies" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
                            Case Studies
                        </a>
                        <a href="#contact" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
                            Contact
                        </a>
                    </div>

                    {/* CTA Button */}
                    <div className="flex items-center">
                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-semibold rounded-lg text-white bg-blue-900 hover:bg-blue-800 transition-colors"
                        >
                            Partner with Us
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
