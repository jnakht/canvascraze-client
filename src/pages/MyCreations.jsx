import { useEffect, useState } from "react";
import { authContextHook } from "../utility/AuthHooks";
import GalleryCard from "../components/GalleryCard";

const MyCreations = () => {
    const {user} = authContextHook();
    const [currentUser, setCurrentUser] = useState(user);
    const [myCreations, setMyCreations] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/arts/${currentUser.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setMyCreations(data);
        })
    } ,[])
    return (
        <div>
            <h3>my creations : {currentUser.email}</h3>
            <h3>Number of Creatins : {myCreations.length}</h3>
            <div className="flex flex-col gap-6 max-w-5/6 mx-auto"> 
                {
                    myCreations.map(creation => <GalleryCard craft={creation}></GalleryCard>)
                }
            </div>

        </div>
    );
};

export default MyCreations;