import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ViewDetails_ItemCard = () => {
    const params = useParams();
    console.log(params);
    const [item, setItem] = useState(null);


    useEffect(() => {
        fetch(`http://localhost:5000/arts/${params.id}`)
        .then(res => res.json())
        .then(data => {
             setItem(data);
        })
    }, []);
    
    return (
        <div>
            <h3>{item.itemName}</h3>
            <h3>{item.categoryName}</h3>
            <h3>{item.price}</h3>
            <h3>{item.rating}</h3>
            <h3>{item.customization}</h3>
            <h3>{item.processing_time}</h3>
            <h3>{item.stockStatus}</h3>
            <h3>{item.name}</h3>
            <h3>{item.email}</h3>
            <h3>{item.shortDescription}</h3>
            <h3>{item.currentUserEmail}</h3>
        </div>
    );
};

export default ViewDetails_ItemCard;