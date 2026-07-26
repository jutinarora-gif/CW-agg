import React from "react";
import { ArrowRight } from "lucide-react";
import { FEATURED, STATS } from "../../data/mockData";

export const Hero = () => {
    return (
        <section
            id="top"
            data-testid="hero-section"
            className="bg-white"
        >
            <div className="max-w-[1400px] mx-auto px-5 sm:px-8 pt-8 lg:pt-12">
                {/* Full-bleed image card with overlay */}
                <div
                    data-testid="hero-image-wrap"
                    className="relative overflow-hidden rounded-3xl bg-ink"
                >
                    <img
                        src={FEATURED.image}
                        alt="Featured story"
                        className="absolute inset-0 w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/15" />

                    <div className="relative px-6 sm:px-12 lg:px-16 py-16 sm:py-24 lg:py-32 min-h-[520px] lg:min-h-[640px] flex flex-col justify-end rise-in">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="inline-block h-2 w-2 rounded-full bg-coral" />
                            <span
                                data-testid="hero-kicker"
                                className="text-xs sm:text-sm text-white/90 font-medium tracking-wide uppercase"
                            >
                                This week — dispatch №04
                            </span>
                        </div>

                        <h1
                            data-testid="hero-headline"
                            className="max-w-4xl text-white font-semibold tracking-[-0.03em] leading-[1.02] text-4xl sm:text-5xl lg:text-7xl"
                        >
                            The quiet rebellion reshaping the modern workday.
                        </h1>

                        <p
                            data-testid="hero-deck"
                            className="mt-6 max-w-2xl text-base sm:text-lg text-white/80 leading-relaxed"
                        >
                            {FEATURED.deck}
                        </p>

                        <div className="mt-10 flex flex-wrap items-center gap-4">
                            <a
                                href="#news"
                                data-testid="hero-read-more-button"
                                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-ink text-sm font-medium hover:bg-coral hover:text-white transition-colors duration-300"
                            >
                                Read this week's dispatch
                                <ArrowRight
                                    size={16}
                                    className="group-hover:translate-x-1 transition-transform duration-300"
                                />
                            </a>
                            <a
                                href="#cities"
                                data-testid="hero-explore-cities-button"
                                className="inline-flex items-center px-6 py-3.5 rounded-full border border-white/40 text-white text-sm font-medium hover:bg-white/10 transition-colors duration-300"
                            >
                                Explore cities
                            </a>
                        </div>
                    </div>
                </div>

                {/* Stats row */}
                <div
                    data-testid="hero-stats"
                    className="mt-10 lg:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6 border-t border-ink/10 pt-10 lg:pt-14"
                >
                    {STATS.map((s, i) => (
                        <div
                            key={s.label}
                            data-testid={`hero-stat-${i}`}
                            className="flex flex-col"
                        >
                            <span className="text-4xl lg:text-6xl font-semibold tracking-tight text-ink leading-none">
                                {s.value}
                            </span>
                            <span className="mt-3 text-sm text-graphite max-w-[180px]">
                                {s.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
