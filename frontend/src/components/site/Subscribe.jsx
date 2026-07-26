import React, { useState } from "react";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

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
            className="bg-white"
        >
            <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-20 lg:py-28">
                <div className="relative overflow-hidden rounded-3xl bg-ink text-white px-6 sm:px-12 lg:px-20 py-16 lg:py-24">
                    <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-coral/30 blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-lime/20 blur-3xl pointer-events-none" />

                    <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10">
                        <div className="lg:col-span-6">
                            <span className="inline-block text-xs uppercase tracking-wider text-coral font-medium mb-4">
                                The Sunday Dispatch
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.05]">
                                One email. One Sunday. Zero algorithms.
                            </h2>
                            <p className="mt-5 text-base lg:text-lg text-white/70 max-w-lg leading-relaxed">
                                A hand-edited digest of the world's coworking, visa and
                                remote-work signals — read in nine minutes over a slow breakfast.
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
                                        className="flex-1 bg-white/10 border border-white/20 focus:border-white outline-none px-5 py-3.5 rounded-full text-base text-white placeholder-white/50 transition-colors duration-300"
                                    />
                                    <button
                                        type="submit"
                                        data-testid="subscribe-submit-button"
                                        className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-ink text-sm font-medium hover:bg-coral hover:text-white transition-colors duration-300"
                                    >
                                        Subscribe
                                        <ArrowRight
                                            size={16}
                                            className="group-hover:translate-x-1 transition-transform duration-300"
                                        />
                                    </button>
                                </div>
                                <p className="mt-4 text-xs text-white/50">
                                    Free · Unsubscribe with one click · No tracking pixels
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;
