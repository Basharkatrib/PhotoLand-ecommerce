function Testimonials() {
    const testimonials = [
        { name: "Ali Ahmed", role: "Wedding Photographer", text: "Great quality products and fast shipping!" },
        { name: "Sara Noor", role: "Content Creator", text: "Excellent customer service and amazing prices." },
        { name: "Omar Khaled", role: "Studio Owner", text: "Found everything I needed for my next shoot." }
    ];

    return (
        <section className="relative w-full py-16 bg-neutral-950 text-white">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.08),transparent_60%)]" />
            <div className="relative mx-auto px-4 md:px-8">
                <div className="flex items-end justify-between gap-6 mb-10">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                            What our <span className="text-amber-500">customers</span> say
                        </h2>
                        <p className="text-neutral-400 mt-2">Trusted by photographers and creators.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, idx) => (
                        <div
                            key={idx}
                            className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur transition-transform hover:-translate-y-1 hover:border-amber-500/40"
                        >
                            <div className="pointer-events-none absolute -top-10 -right-10 h-24 w-24 rounded-full bg-amber-500/10 blur-2xl" />
                            <svg className="w-8 h-8 text-amber-500/80" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M7.17 6A5.17 5.17 0 002 11.17V22h8v-8H6.83A3.17 3.17 0 0110 10.83V6H7.17zm9 0A5.17 5.17 0 0011 11.17V22h8v-8h-3.17A3.17 3.17 0 0119 10.83V6h-2.83z"/>
                            </svg>
                            <p className="mt-4 text-neutral-300 leading-relaxed">“{t.text}”</p>
                            <div className="mt-6">
                                <div className="font-semibold text-neutral-100">{t.name}</div>
                                <div className="text-sm text-neutral-400">{t.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;


