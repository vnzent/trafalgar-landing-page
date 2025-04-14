import ServiceCard from "./ServiceCard";
import Button from "./Button";
import SubHeading from "./SubHeading";

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
            <img src="assets/lonjong.svg" alt="lonjong" className="absolute left-0 -z-10 w-200 h-250 lg:pb-50 mb-20" />
            <img src="assets/five-dots.svg" alt="five-dots" className="absolute right-0 -z-10 pr-28 mr-15 pt-18"/>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-250 max-w-300 h-180 mt-5 pt-10 lg:mt-10 lg:pt-15 mb-20">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        icon={service.icon}
                        imgClassName="mt-5 mb-6 pr-7 w-20 h-15 lg:w-25 lg:h-20"
                        title={service.title}
                        description={service.description}
                        className="bg-white"
                    />
                ))}
            </div>
            <div className="pt-15">
                <Button onClick = {() => void 0} className="bg-white text-blue-500 border border-blue-500 mulish-font hover:bg-blue-500 hover:text-white mb-10">Learn more</Button>
            </div>
        </section>
    );
}