import React from "react";
import { ArrowUpRight } from "lucide-react";
import { FEATURED, STATS } from "../../data/mockData";

export const Hero = () => {
    return (
        <section
            id="top"
            data-testid="hero-section"
            className="border-b border-ink/15"
        >
            <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Text column */}
                <div className="lg:col-span-7 lg:border-r border-ink/15 px-6 sm:px-10 lg:px-14 py-14 lg:py-20 flex flex-col justify-between rise-in">
                    <div>
                        <div className="flex items-center gap-4 mb-10">
                            <span
                                data-testid="hero-kicker"
                                className="font-mono text-[11px] uppercase tracking-[0.28em] text-terracotta"
                            >
                                {FEATURED.kicker}
                            </span>
                            <span className="h-px flex-1 bg-ink/20 max-w-[160px]" />
                            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-graphite">
                                {FEATURED.dateline}
                            </span>
                        </div>

                        <h1
                            data-testid="hero-headline"
                            className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-ink"
                        >
                            The Quiet <em className="italic font-light text-terracotta">Rebellion</em>{" "}
                            Reshaping <br className="hidden sm:block" /> the Modern Workday.
                        </h1>

                        <p
                            data-testid="hero-deck"
                            className="mt-10 max-w-xl font-sans text-lg sm:text-xl font-light text-graphite leading-relaxed"
                        >
                            {FEATURED.deck}
                        </p>

                        <div className="mt-10 flex flex-wrap items-center gap-6">
                            <a
                                href="#news"
                                data-testid="hero-read-more-button"
                                className="group inline-flex items-center gap-3 px-6 py-3 border border-ink bg-ink text-paper font-mono text-[11px] uppercase tracking-[0.22em] hover:bg-paper hover:text-ink transition-colors duration-300"
                            >
                                Read the dispatch
                                <ArrowUpRight
                                    size={14}
                                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                                />
                            </a>
                            <a
                                href="#cities"
                                data-testid="hero-explore-cities-button"
                                className="editorial-link font-mono text-[11px] uppercase tracking-[0.22em] text-ink"
                            >
                                Or explore this month's cities →
                            </a>
                        </div>
                    </div>

                    <div className="mt-14 flex flex-wrap gap-8 pt-10 border-t border-ink/15">
                        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-graphite">
                            By {FEATURED.author}
                        </span>
                        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-graphite">
                            {FEATURED.readingTime}
                        </span>
                        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-graphite">
                            {FEATURED.tags.join(" · ")}
                        </span>
                    </div>
                </div>

                {/* Image column */}
                <div
                    data-testid="hero-image-wrap"
                    className="lg:col-span-5 relative bg-cream min-h-[400px] lg:min-h-[720px] overflow-hidden"
                >
                    <img
                        src={FEATURED.image}
                        alt="Featured story"
                        className="absolute inset-0 w-full h-full object-cover grayscale-hover"
                    />
                    <div className="absolute top-6 left-6 right-6 flex justify-between font-mono text-[10px] uppercase tracking-[0.28em] text-paper mix-blend-difference">
                        <span>Plate No.01</span>
                        <span>Ubud · ID</span>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 flex justify-between font-mono text-[10px] uppercase tracking-[0.28em] text-paper mix-blend-difference">
                        <span>Photograph — Meridian archives</span>
                        <span>© 2026</span>
                    </div>
                </div>
            </div>

            {/* Stats strip */}
            <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-ink/15">
                {STATS.map((s, i) => (
                    <div
                        key={s.label}
                        data-testid={`hero-stat-${i}`}
                        className={`px-6 sm:px-10 py-8 ${
                            i < STATS.length - 1 ? "lg:border-r border-ink/15" : ""
                        } ${i % 2 === 0 ? "border-r lg:border-r" : ""} ${
                            i < 2 ? "border-b lg:border-b-0" : ""
                        } border-ink/15`}
                    >
                        <div className="font-serif text-4xl sm:text-5xl font-light text-ink leading-none">
                            {s.value}
                        </div>
                        <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-graphite">
                            {s.label}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Hero;
