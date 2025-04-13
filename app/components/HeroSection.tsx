import ServiceCard from "./ServiceCard";
import Button from "./Button";

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
        <section className="flex flex-col items-center justify-center mt-20 lg:mt-50">
            <h2 className="text-2xl lg:text-3xl text-black mulish-bold">Our services</h2>
            <div className="w-10 h-0.5 lg:w-15 lg:h-0.5 bg-black mt-7 lg:mt-10"></div>
            <p className="w-220 lg:w-250 text-center text-zinc-400 mulish-font mt-7 lg:mt-10">We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
            <img src="assets/lonjong.svg" alt="lonjong" className="absolute left-0 -z-10 lg:w-270 lg:h-270 lg:pb-30" />
            <img src="assets/five-dots.svg" alt="five-dots" className="absolute right-0 -z-10 lg:pr-70 lg:mr-15 lg:pt-35"/>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-280 max-w-300 h-190 mt-5 pt-10 lg:mt-10 lg:pt-15">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </div>
            <div className="pt-15">
                <Button onClick = {() => void 0} className="bg-white text-blue-500 border border-blue-500 mulish-font hover:bg-blue-500 hover:text-white">Learn more</Button>
            </div>
        </section>
    );
}