function Footer() {
    return (
        <footer className="bg-neutral-950 text-white pt-10">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-8 border-b border-neutral-800">
                    <div>
                        <h4 className="text-amber-500 font-bold mb-3">PHOTOLAND</h4>
                        <p className="text-neutral-400 text-sm">Your destination for photography gear and accessories.</p>
                    </div>
                    <div>
                        <h5 className="font-semibold mb-3">Shop</h5>
                        <ul className="space-y-2 text-neutral-300 text-sm">
                            <li><a className="hover:text-amber-400" href="#">Cameras</a></li>
                            <li><a className="hover:text-amber-400" href="#">Lenses</a></li>
                            <li><a className="hover:text-amber-400" href="#">Lighting</a></li>
                            <li><a className="hover:text-amber-400" href="#">Accessories</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-semibold mb-3">Support</h5>
                        <ul className="space-y-2 text-neutral-300 text-sm">
                            <li><a className="hover:text-amber-400" href="#">Shipping</a></li>
                            <li><a className="hover:text-amber-400" href="#">Returns</a></li>
                            <li><a className="hover:text-amber-400" href="#">Contact</a></li>
                            <li><a className="hover:text-amber-400" href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-semibold mb-3">Newsletter</h5>
                        <div className="flex gap-2">
                            <input className="w-full rounded-md bg-neutral-800 border border-neutral-700 p-2 text-sm outline-none focus:border-amber-500" placeholder="Email address" />
                            <button className="bg-amber-500 text-black px-4 rounded-md font-semibold">Join</button>
                        </div>
                    </div>
                </div>
                <div className="py-5 text-sm text-neutral-400 flex items-center justify-between">
                    <span>© 2025 PHOTOLAND. All rights reserved.</span>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-amber-400">Privacy</a>
                        <a href="#" className="hover:text-amber-400">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;