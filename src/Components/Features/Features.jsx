function Features() {
    const items = [
        { title: "Fast Shipping", desc: "2-5 business days worldwide", icon: "🚚" },
        { title: "Secure Payments", desc: "Trusted providers and encryption", icon: "🔒" },
        { title: "Support", desc: "24/7 customer support", icon: "💬" },
        { title: "Warranty", desc: "1-year limited warranty", icon: "✅" },
    ];
    return (
        <section className="bg-neutral-900 text-white py-10 px-4 md:px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
                {items.map((it, idx) => (
                    <div key={idx} className="rounded-lg border border-neutral-800 bg-neutral-900/60 p-4">
                        <div className="text-2xl">{it.icon}</div>
                        <div className="mt-2 font-semibold">{it.title}</div>
                        <div className="text-neutral-400 text-sm">{it.desc}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Features;


