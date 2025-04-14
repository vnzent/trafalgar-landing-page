type LogoProps = {
    className?: string;
    logoName?: string;
    spanName?: string;
}

export default function Logo( { className, logoName, spanName }: LogoProps) {
    return (
        <div className={`${className}`}>
            <div className={`w-8 h-8 lg:w-10 lg:h-10 text-xl mulish-bold flex items-center justify-center rounded-full ${logoName}`}>
                T
            </div>
            <span className={`text-4lg lg:text-xl text-lg mulish-bold ${spanName}`}>Trafalgar</span>
        </div>
    );
}