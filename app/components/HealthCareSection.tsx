import Button from "./Button";
import SubHeading from "./SubHeading";

export default function HealthCareSection() {
    return (
        <section className="flex flex-col-reverse md:flex-row items-center justify-between container mx-auto mt-10">
            <img src="assets/trafalgar-illustration.svg" alt="trafalgar" className="w-150 h-180 ml-7" />
            <div className="mr-15 pr-20">
                <SubHeading
                    subheading = {
                      <>
                        Leading healthcare <br/>providers
                      </>
                    }
                    paragraph="Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it's not just work. We take pride in the solutions we deliver"
                  />
                <Button onClick = {() => void 0} className="bg-white text-blue-500 border border-blue-500 mulish-bold hover:bg-blue-500 hover:text-white">Learn more</Button>
                <img src="assets/three-dots.svg" alt="dots" className="absolute right-1 pt-12 w-20" />
            </div>
        </section>
    );
}