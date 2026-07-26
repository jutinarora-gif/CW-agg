import React from "react";

export const Footer = () => {
    return (
        <footer
            data-testid="site-footer"
            className="bg-paper text-ink"
        >
            <div className="grid grid-cols-2 lg:grid-cols-12 border-b border-ink/15">
                <div className="col-span-2 lg:col-span-5 px-6 sm:px-10 lg:px-14 py-14 lg:border-r border-ink/15">
                    <span className="font-serif text-5xl leading-none tracking-tight">
                        Meridian
                    </span>
                    <p className="mt-4 max-w-md font-sans text-base font-light text-graphite leading-relaxed">
                        An independent editorial dispatch on coworking, cities,
                        and the borderless life. Published weekly from wherever
                        the light is best.
                    </p>
                </div>

                <div className="col-span-1 lg:col-span-2 px-6 sm:px-10 py-14 border-r border-ink/15">
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-graphite">
                        Sections
                    </span>
                    <ul className="mt-5 space-y-3 font-serif text-lg">
                        <li>
                            <a
                                href="#news"
                                className="editorial-link"
                                data-testid="footer-link-news"
                            >
                                Dispatches
                            </a>
                        </li>
                        <li>
                            <a
                                href="#cities"
                                className="editorial-link"
                                data-testid="footer-link-cities"
                            >
                                City Files
                            </a>
                        </li>
                        <li>
                            <a
                                href="#tips"
                                className="editorial-link"
                                data-testid="footer-link-tips"
                            >
                                Field Notes
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="col-span-1 lg:col-span-2 px-6 sm:px-10 py-14 lg:border-r border-ink/15">
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-graphite">
                        The Paper
                    </span>
                    <ul className="mt-5 space-y-3 font-serif text-lg">
                        <li>
                            <a href="#about" className="editorial-link">About</a>
                        </li>
                        <li>
                            <a href="#masthead" className="editorial-link">Masthead</a>
                        </li>
                        <li>
                            <a href="#letters" className="editorial-link">Letters</a>
                        </li>
                    </ul>
                </div>

                <div className="col-span-2 lg:col-span-3 px-6 sm:px-10 lg:px-14 py-14">
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-graphite">
                        Correspond
                    </span>
                    <ul className="mt-5 space-y-3 font-serif text-lg">
                        <li>letters@meridian.press</li>
                        <li>press@meridian.press</li>
                        <li>@meridian.dispatch</li>
                    </ul>
                </div>
            </div>

            <div className="px-6 sm:px-10 lg:px-14 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-graphite">
                    © 2026 Meridian Editions · All dispatches original
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-graphite">
                    Set in Cormorant Garamond & IBM Plex · Printed nowhere
                </span>
            </div>
        </footer>
    );
};

export default Footer;
