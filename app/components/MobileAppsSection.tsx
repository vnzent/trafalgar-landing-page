import Button from './Button';
import SubHeading from './SubHeading';

export default function MobileAppsSection() {
    return (
        <section className="flex md:flex-row items-center justify-between container mt-15 mx-auto">
            <div className="ml-15 pl-30">
                <SubHeading 
                    subheading = { 
                    <>
                        Download our <br/>mobile apps
                    </>
                }
                paragraph="Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"
                />
                <Button onClick = {() => void 0} className="bg-white text-blue-500 border border-blue-500 mulish-bold hover:bg-blue-500 hover:text-white group">Download <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline w-5 h-5 pl-2 pb-1 group-hover:text-white">
                <path d="M4.81951 1.05554L4.81951 12.6308L2.27646 10.0877C1.92569 9.73698 1.39954 9.73698 1.04878 10.0877C0.698014 10.4385 0.698014 10.9647 1.04878 11.3154L5.08258 15.3492C5.43335 15.7 5.95949 15.7 6.31026 15.3492L10.3441 11.3154C10.6948 10.9647 10.6948 10.4385 10.3441 10.0877C9.9933 9.73698 9.46715 9.73698 9.11638 10.0877L6.57333 12.6308L6.57333 1.05554C6.57333 0.617083 6.22257 0.178627 5.69642 0.178627C5.17027 0.178627 4.81951 0.617083 4.81951 1.05554Z" fill="currentColor"/>
                </svg>
                </Button>
            </div>
            <img src="assets/trafalgar-illustration-2.svg" alt="trafalgar-2" className="w-190 h-200 mr-20" />
        </section>
    );
}