import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";


const CategoriesSection = () => {
    const [categories, setCategories] = useState(null);
    const numberOfCategory = [1, 1, 1, 1, 1, 1];
    useEffect(() => {
        fetch(`http://localhost:5000/categories`)
        .then(res => res.json())
        .then(data => {
            setCategories(data);
        })
    } ,[])
    return (
        <div className="mt-[100px] min-h-fit pb-20">
            {/* full section container */}
            <div className="relative h-full w-full">


                {/* borders */}
                {/* left border */}
                <div className="bg-[url('https://ik.imagekit.io/ghlgoepam/New%20Folder/h2-border-left.jpg?updatedAt=1746003441583')] bg-no-repeat bg-cover absolute w-2 h-full">
                </div>
                {/* right border */}
                <div className="bg-[url('https://ik.imagekit.io/ghlgoepam/New%20Folder/h2-border-right.jpg?updatedAt=1746003441832')] bg-no-repeat bg-cover absolute w-2 right-0 h-full">
                </div>
                {/* top border */}
                <div className="bg-[url('https://ik.imagekit.io/ghlgoepam/New%20Folder/h1-border-bottom%20(1).jpg?updatedAt=1746003376650')] bg-no-repeat bg-cover absolute w-full top-0 h-2">
                </div>
                {/* bottom border */}
                <div className="bg-[url('https://ik.imagekit.io/ghlgoepam/New%20Folder/h1-border-bottom.jpg?updatedAt=1746002955755')] bg-no-repeat bg-cover absolute w-full bottom-0 h-2">
                </div>










                {/* upper section start*/}
                <div className="flex flex-col  justify-end items-center text-center h-[300px] space-y-2">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="48.047px" height="38.658px" viewBox="0 0 48.047 38.658" enable-background="new 0 0 48.047 38.658" xml:space="preserve">
                        <path fill="#2C2D7F" d="M34.547,38.658l-5.596-1.067c0,0-8.27,1.392-17.483-3.021C2.013,30.042,0,26.086,0,26.086
	s5.729-1.608,15.894,2.123c6.084,2.232,12.955,8.886,12.955,8.886l0.076,0.046l5.534,1.075L34.547,38.658z"></path>
                        <path fill="#2C2D7F" d="M29.507,21.558l-3.253-0.62c0,0-4.807,0.808-10.162-1.756c-5.497-2.632-6.666-4.931-6.666-4.931
	s3.33-0.935,9.238,1.233c3.537,1.297,7.529,5.165,7.529,5.165l0.045,0.026l3.217,0.625L29.507,21.558z"></path>
                        <path fill="#2C2D7F" d="M24.006,14.628l2.545-0.485c0,0,3.763,0.632,7.952-1.374c4.302-2.06,5.217-3.859,5.217-3.859
	s-2.605-0.732-7.229,0.965c-2.768,1.016-5.893,4.042-5.893,4.042l-0.034,0.021l-2.518,0.489L24.006,14.628z"></path>
                        <path fill="#2C2D7F" d="M22.479,29.05l4.141-0.79c0,0,6.123,1.029,12.939-2.235c7-3.352,8.488-6.279,8.488-6.279
	s-4.24-1.191-11.763,1.57c-4.505,1.652-9.588,6.577-9.588,6.577l-0.056,0.034l-4.097,0.797L22.479,29.05z"></path>
                        <path fill="#2C2D7F" d="M23.032,11.538l-0.36-1.753c0,0-1.395-2.235-1.218-5.438C21.637,1.059,22.544,0,22.544,0
	s1.153,1.471,1.288,4.87c0.08,2.033-1.029,4.825-1.029,4.825l-0.003,0.028l0.35,1.735L23.032,11.538z"></path>
                    </svg>

                    <h3 className="text-[#a55e3f] font-merriweather text-[35px] font-medium tracking-[5px]">CATEGORIES</h3>
                    <p className="max-w-[40%] font-lato text-[#58595b] text-[15px] font-light">Explore our categories to discover the latest arrivals, artisan creations, exclusive collections, and eco-friendly decor — all crafted to inspire your space.</p>
                </div>
                {/* uppper section end */}

                {/* lower section start*/}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[90%] mx-auto pt-6 ">
                    {
                        categories.map(category => <CategoryCard category={category}></CategoryCard>)
                    }
                </div>
                {/* lower section end */}

                {/* extra space on  bottom like padding
                 */}
                 <div className="h-[80px] w-full">

                 </div>



            </div>
        </div>
    );
};

export default CategoriesSection;