import Button from "./Button";
import SubHeading from "./SubHeading";

export default function HealthCareSection() {
    return (
        <section className="flex flex-col-reverse md:flex-row items-center justify-between container mx-auto mt-10">
            <img src="assets/trafalgar-illustration.svg" alt="trafalgar" className="w-190 h-200 ml-5" />
            <div className="mr-18 pr-32">
                <SubHeading
                    subheading = {
                      <>
                        Leading healthcare <br/>providers
                      </>
                    }
                    paragraph="Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it's not just work. We take pride in the solutions we deliver"
                  />
                <Button onClick = {() => void 0} className="bg-white text-blue-500 border border-blue-500 mulish-bold hover:bg-blue-500 hover:text-white">Learn more</Button>
                <img src="assets/three-dots.svg" alt="dots" className="absolute right-1 pt-15 w-15 lg:w-25" />
            </div>
        </section>
    );
}