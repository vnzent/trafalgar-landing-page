type ServiceCardProps = {
    icon: string;
    title: string;
    description: string;
}

export default function ServiceCard ({ icon, title, description }: ServiceCardProps) {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <img src={icon} alt={title} className="mb-6 w-20 h-15 pr-7"/>
            <h3 className="text-lg text-black mulish-bold">{title}</h3>
            <p className="text-4sm text-zinc-400 mulish-font">{description}</p>
        </div>
    );
}