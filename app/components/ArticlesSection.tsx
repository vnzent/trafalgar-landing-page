import Button from "./Button";
import ServiceCard from "./ServiceCard";

export default function ArticlesSection() {
    const articles = [
        {
          icon:"assets/disease-detection.png",
          title:"Disease detection, check up in the laboratory",
          description:"In this case, the role of the health laboratory is very important to do a disease detection...",
        },
        {
          icon:"assets/herbal-medicines.png",
          title:"Herbal medicines that are safe for consumption",
          description:"Herbal medicine is widely used at this time because of its very good for your health...",
        },
        {
          icon:"assets/natural-care.png",
          title:"Natural care for healthy facial skin",
          description:"A healthy lifestyle should start from now and also for your skin health. There are some...",
        }
      ]
      
    return (
        <section className="flex flex-col items-center justify-center mt-10">
        <h2 className="text-2xl lg:text-3xl text-black mulish-bold">Check out our latest article</h2>
        <div className="w-10 h-0.5 lg:w-15 lg:h-0.5 bg-black mt-7 lg:mt-10"></div>
        <img src="assets/lonjong-kanan.svg" alt="lonjong-kanan" className="absolute right-0 -z-10 lg:w-200 lg:h-200" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 w-300 max-w-400 h-152 max-h-200 mt-10 pt-15">
          {articles.map((article, index) => (
            <ServiceCard
              key={index}
              icon={article.icon}
              imgClassName="w-full h-55 mb-8"
              title={article.title}
              description={article.description}
              linkText="Read more"
              className="bg-white"
            />
          ))}
        </div>
        <Button onClick = {() => void 0} className="bg-white text-blue-500 border border-blue-500 mulish-bold hover:bg-blue-500 hover:text-white mt-20">View all</Button>
      </section>
    );
}