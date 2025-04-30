
const CraftItemSectionCard = ({item}) => {
    // const { itemName, subcategoryName, imageURL, price, rating, customization, processingTime, stockStatus, name, email, shortDescription } = card;
    return (
        <div className=" bg-base-100  h-[513px] w-full">
        <figure className="px-10 pt-10  h-[70%]">
            <img
                src={item?.imageURL}
                className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center ">
            <h2 className="text-[#a55e3f] font-merriweather text-[18px] font-medium tracking-[5px]">BERRIES JAM</h2>
            <p className="font-lato text-[#58595b] text-[15px] font-light">Home Decor</p>
            <p className="font-lato text-[#a55e3f] font-bold text-[15px] tracking-[2px]">$29.99</p>
            <button className="btn bg-[url('https://ik.imagekit.io/ghlgoepam/New%20Folder/1746009359386.png_image.png?updatedAt=1746009458235')] bg-cover bg-no-repeat font-bold text-[15px] w-[191px] h-[50px]">Add To Cart</button>
        </div>
    </div>
    );
};

export default CraftItemSectionCard;