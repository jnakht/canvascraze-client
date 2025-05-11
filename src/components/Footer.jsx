
const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-[#F6F6F0] text-base-content p-10 h-[470px] flex  justify-around items-center">
                <aside>
                    <h3 className="text-[#a55e3f] font-merriweather text-[35px] font-medium tracking-[5px]">Krafti</h3>
                    <p className="max-w-[70%] font-lato text-[#58595b] text-[15px] font-light mt-4">
                        Your new handmade and artisan site
                        has already been created.


                    </p>
                </aside>
                <nav>
                    <h6 className="uppercase text-[#a55e3f] font-merriweather text-[16px]  font-bold tracking-[5px]">About Us</h6>
                    <a className="link link-hover  font-lato text-[#58595b] text-[15px] font-light">About Me</a>
                    <a className="link link-hover  font-lato text-[#58595b] text-[15px] font-light">Our Services</a>
                    <a className="link link-hover  font-lato text-[#58595b] text-[15px] font-light">Our Team</a>
                    <a className="link link-hover  font-lato text-[#58595b] text-[15px] font-light">Contact Us</a>
                </nav>
                <nav>
                    <h6 className="uppercase text-[#a55e3f] font-merriweather text-[16px]  font-bold tracking-[5px]">Help</h6>
                    <a className="link link-hover  font-lato text-[#58595b] text-[15px] font-light">About Us</a>
                    <a className="link link-hover  font-lato text-[#58595b] text-[15px] font-light">Get In Touch</a>
                    <a className="link link-hover  font-lato text-[#58595b] text-[15px] font-light">Discounts</a>
                    <a className="link link-hover  font-lato text-[#58595b] text-[15px] font-light">Returns</a>
                </nav>
                <nav className="h-[140px]">
                    <h6 className="uppercase text-[#a55e3f] font-merriweather text-[16px] font-bold tracking-[5px]">Instagram</h6>
                    
                </nav>
            </footer>
        </div>
    );
};

export default Footer;