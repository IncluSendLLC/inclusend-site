import { Target, Heart, Zap, Shield } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description:
      "We exist to break down barriers in education, ensuring every student has equal access to learning.",
  },
  {
    icon: Heart,
    title: "Inclusive by Design",
    description:
      "Accessibility isn't an afterthought — it's the foundation of every product we build.",
  },
  {
    icon: Zap,
    title: "AI-Powered",
    description:
      "We leverage cutting-edge AI to deliver personalized, scalable solutions for educators and students.",
  },
  {
    icon: Shield,
    title: "Standards-Compliant",
    description:
      "Our tools adhere to WCAG 2.1 AA and other recognized accessibility standards.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-widest mb-3">
              About IncluSend
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Technology that empowers{" "}
              <span className="text-teal-600">every</span> learner
            </h2>
            <p className="mt-6 text-lg text-slate-500 leading-relaxed">
              IncluSend LLC specializes in educational technology solutions
              focused on accessibility and accommodation. We believe that every
              student deserves tools designed with their needs in mind.
            </p>
            <p className="mt-4 text-lg text-slate-500 leading-relaxed">
              Our team combines expertise in education, accessibility, and
              artificial intelligence to create products that make a real
              difference in classrooms and beyond.
            </p>
          </div>

          {/* Right: Value Cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl bg-white p-6 border border-slate-200/80 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center mb-4">
                  <value.icon size={20} className="text-teal-600" />
                </div>
                <h3 className="font-semibold text-slate-900">{value.title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
