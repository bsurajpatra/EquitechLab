import ModularBlocksSVG from './hero/ModularBlocksSVG';
import SectionBackground from './shared/SectionBackground';

const HeroSection = () => {
    return (
        <section className="relative overflow-hidden bg-white pt-8 pb-24 md:pt-12 md:pb-32">
            <div className="absolute inset-0 z-0">
                <SectionBackground />
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">

                    {/* Left Column: Text Content */}
                    <div className="flex-1 text-center md:text-left z-10">
                        <span className="inline-block text-sm font-semibold tracking-widest text-blue-900 uppercase mb-4">
                            Technology & Innovation Lab
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                            Building Intelligent Systems for <span className="text-blue-900">Real-World Impact</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mb-10">
                            Equitech Lab designs and builds AI-powered platforms, secure digital infrastructure, and scalable products for institutions, enterprises, and communities.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                            <button
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="w-full sm:w-auto px-8 py-4 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/10"
                            >
                                Partner with Us
                            </button>
                            <button
                                onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
                                className="w-full sm:w-auto px-8 py-4 text-slate-700 font-semibold flex items-center justify-center gap-2 hover:text-blue-900 transition-colors group"
                            >
                                View Our Work
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Modular Blocks SVG */}
                    <div className="hidden md:flex flex-1 w-full max-w-lg md:max-w-none relative justify-center items-center opacity-20 md:opacity-100 translate-y-8 md:translate-y-0">
                        <div className="relative w-full aspect-square max-w-[450px]">
                            <ModularBlocksSVG />

                            {/* Decorative background elements */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-slate-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animate-delay-2000"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
