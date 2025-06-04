import { useState } from "react";
import { handleViewDetails } from "../utility/utilities";
import { useNavigate } from "react-router-dom";

const CraftItemSectionCard = ({item}) => {
    // const { itemName, subcategoryName, imageURL, price, rating, customization, processingTime, stockStatus, name, email, shortDescription } = card;
    const [hover, setHover] = useState(false);
    const navigate = useNavigate();
    return (
        <div onClick={() => handleViewDetails(navigate, item._id)} onMouseOver={() => setHover(true)} 
        onMouseOut={() => setHover(false)}
         className=" bg-base-100  h-[513px] w-full">
        <figure className="px-10 pt-10 relative  h-[70%]">
            <img
                src={item?.imageURL}
                className="rounded-xl scale-125" />
                 <button className={`btn bg-[url('https://ik.imagekit.io/ghlgoepam/New%20Folder/1746011756191.png_image.png?updatedAt=1746012342488')] bg-center bg-no-repeat font-bold text-[15px] w-[191px] h-[50px] absolute top-37 left-14 text-white border-none transition-opacity duration-300 ease-in ${hover ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>Add To Cart</button>
                
        </figure>
        <div className="card-body items-center text-center ">
            <h2 className="text-[#a55e3f] font-merriweather text-[18px] font-medium tracking-[5px]">BERRIES JAM</h2>
            <p className="font-lato text-[#58595b] text-[15px] font-light">Home Decor</p>
            <p className="font-lato text-[#a55e3f] font-bold text-[15px] tracking-[2px]">$29.99</p>
            
        </div>
       
    </div>
    );
};

export default CraftItemSectionCard;