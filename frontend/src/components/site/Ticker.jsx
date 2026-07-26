import React from "react";
import { TICKER } from "../../data/mockData";

export const Ticker = () => {
    const items = [...TICKER, ...TICKER];

    return (
        <div
            data-testid="global-ticker"
            className="border-b border-ink/15 bg-cream overflow-hidden"
        >
            <div className="relative flex items-center">
                <span className="hidden sm:inline-block shrink-0 bg-ink text-paper font-mono text-[10px] uppercase tracking-[0.22em] px-4 py-2 border-r border-ink">
                    Live wire
                </span>
                <div className="flex-1 overflow-hidden">
                    <div className="ticker-track inline-flex whitespace-nowrap py-2">
                        {items.map((entry, idx) => (
                            <span
                                key={idx}
                                className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/80 px-8"
                            >
                                {entry}
                                <span className="ml-8 text-terracotta">✦</span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ticker;
