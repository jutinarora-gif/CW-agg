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
            className="bg-ink text-paper border-b border-ink"
        >
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-7 lg:border-r border-paper/15 px-6 sm:px-10 lg:px-14 py-20">
                    <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-terracotta">
                        Section V — The Sunday Dispatch
                    </span>
                    <h2 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1] tracking-tight">
                        One email. <em className="italic font-light">One Sunday.</em>{" "}
                        <br />
                        Zero algorithms.
                    </h2>
                    <p className="mt-6 font-sans text-lg font-light text-paper/70 leading-relaxed max-w-xl">
                        A hand-edited digest of the world's coworking, visa and
                        remote-work signals. Read in nine minutes over a slow
                        breakfast, anywhere on the planet.
                    </p>
                </div>

                <div className="lg:col-span-5 px-6 sm:px-10 lg:px-14 py-20 flex items-center">
                    <form
                        onSubmit={handleSubmit}
                        data-testid="subscribe-form"
                        className="w-full"
                    >
                        <label
                            htmlFor="email"
                            className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/70"
                        >
                            Your inbox
                        </label>
                        <div className="mt-3 flex flex-col sm:flex-row gap-3">
                            <input
                                id="email"
                                data-testid="subscribe-email-input"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="editor@somewhere.world"
                                className="flex-1 bg-transparent border border-paper/40 focus:border-paper outline-none px-4 py-3 font-sans text-base font-light text-paper placeholder-paper/40 transition-colors duration-300"
                            />
                            <button
                                type="submit"
                                data-testid="subscribe-submit-button"
                                className="px-6 py-3 border border-paper bg-paper text-ink font-mono text-[11px] uppercase tracking-[0.22em] hover:bg-transparent hover:text-paper transition-colors duration-300"
                            >
                                Subscribe
                            </button>
                        </div>
                        <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-paper/50">
                            Free · Unsubscribe with one click · No tracking pixels
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;
