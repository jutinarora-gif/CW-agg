import React from "react";

export const Footer = () => {
    return (
        <footer data-testid="site-footer" className="bg-white border-t border-ink/8">
            <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="col-span-2 md:col-span-1">
                    <div className="flex items-center gap-2">
                        <span className="inline-block h-2.5 w-2.5 rounded-full bg-coral" />
                        <span className="text-xl font-semibold tracking-tight text-ink">
                            Meridian
                        </span>
                    </div>
                    <p className="mt-4 text-sm text-graphite leading-relaxed max-w-xs">
                        An independent dispatch on coworking, cities and the borderless life.
                    </p>
                </div>

                <div>
                    <span className="text-xs uppercase tracking-wider text-mute font-medium">
                        Sections
                    </span>
                    <ul className="mt-5 space-y-3 text-sm text-graphite">
                        <li>
                            <a href="#news" className="hover-underline hover:text-ink" data-testid="footer-link-news">
                                Dispatches
                            </a>
                        </li>
                        <li>
                            <a href="#cities" className="hover-underline hover:text-ink" data-testid="footer-link-cities">
                                Cities
                            </a>
                        </li>
                        <li>
                            <a href="#tips" className="hover-underline hover:text-ink" data-testid="footer-link-tips">
                                Field notes
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <span className="text-xs uppercase tracking-wider text-mute font-medium">
                        Company
                    </span>
                    <ul className="mt-5 space-y-3 text-sm text-graphite">
                        <li><a href="#about" className="hover-underline hover:text-ink">About</a></li>
                        <li><a href="#masthead" className="hover-underline hover:text-ink">Masthead</a></li>
                        <li><a href="#letters" className="hover-underline hover:text-ink">Letters</a></li>
                    </ul>
                </div>

                <div>
                    <span className="text-xs uppercase tracking-wider text-mute font-medium">
                        Contact
                    </span>
                    <ul className="mt-5 space-y-3 text-sm text-graphite">
                        <li>letters@meridian.press</li>
                        <li>@meridian.dispatch</li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-ink/8">
                <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-mute">
                    <span>© 2026 Meridian Editions</span>
                    <span>Made for people who work from everywhere</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
