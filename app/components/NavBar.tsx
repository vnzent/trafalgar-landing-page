import Logo from "./Logo"

export default function NavBar() {
    return (
        <nav className="flex items-center justify-between mt-10 lg:mt-12">
            <Logo 
                className="flex items-center gap-3 ml-20 pl-20 lg:ml-30 lg:pl-40"
                logoName="bg-blue-500 text-white"
                spanName="text-slate-700"
            />
                <ul className="flex gap-8 lg:gap-10 lg:text-xl text-zinc-800 mr-20 pr-20 lg:mr-30 lg:pr-30 mulish-font">
                    <li><a href="#" className="opacity-100 text-black mulish-bold">Home</a></li>
                    <li><a href="#" className="opacity-50">Find a Doctor</a></li>
                    <li><a href="#" className="opacity-50">Apps</a></li>
                    <li><a href="#" className="opacity-50">Testimonials</a></li>
                    <li><a href="#" className="opacity-50">About us</a></li>
                </ul>
        </nav>
    );
}