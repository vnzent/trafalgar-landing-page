type ServiceCardProps = {
    icon: string;
    title: string;
    description: string;
}

export default function ServiceCard ({ icon, title, description }: ServiceCardProps) {
    return (
        <div className="bg-blue-50 rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <img src={icon} alt={title} className="mt-5 mb-6 w-20 h-15 lg:w-25 lg:h-20  pr-7"/>
            <h3 className="text-lg lg:text-2xl text-black mulish-bold mb-4">{title}</h3>
            <p className="text-4sm lg:text-lg text-zinc-400 mulish-font">{description}</p>
        </div>
    );
}