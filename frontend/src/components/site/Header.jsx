import React, { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { HEADER_LINKS } from "../../data/mockData";

const today = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
}).format(new Date());

export const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <header
            data-testid="site-header"
            className="sticky top-0 z-40 bg-paper border-b border-ink/15"
        >
            {/* Top meta strip */}
            <div className="hidden md:flex items-center justify-between px-8 py-3 border-b border-ink/10">
                <span
                    data-testid="header-date"
                    className="font-mono text-[11px] uppercase tracking-[0.22em] text-graphite"
                >
                    {today} · Issue N°04
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-graphite">
                    A dispatch for the location-independent
                </span>
                <div className="flex items-center gap-6">
                    <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-graphite">
                        UTC · Anywhere
                    </span>
                    <button
                        data-testid="header-search-button"
                        aria-label="Search"
                        className="text-ink hover:text-terracotta transition-colors duration-300"
                    >
                        <Search size={16} strokeWidth={1.4} />
                    </button>
                </div>
            </div>

            {/* Masthead */}
            <div className="flex items-center justify-between px-6 sm:px-8 py-6">
                <a
                    href="#top"
                    data-testid="site-logo"
                    className="flex items-baseline gap-3 group"
                >
                    <span className="font-serif text-3xl sm:text-4xl leading-none tracking-tight text-ink group-hover:text-terracotta transition-colors duration-300">
                        Meridian
                    </span>
                    <span className="hidden sm:inline font-mono text-[10px] uppercase tracking-[0.28em] text-graphite">
                        / a coworking dispatch
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
                            className="editorial-link font-mono text-[11px] uppercase tracking-[0.22em] text-ink"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <a
                        href="#subscribe"
                        data-testid="header-subscribe-cta"
                        className="hidden md:inline-flex items-center px-5 py-2 border border-ink bg-ink text-paper font-mono text-[11px] uppercase tracking-[0.22em] hover:bg-paper hover:text-ink transition-colors duration-300"
                    >
                        Subscribe · $6/mo
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

            {/* Mobile menu */}
            {open && (
                <div
                    data-testid="mobile-menu"
                    className="lg:hidden border-t border-ink/15 px-6 py-6 bg-paper"
                >
                    <ul className="flex flex-col gap-5">
                        {HEADER_LINKS.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className="font-mono text-xs uppercase tracking-[0.22em] text-ink hover:text-terracotta"
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
                                className="inline-block mt-2 px-5 py-2 border border-ink bg-ink text-paper font-mono text-[11px] uppercase tracking-[0.22em]"
                            >
                                Subscribe · $6/mo
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
