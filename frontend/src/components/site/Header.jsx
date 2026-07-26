import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { HEADER_LINKS } from "../../data/mockData";

export const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <header
            data-testid="site-header"
            className="sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b border-ink/5"
        >
            <div className="max-w-[1400px] mx-auto flex items-center justify-between px-5 sm:px-8 py-4">
                <a
                    href="#top"
                    data-testid="site-logo"
                    className="flex items-center gap-2 group"
                >
                    <span className="inline-block h-2.5 w-2.5 rounded-full bg-coral" />
                    <span className="text-xl font-semibold tracking-tight text-ink">
                        Meridian
                    </span>
                </a>

                <nav
                    data-testid="primary-nav"
                    className="hidden lg:flex items-center gap-9"
                >
                    {HEADER_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            data-testid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                            className="hover-underline text-[15px] text-graphite hover:text-ink transition-colors duration-200"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <a
                        href="#subscribe"
                        data-testid="header-subscribe-cta"
                        className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-ink text-white text-sm font-medium hover:bg-coral transition-colors duration-300"
                    >
                        Subscribe
                    </a>
                    <button
                        data-testid="header-menu-toggle"
                        aria-label={open ? "Close menu" : "Open menu"}
                        onClick={() => setOpen((v) => !v)}
                        className="lg:hidden text-ink"
                    >
                        {open ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {open && (
                <div
                    data-testid="mobile-menu"
                    className="lg:hidden border-t border-ink/5 px-6 py-6 bg-white"
                >
                    <ul className="flex flex-col gap-4">
                        {HEADER_LINKS.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className="text-base text-ink hover:text-coral transition-colors"
                                    data-testid={`mobile-nav-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href="#subscribe"
                                data-testid="mobile-subscribe-cta"
                                onClick={() => setOpen(false)}
                                className="inline-block mt-2 px-5 py-2.5 rounded-full bg-ink text-white text-sm font-medium"
                            >
                                Subscribe
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
