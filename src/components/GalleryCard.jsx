import { useState } from "react";


const GalleryCard = ({ craft }) => {
    // const { itemName, subcategoryName, imageURL, price, rating, customization, processingTime, stockStatus, name, email, shortDescription } = craft;
    const [hover, setHover] = useState(false);
    return (
        <div onMouseOver={() => setHover(true)} 
        onMouseOut={() => setHover(false)}
         className=" bg-base-100  h-[513px] w-full border border-[#AA0009] rounded-lg relative">


            {/* jikmik border start on each card */}


            {/* left border */}
            <div className="bg-[url('https://ik.imagekit.io/ghlgoepam/New%20Folder/h2-border-left.jpg?updatedAt=1746003441583')] bg-no-repeat bg-cover absolute w-1 h-full">
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

            {/* jikmik border end on each card */}

        <figure className="px-20 pt-20 relative  h-[65%]">
            <img
                src={craft?.imageURL}
                className="rounded-xl scale-125" />
                 <button className={`btn bg-[url('https://ik.imagekit.io/ghlgoepam/New%20Folder/1746011756191.png_image.png?updatedAt=1746012342488')] bg-center bg-no-repeat font-bold text-[15px] w-[191px] h-[50px] absolute top-37 left-20 text-white border-none transition-opacity duration-300 ease-in ${hover ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>Add To Cart</button>
                
        </figure>
        <div className="card-body items-center text-center ">
            <h2 className="text-[#a55e3f] font-merriweather text-[18px] font-medium tracking-[5px]">BERRIES JAM</h2>
            <p className="font-lato text-[#58595b] text-[15px] font-light">Home Decor</p>
            <p className="font-lato text-[#a55e3f] font-bold text-[15px] tracking-[2px]">$29.99</p>
            
        </div>
       
    </div>
    );
};

export default GalleryCard;