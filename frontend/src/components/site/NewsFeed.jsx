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
            className="border-b border-ink/10"
        >
            <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-16 lg:py-24">
                {/* Head */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                    <div>
                        <h2 className="font-serif text-3xl sm:text-4xl leading-tight tracking-tight text-ink font-normal">
                            Latest dispatches
                        </h2>
                        <p className="mt-3 text-base text-graphite max-w-lg">
                            Policy, real estate, community and infrastructure — the four things a
                            remote worker actually needs to know about a country.
                        </p>
                    </div>

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
                                    className={`px-3 py-1.5 text-sm transition-colors duration-200 ${
                                        active
                                            ? "bg-ink text-paper"
                                            : "text-graphite hover:text-ink"
                                    }`}
                                >
                                    {r}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Feed */}
                <ul
                    data-testid="news-list"
                    className="divide-y divide-ink/10 border-t border-ink/10"
                >
                    {filtered.map((n) => (
                        <li
                            key={n.id}
                            data-testid={`news-item-${n.id}`}
                            className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8"
                        >
                            <div className="md:col-span-2 flex flex-col text-sm text-mute">
                                <span>{n.date}</span>
                                <span className="mt-1 text-graphite">
                                    {n.country}
                                </span>
                            </div>

                            <div className="md:col-span-7">
                                <h3 className="font-serif text-xl sm:text-2xl leading-snug tracking-tight text-ink group-hover:text-terracotta transition-colors duration-300 font-normal">
                                    {n.headline}
                                </h3>
                                <p className="mt-3 text-base text-graphite leading-relaxed max-w-2xl">
                                    {n.excerpt}
                                </p>
                            </div>

                            <div className="md:col-span-3 text-sm text-mute md:text-right">
                                {n.category}
                            </div>
                        </li>
                    ))}

                    {filtered.length === 0 && (
                        <li
                            data-testid="news-empty"
                            className="py-16 text-center text-sm text-mute"
                        >
                            No dispatches from this region yet.
                        </li>
                    )}
                </ul>

                <div className="mt-8 flex items-center justify-between text-sm text-mute">
                    <span>
                        {filtered.length} of {NEWS.length} stories
                    </span>
                    <a
                        href="#archive"
                        data-testid="news-view-archive"
                        className="editorial-link text-ink"
                    >
                        View full archive
                    </a>
                </div>
            </div>
        </section>
    );
};

export default NewsFeed;
