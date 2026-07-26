import React from "react";
import { CITIES } from "../../data/mockData";

export const CitySpotlight = () => {
    return (
        <section
            id="cities"
            data-testid="city-spotlight-section"
            className="border-b border-ink/15 bg-paper"
        >
            <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-ink/15">
                <div className="lg:col-span-8 lg:border-r border-ink/15 px-6 sm:px-10 lg:px-14 py-14">
                    <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-terracotta">
                        Section III — City Files
                    </span>
                    <h2 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1] tracking-tight text-ink">
                        Six cities <em className="italic font-light">worth</em> <br />
                        packing a carry-on for.
                    </h2>
                </div>
                <div className="lg:col-span-4 px-6 sm:px-10 lg:px-14 py-14 flex items-end">
                    <p className="font-sans text-base font-light text-graphite leading-relaxed">
                        Each file rates wifi, cost, weather and community
                        density. Curated by editors on the ground — no algorithms,
                        no affiliate links.
                    </p>
                </div>
            </div>

            {/* City grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {CITIES.map((c, idx) => (
                    <article
                        key={c.slug}
                        data-testid={`city-card-${c.slug}`}
                        className={`group px-6 sm:px-8 py-10 border-ink/15 ${
                            idx % 3 !== 2 ? "lg:border-r" : ""
                        } ${
                            idx % 2 === 0 ? "sm:border-r lg:border-r" : ""
                        } ${idx < CITIES.length - 1 ? "border-b" : ""} ${
                            idx < CITIES.length - (CITIES.length % 3 || 3)
                                ? "lg:border-b"
                                : ""
                        }`}
                    >
                        <div className="relative aspect-[3/4] overflow-hidden bg-cream mb-6">
                            <img
                                src={c.image}
                                alt={`${c.name}, ${c.country}`}
                                className="w-full h-full object-cover grayscale-hover"
                            />
                            <span className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.28em] text-paper mix-blend-difference">
                                N°{String(idx + 1).padStart(2, "0")}
                            </span>
                        </div>

                        <div className="flex items-baseline justify-between border-b border-ink/15 pb-3">
                            <h3 className="font-serif text-3xl leading-none tracking-tight text-ink group-hover:text-terracotta transition-colors duration-300">
                                {c.name}
                            </h3>
                            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-graphite">
                                {c.country}
                            </span>
                        </div>

                        <p className="mt-4 font-sans text-base font-light text-graphite leading-relaxed">
                            {c.blurb}
                        </p>

                        <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-ink/15 pt-4">
                            <div>
                                <dt className="font-mono text-[9px] uppercase tracking-[0.22em] text-graphite">
                                    Wifi
                                </dt>
                                <dd className="mt-1 font-mono text-xs text-ink">
                                    {c.wifi}
                                </dd>
                            </div>
                            <div>
                                <dt className="font-mono text-[9px] uppercase tracking-[0.22em] text-graphite">
                                    Cost
                                </dt>
                                <dd className="mt-1 font-mono text-xs text-ink">
                                    {c.priceIndex}
                                </dd>
                            </div>
                            <div>
                                <dt className="font-mono text-[9px] uppercase tracking-[0.22em] text-graphite">
                                    Avg. Temp
                                </dt>
                                <dd className="mt-1 font-mono text-xs text-ink">
                                    {c.temp}
                                </dd>
                            </div>
                        </dl>

                        <a
                            href={`#city-${c.slug}`}
                            data-testid={`city-view-${c.slug}`}
                            className="mt-6 inline-flex items-center editorial-link font-mono text-[11px] uppercase tracking-[0.22em] text-ink"
                        >
                            Open the file →
                        </a>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default CitySpotlight;
