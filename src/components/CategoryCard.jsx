import React from 'react';

const CategoryCard = ({category}) => {
    const {subcategory_Name, image, description} = category;
    return (
        <div className="card bg-base-100">
            <figure className=''>
                <img
                    className={`h-[393px] hover:scale-101 transition ease-in duration-300`}
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body text-center mt-10">
                <h2  className="text-[#a55e3f] font-merriweather text-[18px] font-medium tracking-[3px] uppercase">{subcategory_Name}</h2>
                <p className=" font-lato text-[#58595b] text-[15px] font-light">{description}</p>
                <div className="card-actions justify-center mt-10 mb-10">
                    <button className="cursor-pointer text-[#a55e3f] text-xs font-merriweather font-light tracking-[2px] uppercase">SEE MORE</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;