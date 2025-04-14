import Button from "./Button";

export default function Header() {
    return (
        <section className="flex flex-col-reverse md:flex-row items-center justify-between container mx-auto">
            <img src="assets/three-dots.svg" alt="dots" className="absolute left-0 top-1/5 w-15 lg:w-25 h-auto" />
            <div className="w-full mt-10 pt-20 pl-23">
                <h1 className="text-xl md:text-3xl lg:text-5xl mulish-bold text-black leading-tight">Virtual healthcare <br/>for you</h1>
                <p className="md:text-3lg lg:text-xl text-zinc-500 mulish-font leading-relaxed pt-5 mb-7">Trafalgar provides progressive, and affordable<br/> healthcare, accessible on mobile and online<br/> for everyone</p>
                <Button className="bg-blue-500 text-white hover:bg-white hover:text-blue-500 hover:border border-blue-500 mulish-bold mt-8" onClick={() => void 0}>Consult today</Button>
            </div>
            <img src="assets/header-illustration.svg" alt="header-illustration" className="lg:w-190 lg:h-200 w-max-200 h-max-200 pt-30 pr-10" />
        </section>
    );
}