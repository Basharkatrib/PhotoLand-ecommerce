function Brands() {
    const brands = ["Canon", "Nikon", "Sony", "Fujifilm", "Sigma", "DJI"];
    return (
        <section className="bg-neutral-950 text-white py-8 px-4 md:px-8">
            <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-6">
                {brands.map((b, idx) => (
                    <div key={idx} className="px-4 py-2 rounded-md border border-neutral-800 bg-neutral-900/60 text-neutral-300 hover:text-amber-400 hover:border-amber-500/40 transition">
                        {b}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Brands;


