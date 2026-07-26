import React, { useState } from "react";
import { toast } from "sonner";

export const Subscribe = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !email.includes("@")) {
            toast.error("A valid email would help.");
            return;
        }
        toast.success("Welcome. First dispatch lands this Sunday.");
        setEmail("");
    };

    return (
        <section
            id="subscribe"
            data-testid="subscribe-section"
            className="bg-ink text-paper"
        >
            <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-6">
                    <h2 className="font-serif text-3xl sm:text-4xl leading-tight tracking-tight font-normal">
                        One email. One Sunday. Zero algorithms.
                    </h2>
                    <p className="mt-4 text-base text-paper/70 max-w-lg leading-relaxed">
                        A hand-edited digest of the world's coworking, visa and remote-work
                        signals — read in nine minutes over a slow breakfast.
                    </p>
                </div>

                <div className="lg:col-span-6 lg:pl-10 flex items-center">
                    <form
                        onSubmit={handleSubmit}
                        data-testid="subscribe-form"
                        className="w-full"
                    >
                        <div className="flex flex-col sm:flex-row gap-3">
                            <input
                                id="email"
                                data-testid="subscribe-email-input"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@somewhere.world"
                                className="flex-1 bg-transparent border border-paper/30 focus:border-paper outline-none px-4 py-3 text-base text-paper placeholder-paper/40 transition-colors duration-300"
                            />
                            <button
                                type="submit"
                                data-testid="subscribe-submit-button"
                                className="px-6 py-3 bg-paper text-ink text-sm hover:bg-terracotta hover:text-paper transition-colors duration-300"
                            >
                                Subscribe
                            </button>
                        </div>
                        <p className="mt-3 text-xs text-paper/50">
                            Free · Unsubscribe with one click · No tracking
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;
