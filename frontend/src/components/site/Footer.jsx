import React from "react";

export const Footer = () => {
    return (
        <footer data-testid="site-footer" className="bg-paper text-ink">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="col-span-2 md:col-span-1">
                    <span className="font-serif text-2xl leading-none tracking-tight">
                        Meridian
                    </span>
                    <p className="mt-3 text-sm text-graphite leading-relaxed max-w-xs">
                        An independent dispatch on coworking, cities and the borderless life.
                    </p>
                </div>

                <div>
                    <span className="text-sm text-mute">Sections</span>
                    <ul className="mt-4 space-y-2 text-sm">
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
                                Cities
                            </a>
                        </li>
                        <li>
                            <a
                                href="#tips"
                                className="editorial-link"
                                data-testid="footer-link-tips"
                            >
                                Field notes
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <span className="text-sm text-mute">The Paper</span>
                    <ul className="mt-4 space-y-2 text-sm">
                        <li><a href="#about" className="editorial-link">About</a></li>
                        <li><a href="#masthead" className="editorial-link">Masthead</a></li>
                        <li><a href="#letters" className="editorial-link">Letters</a></li>
                    </ul>
                </div>

                <div>
                    <span className="text-sm text-mute">Contact</span>
                    <ul className="mt-4 space-y-2 text-sm text-graphite">
                        <li>letters@meridian.press</li>
                        <li>@meridian.dispatch</li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-ink/10">
                <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-mute">
                    <span>© 2026 Meridian Editions</span>
                    <span>Set in Fraunces & IBM Plex Sans</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
