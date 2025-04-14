import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-[#67C3F3] to-[#5A98F2] text-white px-8 py-12 lg:px-40 mt-30">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">

                {/* Kolom Logo + Deskripsi */}
                <div className="md:col-span-1">
                    <div className="mb-4">
                        <Logo />
                    </div>
                    <p className="text-white opacity-80 leading-relaxed mt-4">Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
                    <p className="mt-6 text-white opacity-60 text-sm">©Trafalgar PTY LTD 2020. All rights reserved</p>
                </div>

                {/* Kolom Company */}
                <div>
                    <h3 className="font-semibold text-lg mb-4">Company</h3>
                    <ul className="space-y-2 opacity-80">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">Find a doctor</a></li>
                        <li><a href="#">Apps</a></li>
                    </ul>
                </div>

                {/* Kolom Region */}
                <div>
                    <h3 className="font-semibold text-lg mb-4">Region</h3>
                    <ul className="space-y-2 opacity-80">
                        <li><a href="#">Indonesia</a></li>
                        <li><a href="#">Singapore</a></li>
                        <li><a href="#">Hongkong</a></li>
                        <li><a href="#">Canada</a></li>
                    </ul>
                </div>

                {/* Kolom Help */}
                <div>
                    <h3 className="font-semibold text-lg mb-4">Help</h3>
                    <ul className="space-y-2 opacity-80">
                        <li><a href="#">Help center</a></li>
                        <li><a href="#">Contact support</a></li>
                        <li><a href="#">Instructions</a></li>
                        <li><a href="#">How it works</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}