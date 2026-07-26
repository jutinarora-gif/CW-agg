import React from "react";
import { ArrowRight } from "lucide-react";
import { FEATURED } from "../../data/mockData";

export const Hero = () => {
    return (
        <section
            id="top"
            data-testid="hero-section"
            className="border-b border-ink/10"
        >
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 px-6 sm:px-10 py-16 lg:py-24">
                {/* Text */}
                <div className="lg:col-span-7 flex flex-col justify-center rise-in">
                    <span
                        data-testid="hero-kicker"
                        className="text-xs text-terracotta tracking-wide mb-6"
                    >
                        This week — from {FEATURED.dateline.split(" —")[0]}
                    </span>

                    <h1
                        data-testid="hero-headline"
                        className="font-serif text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] tracking-tight text-ink font-normal"
                    >
                        The quiet rebellion reshaping the modern workday.
                    </h1>

                    <p
                        data-testid="hero-deck"
                        className="mt-6 max-w-xl text-base sm:text-lg text-graphite leading-relaxed"
                    >
                        {FEATURED.deck}
                    </p>

                    <div className="mt-10 flex flex-wrap items-center gap-6">
                        <a
                            href="#news"
                            data-testid="hero-read-more-button"
                            className="group inline-flex items-center gap-2 px-5 py-3 bg-ink text-paper text-sm hover:bg-terracotta transition-colors duration-300"
                        >
                            Read this week's dispatch
                            <ArrowRight
                                size={16}
                                className="group-hover:translate-x-0.5 transition-transform duration-300"
                            />
                        </a>
                        <a
                            href="#cities"
                            data-testid="hero-explore-cities-button"
                            className="editorial-link text-sm text-ink"
                        >
                            Explore this month's cities
                        </a>
                    </div>

                    <div className="mt-12 flex flex-wrap gap-x-8 gap-y-2 text-sm text-mute">
                        <span>{FEATURED.author}</span>
                        <span>·</span>
                        <span>{FEATURED.readingTime}</span>
                        <span>·</span>
                        <span>{FEATURED.dateline}</span>
                    </div>
                </div>

                {/* Image */}
                <div
                    data-testid="hero-image-wrap"
                    className="lg:col-span-5 relative bg-cream min-h-[320px] lg:min-h-[560px] overflow-hidden"
                >
                    <img
                        src={FEATURED.image}
                        alt="Featured story"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
