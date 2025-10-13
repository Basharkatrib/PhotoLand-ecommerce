function FAQ() {
    const faqs = [
        {
            q: "What is Photoland?",
            a: "Photoland is an online store for photography gear and accessories.",
        },
        {
            q: "Do you offer international shipping?",
            a: "Yes, we ship to many countries. Shipping fees are calculated at checkout.",
        },
        {
            q: "What is your return policy?",
            a: "Items can be returned within 30 days in original condition.",
        },
        {
            q: "How long does delivery take?",
            a: "Orders typically arrive within 3-7 business days depending on location.",
        },
    ];

    return (
        <section className="relative w-full py-16 bg-gradient-to-b from-neutral-900 via-neutral-900 to-black text-white overflow-hidden">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl" />
            <div className="relative mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                            Frequently Asked <span className="text-amber-500">Questions</span>
                        </h2>
                        <p className="text-neutral-400 mt-2 max-w-2xl">
                            Everything you need to know about shipping, returns, and our store policies.
                        </p>
                    </div>
                </div>

                <div className="divide-y divide-neutral-800 rounded-xl border border-neutral-800 bg-neutral-900/50 backdrop-blur">
                    {faqs.map((item, idx) => (
                        <details
                            key={idx}
                            className="group open:bg-neutral-900/60 transition-colors"
                        >
                            <summary className="flex items-center justify-between cursor-pointer select-none p-5 md:p-6">
                                <span className="font-semibold text-base md:text-lg text-neutral-100">
                                    {item.q}
                                </span>
                                <span className="ml-4 flex h-7 w-7 items-center justify-center rounded-full border border-neutral-700 text-neutral-300 transition-transform group-open:rotate-45">
                                    +
                                </span>
                            </summary>
                            <div className="px-5 md:px-6 pb-5 md:pb-6 text-neutral-300 leading-relaxed">
                                {item.a}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQ;


