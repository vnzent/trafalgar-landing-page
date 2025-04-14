type LogoProps = {
    className?: string;
    logoName?: string;
    spanName?: string;
}

export default function Logo( { className, logoName, spanName }: LogoProps) {
    return (
        <div className={`${className}`}>
            <div className={`lg:w-8 lg:h-8 text-xl mulish-bold flex items-center justify-center rounded-full ${logoName}`}>
                T
            </div>
            <span className={`text-4lg lg:text-xl mulish-bold ${spanName}`}>Trafalgar</span>
        </div>
    );
}