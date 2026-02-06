import { Brain, MailCheck, ArrowUpRight } from "lucide-react";

const products = [
  {
    name: "ADAPT",
    tagline: "AI-Driven Accommodation Prompt Tool",
    description:
      "A comprehensive system that combines web applications with student database functionality to generate personalized accommodations using artificial intelligence. ADAPT streamlines the accommodation process so educators can focus on what matters most — teaching.",
    features: [
      "AI-generated personalized accommodations",
      "Integrated student database",
      "Real-time collaboration tools",
      "Data-driven insights & reporting",
    ],
    icon: Brain,
    gradient: "from-teal-500 to-emerald-500",
    bgGlow: "bg-teal-500/10",
  },
  {
    name: "Gmail Accessibility Checker",
    tagline: "Chrome Extension for Accessible Emails",
    description:
      "A powerful Chrome extension that evaluates your emails in real-time against WCAG 2.1 AA standards during composition. Get instant remediation suggestions to ensure every message you send is accessible to all recipients.",
    features: [
      "Real-time WCAG 2.1 AA evaluation",
      "In-line remediation suggestions",
      "Seamless Gmail integration",
      "One-click accessibility fixes",
    ],
    icon: MailCheck,
    gradient: "from-blue-500 to-teal-500",
    bgGlow: "bg-blue-500/10",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-widest mb-3">
            Our Products
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Powerful tools for inclusive education
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Purpose-built solutions that bring accessibility and accommodation
            into every corner of the learning experience.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="group relative rounded-2xl border border-slate-200/80 bg-white p-8 md:p-10 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-6 shadow-lg shadow-teal-500/20`}
              >
                <product.icon size={26} className="text-white" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {product.name}
              </h3>
              <p className="text-sm font-medium text-teal-600 mt-1">
                {product.tagline}
              </p>
              <p className="mt-4 text-slate-500 leading-relaxed">
                {product.description}
              </p>

              {/* Features List */}
              <ul className="mt-6 space-y-2.5">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-slate-600"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 hover:text-teal-700 group/link transition-colors"
                >
                  Learn more
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
