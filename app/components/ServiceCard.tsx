type ServiceCardProps = {
    icon: string;
    title: string;
    description: string;
    linkText?: string;
    className?: string;
    imgClassName?: string
}

export default function ServiceCard ({ icon, title, description, linkText, className, imgClassName}: ServiceCardProps) {
    return (
        <div className={`relative rounded-xl shadow-md p-6 hover:shadow-lg transition ${className}`}>
            <img src={icon} alt={title} className={`${imgClassName}`} />
            <h3 className="text-lg lg:text-2xl text-black mulish-bold mb-4">{title}</h3>
            <p className="text-4sm lg:text-lg text-zinc-400 mulish-font">{description}</p>
            <a href="#" className={`text-blue-400 mulish-bold hover:underline mt-5 pt-5 inline-block ${className}`}>{linkText}</a>
        </div>
    );
}