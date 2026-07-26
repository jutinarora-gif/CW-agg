import React from "react";
import {
    Plane,
    Compass,
    Coffee,
    Signal,
    BookOpen,
    LogOut,
} from "lucide-react";
import { TIPS } from "../../data/mockData";

const ICONS = [Plane, Compass, Coffee, Signal, BookOpen, LogOut];

export const RemoteWorkTips = () => {
    return (
        <section
            id="tips"
            data-testid="tips-section"
            className="bg-white"
        >
            <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-20 lg:py-28">
                <div className="max-w-3xl mb-14">
                    <span className="inline-block text-xs uppercase tracking-wider text-coral font-medium mb-4">
                        Field notes
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink leading-[1.05]">
                        Six rules, learned the hard way
                    </h2>
                    <p className="mt-4 text-base lg:text-lg text-graphite">
                        Practical advice from readers and editors, collected over three years
                        of continuous transit.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {TIPS.map((t, i) => {
                        const Icon = ICONS[i % ICONS.length];
                        return (
                            <article
                                key={t.num}
                                data-testid={`tip-${t.num}`}
                                className="group card-lift bg-bone hover:bg-stone rounded-3xl p-8 transition-colors duration-300"
                            >
                                <div className="flex items-center justify-between mb-8">
                                    <span className="h-12 w-12 rounded-2xl bg-white flex items-center justify-center text-ink group-hover:bg-coral group-hover:text-white transition-colors duration-300">
                                        <Icon size={20} strokeWidth={1.6} />
                                    </span>
                                    <span className="text-sm font-medium text-mute">
                                        {t.num}
                                    </span>
                                </div>
                                <h3 className="text-xl font-semibold tracking-tight text-ink leading-snug">
                                    {t.title}
                                </h3>
                                <p className="mt-3 text-sm text-graphite leading-relaxed">
                                    {t.body}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default RemoteWorkTips;
