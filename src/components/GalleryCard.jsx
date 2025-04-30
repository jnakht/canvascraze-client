

const GalleryCard = ({ craft }) => {
    const { itemName, subcategoryName, imageURL, price, rating, customization, processingTime, stockStatus, name, email, shortDescription } = craft;
    return (
        <div className=" bg-base-100  h-[513px]   w-full">
            <figure className="px-10 pt-10">
                <img
                    src={imageURL}
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Card Title</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default GalleryCard;