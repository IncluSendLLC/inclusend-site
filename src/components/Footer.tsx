export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center">
                <span className="text-white font-bold text-sm">I</span>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Inclu<span className="text-teal-400">Send</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Educational technology solutions focused on accessibility and
              accommodation for every learner.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "#hero" },
                { label: "Products", href: "#products" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-teal-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:info@inclusend.com"
                  className="hover:text-teal-400 transition-colors"
                >
                  info@inclusend.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+19702810510"
                  className="hover:text-teal-400 transition-colors"
                >
                  (970) 281-0510
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs">
            &copy; {year} IncluSend LLC. All rights reserved.
          </p>
          <p className="text-xs">
            Built with accessibility in mind.
          </p>
        </div>
      </div>
    </footer>
  );
}
