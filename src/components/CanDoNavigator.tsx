import { Compass, BookOpen, MessageSquareText, FileText, ArrowRight, ExternalLink } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Instant Can Do Lookup",
    description:
      "Enter a student's proficiency score and immediately receive grade-appropriate descriptors across all domains and key uses.",
  },
  {
    icon: MessageSquareText,
    title: "AI Thought Partner",
    description:
      "Describe your lesson and receive scaffolds, sentence stems, and differentiation strategies grounded in WIDA.",
  },
  {
    icon: FileText,
    title: "Material Adaptation",
    description:
      "Upload existing materials and let AI adapt them to each student's proficiency level automatically.",
  },
];

export default function CanDoNavigator() {
  return (
    <section id="can-do-navigator" className="py-24 md:py-32 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Badge */}
        <div className="text-center mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 text-sm font-medium text-emerald-700">
            <Compass size={14} />
            Flagship Product
          </span>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Can Do Navigator
          </h2>
          <p className="mt-4 text-xl md:text-2xl font-medium text-[#0c2340]">
            Turn WIDA ACCESS Scores into Classroom Action
          </p>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed">
            Instant Can Do Descriptors, AI-generated scaffolds, and differentiated
            strategies — all grounded in your students&apos; real proficiency data.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative rounded-2xl border border-slate-200/80 bg-white p-8 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2d7fb8] to-[#609c42] flex items-center justify-center mb-5 shadow-lg shadow-[#2d7fb8]/20">
                <feature.icon size={22} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-slate-500 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Who It's For */}
        <div className="rounded-2xl bg-gradient-to-br from-[#0c2340] to-[#1e3a5f] p-8 md:p-12 text-white mb-14">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                Purpose-built for WIDA frameworks
              </h3>
              <p className="mt-4 text-blue-100 leading-relaxed">
                Whether you&apos;re an experienced ESL specialist or a content teacher
                with multilingual learners for the first time, Can Do Navigator
                makes WIDA frameworks immediately actionable. Our AI is purpose-built
                to interpret proficiency levels, key uses, and grade-band expectations.
              </p>
            </div>
            <div className="space-y-4">
              {[
                "From student selection to AI-powered strategies in seconds",
                "Scaffolds and sentence stems grounded in real proficiency data",
                "Works for ESL specialists and general education teachers alike",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                  <p className="text-blue-100 text-sm">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://candonav.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#0c2340] rounded-full hover:bg-[#1e3a5f] transition-all shadow-lg shadow-[#0c2340]/25 hover:shadow-[#0c2340]/40"
            >
              Start Free Trial
              <ArrowRight size={18} />
            </a>
            <a
              href="https://candonav.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-slate-700 bg-white rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all"
            >
              Visit candonav.app
              <ExternalLink size={16} />
            </a>
          </div>
          <p className="mt-4 text-sm text-slate-400">
            14-day free trial &middot; No credit card required
          </p>
        </div>
      </div>
    </section>
  );
}
