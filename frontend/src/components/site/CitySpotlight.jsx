import React from "react";
import { ArrowUpRight } from "lucide-react";
import { CITIES } from "../../data/mockData";

export const CitySpotlight = () => {
    return (
        <section
            id="cities"
            data-testid="city-spotlight-section"
            className="border-b border-ink/10 bg-cream"
        >
            <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-16 lg:py-24">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                    <h2 className="font-serif text-3xl sm:text-4xl leading-tight tracking-tight text-ink font-normal max-w-xl">
                        Cities worth packing a carry-on for
                    </h2>
                    <p className="text-base text-graphite max-w-sm">
                        Six curated hubs, chosen by editors on the ground.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {CITIES.map((c) => (
                        <a
                            key={c.slug}
                            href={`#city-${c.slug}`}
                            data-testid={`city-card-${c.slug}`}
                            className="group block"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden bg-ink/5 mb-5">
                                <img
                                    src={c.image}
                                    alt={`${c.name}, ${c.country}`}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                                />
                            </div>

                            <div className="flex items-baseline justify-between">
                                <h3 className="font-serif text-2xl leading-none tracking-tight text-ink group-hover:text-terracotta transition-colors duration-300 font-normal">
                                    {c.name}
                                </h3>
                                <ArrowUpRight
                                    size={18}
                                    className="text-mute group-hover:text-terracotta group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300"
                                />
                            </div>
                            <p className="mt-1 text-sm text-mute">
                                {c.country}
                            </p>
                            <p className="mt-3 text-sm text-graphite leading-relaxed">
                                {c.blurb}
                            </p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CitySpotlight;
