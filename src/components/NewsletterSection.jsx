
const NewsletterSection = () => {
    return (
        <div className="h-[70vh] flex flex-col justify-center items-center">
            {/* upper content */}
            <div className="flex-1 flex flex-col justify-end items-center border max-h-[50%] text-center">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="29.325px" height="38.363px" viewBox="0 0 29.325 38.363" enable-background="new 0 0 29.325 38.363" xml:space="preserve">
                    <path fill="#2C2D7F" d="M12.946,38.154c0,0,1.169-3.487,1.503-4.275c0,0-0.158-1.611-2.012-2.792
	c-1.855-1.18-6.858-2.864-9.227-4.577C0.84,24.797,0,21.431,0,21.431s2.684-0.108,5.282,2.128s4.764,5.83,6.667,6.361
	c0,0,0.499-1.706,0.1-2.632c-0.399-0.925-2.628-1.944-2.74-3.705c0,0,1.793-0.151,2.635,0.906c0.842,1.057,1.133,3.399,0.647,5.85
	c0,0,2.556,1.544,2.42,3.563c0,0-1.213,3.494-1.561,4.46L12.946,38.154z"></path>
                    <path fill="#2C2D7F" d="M15.752,33.462c0,0-0.044-1.181,1.968-2.811c0,0-0.097-1.247-0.019-1.893c0,0-0.716-1.356-0.296-3.034
	s2.694-2.268,2.694-2.268s-0.1,2.18-0.682,3.273c-0.582,1.094-1.257,2.427-1.153,3.495c0,0,1.264-0.886,1.774-1.057
	c0,0,2.898-7.606,9.017-9.974c0,0,1.301,3.461-1.831,6.439C24.093,28.612,20.028,28.657,15.752,33.462z"></path>
                    <path fill="#2C2D7F" d="M15.472,31.917c0,0-0.547-2.715-0.663-4.486c-0.116-1.771-1.482-3.741-2.194-4.305
	c-0.712-0.563-6.41-3.121-8.104-5.176c-1.695-2.055-2.463-4.895-2.124-6.529c0,0,2.739-0.076,4.536,2.119
	c1.797,2.196,2.134,5.86,3.067,6.98c0,0,0.915,0.79,1.748,1.158c0,0-2.668-4.696-2.389-6.681c0,0,1.954,1.369,2.485,2.519
	c0.531,1.15,0.143,2.99,0.143,2.99s0.184,1.174,0.53,1.485c0.345,0.311,2.513,1.987,2.883,4.554
	C15.759,29.111,15.472,31.917,15.472,31.917z"></path>
                    <path fill="#2C2D7F" d="M15.752,24.485c0,0-0.41-1.022,0.848-2.144c0,0-0.351-1.579-0.198-3.161c0,0-0.748-2.071-0.23-3.473
	c0.519-1.402,2.288-2.871,2.288-2.871s0.302,2.003-0.432,4.175c-0.734,2.172-1.16,3.329-0.897,4.75l1.958-1.464
	c0,0,0.093-3.897,1.743-6.66s4.323-4.666,4.323-4.666s1.177,2.954-0.555,6.993C22.867,20.005,17.903,20.745,15.752,24.485z"></path>
                    <path fill="#2C2D7F" d="M14.665,22.526c0,0-0.942-1.285-1.469-3.344s-2.564-7.771-2.044-12S14.425,0,14.425,0
	s2.874,2.798,2.399,6.486c-0.475,3.688-3.833,9.204-3.833,9.204L14.665,22.526z"></path>
                </svg>
                <h3 className="text-[#a55e3f] font-merriweather text-[35px] font-medium tracking-[5px]">NEWSLETTER</h3>
                <p className="max-w-[60%] font-lato text-[#58595b] text-[15px] font-light">Subscribe to our newsletter for the latest arrivals, artisan stories, exclusive offers, and eco-friendly decor tips — straight to your inbox.</p>
            </div>
            {/* form with subscribe button */}
            <div className="w-[50vw] mx-auto flex-1  mt-[38px]">
                <form className=" flex  items-center">
                    <input type="email" placeholder="Your Mail" className="pl-4 border border-[#AA0009] w-[80%] h-[44px] focus:outline-none " />
                    <div className="btn w-[20%] h-[46px] text-[11px] font-lato text-[#a55e3f] tracking-[5px] relative -ml-0.5">
                        <input type="submit" value="SUBSCRIBE" />




                        {/* jikmik border start on the subscribe button  */}


                        {/* left border */}
                        <div className="bg-[url('https://ik.imagekit.io/ghlgoepam/New%20Folder/h2-border-left.jpg?updatedAt=1746003441583')] bg-no-repeat bg-cover absolute left-0 w-1 h-full">
                        </div>
                        {/* right border */}
                        <div className="bg-[url('https://ik.imagekit.io/ghlgoepam/New%20Folder/h2-border-right.jpg?updatedAt=1746003441832')] bg-no-repeat bg-cover absolute w-1 right-0 h-full">
                        </div>
                        {/* top border */}
                        <div className="bg-[url('https://ik.imagekit.io/ghlgoepam/New%20Folder/h1-border-bottom%20(1).jpg?updatedAt=1746003376650')] bg-no-repeat bg-cover absolute w-full top-0 h-1">
                        </div>
                        {/* bottom border */}
                        <div className="bg-[url('https://ik.imagekit.io/ghlgoepam/New%20Folder/h1-border-bottom.jpg?updatedAt=1746002955755')] bg-no-repeat bg-cover absolute w-full bottom-0 h-1">
                        </div>

                        {/* jikmik border end on the subscribe button */}





                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewsletterSection;