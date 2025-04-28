

const GalleryCard = ({craft}) => {
    const {itemName, subcategoryName, imageURL, price, rating, customization, processingTime, stockStatus, name, email, shortDescription} = craft;
    return (
        <div className="card lg:card-side bg-base-100 shadow-sm">
            <figure className=" w-[30%]">
                <img
                    src={imageURL}
                    alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{itemName}</h2>
                <p><span>Rating: </span>{rating}</p>
                <p><span>Price: </span>{price}</p>
                <p><span>Made By:</span> {name}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default GalleryCard;