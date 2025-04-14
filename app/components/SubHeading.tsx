type SubHeadingProps = {
    subheading: React.ReactNode;
    paragraph?: string;
}

export default function HeadingLine( { subheading, paragraph }: SubHeadingProps) {
    return (
        <div>
            <h2 className="text-3xl mulish-bold text-black leading-[3rem]">{subheading}</h2>
            <div className="w-12 h-0.5 bg-black mt-5"></div>
            <p className="text-2lg text-zinc-400 mulish-font leading-relaxed pt-7 w-100 h-40">{paragraph}</p>
        </div>    
    );
}