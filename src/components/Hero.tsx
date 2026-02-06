import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/40" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-200/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 mb-8">
            <Sparkles size={14} className="text-[#0c2340]" />
            <span className="text-sm font-medium text-[#0c2340]">
              AI-Powered Accessibility Solutions
            </span>
          </div>

          <h1 className="animate-fade-in-up animation-delay-200 text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1]">
            Making education{" "}
            <span className="bg-gradient-to-r from-[#0c2340] to-[#1e3a5f] bg-clip-text text-transparent">
              accessible
            </span>{" "}
            for every learner
          </h1>

          <p className="animate-fade-in-up animation-delay-400 mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
            IncluSend develops intelligent EdTech tools that help educators
            ensure digital content meets accessibility standards and provide
            personalized accommodations for students with diverse learning
            needs.
          </p>

          <div className="animate-fade-in-up animation-delay-600 mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-[#0c2340] rounded-full hover:bg-[#1e3a5f] transition-all shadow-lg shadow-[#0c2340]/25 hover:shadow-[#0c2340]/40"
            >
              Explore Our Products
              <ArrowRight size={18} />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-slate-700 bg-white rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
