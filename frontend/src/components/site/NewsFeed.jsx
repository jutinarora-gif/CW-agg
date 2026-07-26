import React, { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { REGIONS, NEWS } from "../../data/mockData";

// Placeholder images per news item so the card grid stays visual
const NEWS_IMG_POOL = [
    "https://images.pexels.com/photos/3747120/pexels-photo-3747120.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/18399439/pexels-photo-18399439.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/23230551/pexels-photo-23230551.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/16637442/pexels-photo-16637442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.unsplash.com/photo-1603464021578-f327592a89de?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwyfHxsYXB0b3AlMjBjb2ZmZWUlMjB3b3JraW5nfGVufDB8fHx8MTc4NTAzMzI1Mnww&ixlib=rb-4.1.0&q=85",
    "https://images.unsplash.com/photo-1599576838688-8a6c11263108?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwxfHxjaGlhbmclMjBtYWklMjB0ZW1wbGV8ZW58MHx8fHwxNzg1MDMzMjUyfDA&ixlib=rb-4.1.0&q=85",
    "https://images.pexels.com/photos/35428411/pexels-photo-35428411.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHwxfHxsaXNib24lMjBzdHJlZXQlMjB0cmFtfGVufDB8fHx8MTc4NTAzMzI1Mnww&ixlib=rb-4.1.0&q=85",
];

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
            className="bg-white"
        >
            <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-20 lg:py-28">
                {/* Head */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink leading-[1.05]">
                            What's happening this week
                        </h2>
                        <p className="mt-4 text-base lg:text-lg text-graphite">
                            Curated dispatches on policy, community and infrastructure — from
                            cities around the world.
                        </p>
                    </div>

                    <a
                        href="#archive"
                        data-testid="news-view-archive"
                        className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-ink hover-underline"
                    >
                        View full archive
                        <ArrowUpRight size={16} />
                    </a>
                </div>

                {/* Filter chips */}
                <div
                    data-testid="news-region-filters"
                    className="flex flex-wrap gap-2 mb-10"
                >
                    {REGIONS.map((r) => {
                        const active = r === region;
                        return (
                            <button
                                key={r}
                                onClick={() => setRegion(r)}
                                data-testid={`filter-region-${r.toLowerCase().replace(/\s+/g, "-")}`}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                                    active
                                        ? "bg-ink text-white"
                                        : "bg-bone text-graphite hover:bg-stone hover:text-ink"
                                }`}
                            >
                                {r}
                            </button>
                        );
                    })}
                </div>

                {/* Card grid */}
                <div
                    data-testid="news-list"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                >
                    {filtered.map((n, idx) => (
                        <a
                            key={n.id}
                            href={`#article-${n.id}`}
                            data-testid={`news-item-${n.id}`}
                            className="group zoom-parent card-lift block"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-bone">
                                <img
                                    src={n.image || NEWS_IMG_POOL[idx % NEWS_IMG_POOL.length]}
                                    alt={n.headline}
                                    className="zoom-img absolute inset-0 w-full h-full object-cover"
                                />
                                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 text-ink text-xs font-medium">
                                    {n.category}
                                </span>
                            </div>

                            <div className="mt-5 flex items-center gap-3 text-xs text-mute">
                                <span>{n.date}</span>
                                <span className="h-1 w-1 rounded-full bg-mute" />
                                <span>
                                    {n.country} · {n.city}
                                </span>
                            </div>

                            <h3 className="mt-3 text-lg lg:text-xl font-semibold tracking-tight text-ink leading-snug group-hover:text-coral transition-colors duration-300">
                                {n.headline}
                            </h3>
                            <p className="mt-2 text-sm text-graphite leading-relaxed line-clamp-3">
                                {n.excerpt}
                            </p>
                        </a>
                    ))}

                    {filtered.length === 0 && (
                        <div
                            data-testid="news-empty"
                            className="col-span-full py-16 text-center text-sm text-mute"
                        >
                            No dispatches from this region yet.
                        </div>
                    )}
                </div>

                <div className="mt-10 flex md:hidden items-center justify-center">
                    <a
                        href="#archive"
                        className="inline-flex items-center gap-2 text-sm font-medium text-ink hover-underline"
                    >
                        View full archive <ArrowUpRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default NewsFeed;
