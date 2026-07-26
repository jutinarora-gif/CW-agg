import React, { useMemo, useState } from "react";
import { REGIONS, NEWS } from "../../data/mockData";

export const NewsFeed = () => {
    const [region, setRegion] = useState("All");

    const filtered = useMemo(
        () =>
            region === "All" ? NEWS : NEWS.filter((n) => n.region === region),
        [region]
    );

    return (
        <section
            id="news"
            data-testid="news-feed-section"
            className="border-b border-ink/15"
        >
            {/* Section head */}
            <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-ink/15">
                <div className="lg:col-span-4 px-6 sm:px-10 lg:px-14 py-14 lg:border-r border-ink/15">
                    <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-terracotta">
                        Section II — Dispatches
                    </span>
                    <h2 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1] tracking-tight text-ink">
                        The world, <br />
                        <em className="italic font-light">from a desk near you.</em>
                    </h2>
                    <p className="mt-6 font-sans text-base font-light text-graphite leading-relaxed max-w-md">
                        Curated updates on policy, real estate, community and
                        infrastructure — the four things a remote worker actually
                        needs to know about a country.
                    </p>
                </div>

                <div className="lg:col-span-8 px-6 sm:px-10 lg:px-14 py-10 flex items-end">
                    <div
                        data-testid="news-region-filters"
                        className="flex flex-wrap gap-2"
                    >
                        {REGIONS.map((r) => {
                            const active = r === region;
                            return (
                                <button
                                    key={r}
                                    onClick={() => setRegion(r)}
                                    data-testid={`filter-region-${r.toLowerCase().replace(/\s+/g, "-")}`}
                                    className={`px-4 py-2 border font-mono text-[11px] uppercase tracking-[0.22em] transition-colors duration-300 ${
                                        active
                                            ? "bg-ink text-paper border-ink"
                                            : "bg-transparent text-ink border-ink/30 hover:border-ink"
                                    }`}
                                >
                                    {r}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Feed */}
            <ul data-testid="news-list" className="divide-y divide-ink/15">
                {filtered.map((n, idx) => (
                    <li
                        key={n.id}
                        data-testid={`news-item-${n.id}`}
                        className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 px-6 sm:px-10 lg:px-14 py-10 hover:bg-cream/60 transition-colors duration-300"
                    >
                        <div className="lg:col-span-1 font-serif text-2xl text-graphite">
                            {String(idx + 1).padStart(2, "0")}
                        </div>

                        <div className="lg:col-span-2 flex flex-col gap-2">
                            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-terracotta">
                                {n.category}
                            </span>
                            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-graphite">
                                {n.country} · {n.city}
                            </span>
                            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-graphite">
                                {n.date}
                            </span>
                        </div>

                        <div
                            className={`${
                                n.image ? "lg:col-span-6" : "lg:col-span-9"
                            } flex flex-col justify-center`}
                        >
                            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl leading-[1.05] tracking-tight text-ink group-hover:text-terracotta transition-colors duration-300">
                                {n.headline}
                            </h3>
                            <p className="mt-4 font-sans text-base font-light text-graphite leading-relaxed max-w-2xl">
                                {n.excerpt}
                            </p>
                            <span className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-graphite">
                                By {n.author}
                            </span>
                        </div>

                        {n.image && (
                            <div className="lg:col-span-3 order-first lg:order-last">
                                <div className="aspect-[4/3] overflow-hidden bg-cream">
                                    <img
                                        src={n.image}
                                        alt={n.headline}
                                        className="w-full h-full object-cover grayscale-hover"
                                    />
                                </div>
                            </div>
                        )}
                    </li>
                ))}

                {filtered.length === 0 && (
                    <li
                        data-testid="news-empty"
                        className="px-6 sm:px-10 lg:px-14 py-16 text-center font-mono text-xs uppercase tracking-[0.22em] text-graphite"
                    >
                        No dispatches from this region yet — check back on Sunday.
                    </li>
                )}
            </ul>

            <div className="px-6 sm:px-10 lg:px-14 py-10 flex items-center justify-between border-t border-ink/15">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-graphite">
                    Showing {filtered.length} of {NEWS.length} dispatches
                </span>
                <a
                    href="#archive"
                    data-testid="news-view-archive"
                    className="editorial-link font-mono text-[11px] uppercase tracking-[0.22em] text-ink"
                >
                    View the full archive →
                </a>
            </div>
        </section>
    );
};

export default NewsFeed;
