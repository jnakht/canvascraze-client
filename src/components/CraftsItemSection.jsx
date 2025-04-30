import { useEffect, useState } from "react";
import CraftItemSectionCard from "./CraftItemSectionCard";

const CraftsItemSection = () => {
    const [randomItems, setRandomItems] = useState([]);
    useEffect( () => {
        const fetchFunction = () => {
            fetch(`http://localhost:5000/random`)
            .then(res => res.json())
            .then(data => {
            setRandomItems(data);
        })
        }
        fetchFunction();
        const interval = setInterval(fetchFunction, 18000000);
        return () => clearInterval(interval);
    },[])
    return (
        <div>
            <h3>The random data size is : {randomItems.length}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-x divide-y divide-[#AA0009] relative">
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
                {
                    randomItems.map(item => <CraftItemSectionCard item={item}></CraftItemSectionCard>)
                }
            </div>
        </div>
    );
};

export default CraftsItemSection;