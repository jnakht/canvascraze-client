
const Footer = () => {
    return (
        <div className="mt-[56px]">
            <footer className="footer sm:footer-horizontal bg-[#F6F6F0] text-base-content p-10 h-[470px] flex justify-evenly  items-center relative">
                {/* top border */}
                <div className="bg-[url('https://ik.imagekit.io/ghlgoepam/New%20Folder/h1-border-bottom%20(1).jpg?updatedAt=1746003376650')] bg-no-repeat bg-cover absolute w-full top-0 h-2"></div>
                <div className="flex">
                    <aside className="">
                    <h3 className="text-[#a55e3f] font-merriweather text-[35px] font-medium tracking-[5px]">Krafti</h3>
                    <p className="max-w-[70%] font-lato text-[#58595b] text-[15px] font-light mt-6">
                        Your new handmade and artisan site
                        has already been created.


                    </p>
                </aside>
                <nav className="flex flex-col gap-3">
                    <h6 className="uppercase text-[#a55e3f] font-merriweather text-[16px]  font-bold tracking-[5px]">About Us</h6>
                    <a className="link link-hover  font-lato text-[#58595b] text-[15px] font-light">About Me</a>
                    <a className="link link-hover  font-lato text-[#58595b] text-[15px] font-light">Our Services</a>
                    <a className="link link-hover  font-lato text-[#58595b] text-[15px] font-light">Our Team</a>
                    <a className="link link-hover  font-lato text-[#58595b] text-[15px] font-light">Contact Us</a>
                </nav>
                </div>
               
                <nav className="gap-3">
                    <h6 className="uppercase text-[#a55e3f] font-merriweather text-[16px]  font-bold tracking-[5px]">Help</h6>
                    <a className="link link-hover  font-lato text-[#58595b] text-[15px] font-light">About Us</a>
                    <a className="link link-hover  font-lato text-[#58595b] text-[15px] font-light">Get In Touch</a>
                    <a className="link link-hover  font-lato text-[#58595b] text-[15px] font-light">Discounts</a>
                    <a className="link link-hover  font-lato text-[#58595b] text-[15px] font-light">Returns</a>
                </nav>
                
                <nav className="h-[140px] ">
                    <h6 className="uppercase text-[#a55e3f] font-merriweather text-[16px] font-bold tracking-[5px]">Instagram</h6>

                </nav>
            </footer>
            <footer className="footer sm:footer-horizontal footer-center bg-[#A55E3F]  p-2 text-white">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Canvascraze</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;