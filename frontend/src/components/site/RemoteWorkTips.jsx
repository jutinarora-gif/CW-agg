import React from "react";
import { TIPS } from "../../data/mockData";

export const RemoteWorkTips = () => {
    return (
        <section
            id="tips"
            data-testid="tips-section"
            className="border-b border-ink/10"
        >
            <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-16 lg:py-24">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                    <h2 className="font-serif text-3xl sm:text-4xl leading-tight tracking-tight text-ink font-normal max-w-xl">
                        Six rules, learned the hard way
                    </h2>
                    <p className="text-base text-graphite max-w-sm">
                        Practical advice from readers and editors, collected over three years
                        of continuous transit.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
                    {TIPS.map((t) => (
                        <article
                            key={t.num}
                            data-testid={`tip-${t.num}`}
                            className="border-t border-ink/15 pt-5"
                        >
                            <span className="text-sm text-terracotta">
                                {t.num}
                            </span>
                            <h3 className="mt-3 font-serif text-xl leading-snug text-ink font-normal">
                                {t.title}
                            </h3>
                            <p className="mt-3 text-sm text-graphite leading-relaxed">
                                {t.body}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RemoteWorkTips;
