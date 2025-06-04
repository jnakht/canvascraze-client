import { useEffect, useState } from "react";
import { authContextHook } from "../utility/AuthHooks";
import GalleryCard from "../components/GalleryCard";

const MyCreations = () => {
    const { user } = authContextHook();
    const [currentUser, setCurrentUser] = useState(user);
    const [myCreations, setMyCreations] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/arts/${currentUser.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyCreations(data);
            })
    }, [])
    return (
        <div>
            <h3>my creations : {currentUser.email}</h3>
            <h3>Number of Creatins : {myCreations.length}</h3>
            <div className="flex flex-col gap-6 max-w-5/6 mx-auto">
                {/* my creations card */}
                {/* {
                    myCreations.map(creation => <GalleryCard craft={creation}></GalleryCard>)
                } */}

                {/* we are using my creations table */}
                <table className="border border-[#AA0009] table-auto">
                    <thead >
                        <tr className="text-[#a55e3f] font-merriweather text-[18px] font-medium tracking-[3px] uppercase">
                            <th className="border border-[#AA0009] py-8">Item Name</th>
                            <th className="border border-[#AA0009] py-8">Subcategory Name</th>
                            <th className="border border-[#AA0009] py-8">Rating</th>
                            <th className="border border-[#AA0009] py-8">Price</th>
                            <th className="border border-[#AA0009] py-8">Details</th>
                        </tr>
                    </thead>
                    <tbody className="text-center font-lato text-[#58595b] text-[15px] font-light">
                        {
                            myCreations.map(creation =>
                                <tr>
                                    <td className="p-8 border-r border-[#AA0009] ">{creation.itemName}</td>
                                    <td  className="p-8 border-r border-[#AA0009] ">{creation.subcategoryName}</td>
                                    <td  className="p-8 border-r border-[#AA0009] ">{creation.rating}</td>
                                    <td  className="p-8 border-r border-[#AA0009] ">{creation.price}</td>
                                    <td  className="p-8">View Details</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default MyCreations;