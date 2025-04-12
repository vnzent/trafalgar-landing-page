import ServiceCard from "./ServiceCard";

export default function HeroSection () {
    const services = [
        {
            icon:"assets/search-doctor.svg",
            title:"Search doctor",
            description:"Choose your doctor from thousands of specialist, general, and trusted hospitals",
        },
        {
            icon:"assets/online-pharmacy.svg",
            title:"Online pharmacy",
            description:"Buy your medicines with our mobile application with a simple delivery system",
        },
        {
            icon:"assets/consultation.svg",
            title:"Consultation",
            description:"Free consultation with our trusted doctors and get the best recommendations",
        },
        {
            icon:"assets/details-info.svg",
            title:"Details info",
            description:"Free consultation with our trusted doctors and get the best recommendations",
        },
        {
            icon:"assets/emergency-care.svg",
            title:"Emergency care",
            description:"You can get 24/7 urgent care for yourself or your children and your lovely family",
        },
        {
            icon:"assets/tracking.svg",
            title:"Tracking",
            description:"Track and save your medical history and health data",
        },
    ];
    return (
        <section className="flex flex-col items-center justify-center mt-15">
            <h2 className="text-2xl text-black mulish-bold">Our services</h2>
            <div className="w-10 h-0.5 bg-black mt-5"></div>
            <p className="w-220 text-center text-zinc-400 mulish-font mt-7">We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </div>
        </section>
    );
}