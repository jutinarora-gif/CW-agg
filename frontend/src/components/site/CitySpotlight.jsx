import React from "react";
import { ArrowUpRight } from "lucide-react";
import { CITIES } from "../../data/mockData";

export const CitySpotlight = () => {
    return (
        <section
            id="cities"
            data-testid="city-spotlight-section"
            className="bg-bone"
        >
            <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-20 lg:py-28">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
                    <div className="max-w-2xl">
                        <span className="inline-block text-xs uppercase tracking-wider text-coral font-medium mb-4">
                            City files
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink leading-[1.05]">
                            Six hubs worth packing a carry-on for
                        </h2>
                        <p className="mt-4 text-base lg:text-lg text-graphite">
                            Curated by editors on the ground — no algorithms, no affiliates.
                        </p>
                    </div>

                    <a
                        href="#all-cities"
                        data-testid="cities-view-all"
                        className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-ink hover-underline"
                    >
                        See all 24 cities
                        <ArrowUpRight size={16} />
                    </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {CITIES.map((c) => (
                        <a
                            key={c.slug}
                            href={`#city-${c.slug}`}
                            data-testid={`city-card-${c.slug}`}
                            className="group card-lift zoom-parent block bg-white rounded-3xl overflow-hidden"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden bg-stone">
                                <img
                                    src={c.image}
                                    alt={`${c.name}, ${c.country}`}
                                    className="zoom-img absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                                    <span className="px-3 py-1 rounded-full bg-white/95 text-ink text-xs font-medium">
                                        {c.country}
                                    </span>
                                    <span className="h-9 w-9 rounded-full bg-white/95 text-ink flex items-center justify-center group-hover:bg-coral group-hover:text-white transition-colors duration-300">
                                        <ArrowUpRight size={16} />
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-semibold tracking-tight text-ink group-hover:text-coral transition-colors duration-300">
                                    {c.name}
                                </h3>
                                <p className="mt-2 text-sm text-graphite leading-relaxed">
                                    {c.blurb}
                                </p>

                                <div className="mt-5 pt-5 border-t border-ink/8 grid grid-cols-3 gap-2 text-xs">
                                    <div>
                                        <div className="text-mute">Wifi</div>
                                        <div className="mt-1 text-ink font-medium">{c.wifi}</div>
                                    </div>
                                    <div>
                                        <div className="text-mute">Cost</div>
                                        <div className="mt-1 text-ink font-medium">{c.priceIndex}</div>
                                    </div>
                                    <div>
                                        <div className="text-mute">Temp</div>
                                        <div className="mt-1 text-ink font-medium">{c.temp}</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CitySpotlight;
