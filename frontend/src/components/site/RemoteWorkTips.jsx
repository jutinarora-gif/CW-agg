import React from "react";
import { TIPS } from "../../data/mockData";

export const RemoteWorkTips = () => {
    return (
        <section
            id="tips"
            data-testid="tips-section"
            className="border-b border-ink/15 bg-cream"
        >
            <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-ink/15">
                <div className="lg:col-span-5 lg:border-r border-ink/15 px-6 sm:px-10 lg:px-14 py-14">
                    <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-terracotta">
                        Section IV — Field Notes
                    </span>
                    <h2 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1] tracking-tight text-ink">
                        Six rules, <br />
                        <em className="italic font-light">learned the hard way.</em>
                    </h2>
                    <p className="mt-6 font-sans text-base font-light text-graphite leading-relaxed max-w-md">
                        Practical, opinionated advice from readers and editors —
                        collected over three years of continuous transit.
                    </p>
                </div>

                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 divide-x divide-y divide-ink/15 border-l border-ink/15">
                    {TIPS.map((t) => (
                        <article
                            key={t.num}
                            data-testid={`tip-${t.num}`}
                            className="px-6 sm:px-8 py-8 hover:bg-paper transition-colors duration-300"
                        >
                            <div className="flex items-baseline justify-between">
                                <span className="font-serif text-4xl font-light text-terracotta">
                                    {t.num}
                                </span>
                                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-graphite">
                                    Rule
                                </span>
                            </div>
                            <h3 className="mt-3 font-serif text-2xl leading-tight text-ink">
                                {t.title}
                            </h3>
                            <p className="mt-3 font-sans text-sm font-light text-graphite leading-relaxed">
                                {t.body}
                            </p>
                        </article>
                    ))}
                </div>
            </div>

            <div className="px-6 sm:px-10 lg:px-14 py-8 flex flex-wrap items-center justify-between gap-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-graphite">
                    Have a rule of your own? Send it to letters@meridian.press
                </span>
                <a
                    href="#subscribe"
                    data-testid="tips-subscribe-link"
                    className="editorial-link font-mono text-[11px] uppercase tracking-[0.22em] text-ink"
                >
                    Get next week's field notes →
                </a>
            </div>
        </section>
    );
};

export default RemoteWorkTips;
