import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-sky-400 to-blue-400 text-white px-8 py-12 lg:px-70 mt-30 h-full">
            <div className="grid grid-cols-1 md:grid-cols-4 mulish-font text-sm mt-10">

                {/* Kolom Logo + Deskripsi */}
                <div className="md:col-span-1 w-77">
                    <div className="mb-4">
                        <Logo 
                            className="flex items-center gap-3"
                            logoName="bg-white text-sky-500"
                            spanName="text-white"
                        />
                    </div>
                    <p className="text-white opacity-80 leading-relaxed mt-4">Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
                    <p className="mt-6 text-white opacity-70 text-sm">©Trafalgar PTY LTD 2020. All rights reserved</p>
                </div>
   
                <div className="ml-20 pl-40">
                    <h3 className="mulish-bold text-lg mb-4">Company</h3>
                    <ul className="space-y-2 opacity-80">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">Find a doctor</a></li>
                        <li><a href="#">Apps</a></li>
                    </ul>
                </div>

                <div className="ml-20 pl-20">
                    <h3 className="mulish-bold text-lg mb-4">Region</h3>
                    <ul className="space-y-2 opacity-80">
                        <li><a href="#">Indonesia</a></li>
                        <li><a href="#">Singapore</a></li>
                        <li><a href="#">Hongkong</a></li>
                        <li><a href="#">Canada</a></li>
                    </ul>
                </div>

                <div className="ml-10 pl-10">
                    <h3 className="mulish-bold text-lg mb-4">Help</h3>
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