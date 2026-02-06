import { Mail, Phone, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div>
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-widest mb-3">
              Get in Touch
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Ready to make your content accessible?
            </h2>
            <p className="mt-6 text-lg text-slate-500 leading-relaxed">
              Whether you&apos;re interested in our products, have questions
              about accessibility, or want to explore a partnership — we&apos;d
              love to hear from you.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-teal-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium">Email</p>
                  <a
                    href="mailto:info@inclusend.com"
                    className="text-slate-900 font-medium hover:text-teal-600 transition-colors"
                  >
                    info@inclusend.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-teal-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium">Phone</p>
                  <a
                    href="tel:+19702810510"
                    className="text-slate-900 font-medium hover:text-teal-600 transition-colors"
                  >
                    (970) 281-0510
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-8 md:p-10">
            <form
              action={`mailto:info@inclusend.com`}
              method="POST"
              encType="text/plain"
            >
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all"
                    placeholder="Jane Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all"
                    placeholder="jane@school.edu"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-teal-600 rounded-xl hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/25 hover:shadow-teal-600/40"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
