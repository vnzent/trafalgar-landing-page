type SubHeadingProps = {
    subheading: React.ReactNode;
    paragraph?: string;
}

export default function HeadingLine( { subheading, paragraph }: SubHeadingProps) {
    return (
        <div>
            <h2 className="text-xl md:text-2xl lg:text-4xl mulish-bold text-black leading-[4rem]">{subheading}</h2>
            <div className="w-10 h-0.5 lg:w-15 lg:h-0.5 bg-black mt-5"></div>
            <p className="text-lg md:text-2lg lg:text-4lg text-zinc-400 mulish-font leading-relaxed pt-7 w-110 h-45">{paragraph}</p>
        </div>    
    );
}