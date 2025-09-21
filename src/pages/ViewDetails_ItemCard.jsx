import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ViewDetails_ItemCard = () => {
    const params = useParams();
    console.log(params);
    const [item, setItem] = useState(null);


    useEffect(() => {
        fetch(`https://canvascraze-server-2.onrender.com/arts/${params.id}`)
        .then(res => res.json())
        .then(data => {
             setItem(data);
             console.log("This is the single data", data);
        })
    }, []);

    return (
        <div className="flex max-w-[90%] mx-auto mt-[80px]">
            <div className="">
                <div className="border border-[#AA0009] w-[650px] h-[900px] overflow-hidden p-10">
                <img 
                    className="border h-full w-full scale-125 mx-auto my-auto"
                    src={item?.imageURL} alt="" 
                />
            </div>
            </div>
            <div className="flex flex-col ml-10">
            <h3 className="text-[#a55e3f] font-merriweather text-[35px] font-medium tracking-[5px]">{item?.itemName}</h3>
            <h2 className="text-[#a55e3f] font-merriweather text-[18px] font-medium tracking-[5px]">{item?.price}</h2>
            <p className="font-lato text-[#58595b] text-[15px] font-light">{item?.shortDescription}</p>
            <p><span className="text-[#a55e3f] font-merriweather text-[18px] font-medium tracking-[5px]">Category: </span> <span className="font-lato text-[#58595b] text-[15px] font-light">{item?.subcategoryName}</span></p>
            <p><span className="text-[#a55e3f] font-merriweather text-[18px] font-medium tracking-[5px]">Rating: </span> <span className="font-lato text-[#58595b] text-[15px] font-light">{item?.rating}</span></p>
            <p><span className="text-[#a55e3f] font-merriweather text-[18px] font-medium tracking-[5px]">Customization: </span> <span className="font-lato text-[#58595b] text-[15px] font-light">{item?.customization}</span></p>
            <p><span className="text-[#a55e3f] font-merriweather text-[18px] font-medium tracking-[5px]">Stock Status: </span> <span className="font-lato text-[#58595b] text-[15px] font-light">{item?.stockStatus}</span></p>
           
        </div>
        </div>
    );
};

export default ViewDetails_ItemCard;