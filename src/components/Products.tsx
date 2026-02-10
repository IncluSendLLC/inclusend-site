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
    gradient: "from-[#0c2340] to-[#1e3a5f]",
    href: "#contact",
    external: false,
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
    gradient: "from-[#1e3a5f] to-blue-500",
    href: "https://chromewebstore.google.com/detail/gmail-accessibility-check/jijphdmhcgjjnpfmkleblagcpfbpelao?hl=en",
    external: true,
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-[#0c2340] uppercase tracking-widest mb-3">
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
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-6 shadow-lg shadow-[#0c2340]/20`}
              >
                <product.icon size={26} className="text-white" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {product.name}
              </h3>
              <p className="text-sm font-medium text-[#1e3a5f] mt-1">
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
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0c2340] shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-8">
                <a
                  href={product.href}
                  {...(product.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0c2340] hover:text-[#1e3a5f] group/link transition-colors"
                >
                  {product.external ? "Get it now" : "Learn more"}
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
