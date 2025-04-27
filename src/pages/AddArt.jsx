

const AddArt = () => {
    const handleAddCraft = e => {
        e.preventDefault();
        const form = e.target;
        const itemName = form.itemName.value;
        const subcategoryName = form.subcategoryName.value;
        const imageURL = form.imageURL.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processingTime = form.processingTime.value;
        const stockStatus = form.stockStatus.value;
        const name = form.name.value;
        const email = form.email.value;
        const shortDescription = form.shortDescription.value;


        const craftItem = {itemName, subcategoryName, imageURL, price, rating, customization, processingTime, stockStatus, name, email, shortDescription};

        console.log(craftItem);
    }
    return (
        <div className="hero bg-base-200 min-h-screen border">
            <div className="hero-content text-center">
                <div className="">
                    <h1 className="text-5xl font-bold">Hello there</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>

                    <div className="card shadow-sm py-20 px-10 bg-white flex gap-5">
                        <form onSubmit={handleAddCraft}>
                            {/* row one */}
                            <div className="flex gap-4  justify-between">
                                <div className=" w-full flex flex-col">
                                    <label class="label">Item Name</label>
                                    <input type="text" class="input w-full" name="itemName" placeholder="Item Name" />
                                </div>
                                <div className=" w-full flex flex-col">
                                    <label class="label">Subcategory Name</label>
                                    <input type="text" class="input w-full" name="subcategoryName" placeholder="Subcategory Name" />
                                </div>
                            </div>
                            {/* row two */}
                            <div className="flex gap-4  justify-between">
                                <div className=" w-full flex flex-col">
                                    <label class="label">Image URL</label>
                                    <input type="text" class="input w-full" name="imageURL" placeholder="Image URL" />
                                </div>
                                <div className=" w-full flex flex-col">
                                    <label class="label">Price</label>
                                    <input type="text" class="input w-full" name="price" placeholder="Price" />
                                </div>
                            </div>
                            {/* row three */}
                            <div className="flex gap-4  justify-between">
                                <div className=" w-full flex flex-col">
                                    <label class="label">Rating</label>
                                    <input type="text" class="input w-full" name="rating" placeholder="Rating" />
                                </div>
                                <div className=" w-full flex flex-col">
                                    <label class="label">Customization</label>
                                    <input type="text" class="input w-full" name="customization" placeholder="Customization" />
                                </div>
                            </div>
                            {/* row four */}
                            <div className="flex gap-4  justify-between">
                                <div className=" w-full flex flex-col">
                                    <label class="label">Processing Time</label>
                                    <input type="text" class="input w-full" name="processingTime" placeholder="Processing Time" />
                                </div>
                                <div className=" w-full flex flex-col">
                                    <label class="label">Stock Status</label>
                                    <input type="text" class="input w-full" name="stockStatus" placeholder="Stock Status" />
                                </div>
                            </div>

                            {/* row six */}
                            <div className="flex gap-4  justify-between">
                                <div className=" w-full flex flex-col">
                                    <label class="label">Name</label>
                                    <input type="text" class="input w-full" name="name" placeholder="Name" />
                                </div>
                                <div className=" w-full flex flex-col">
                                    <label class="label">Email</label>
                                    <input type="email" class="input w-full" name="email" placeholder="Email" />
                                </div>
                            </div>
                            {/* row seven */}
                            <div className="flex gap-4  justify-between">
                                <div className=" w-full flex flex-col">
                                    <label class="label">Short Description</label>
                                    <textarea type="text" placeholder="about the product"
                                        name="shortDescription" className="textarea textarea-secondary w-full my-4"></textarea>
                                </div>

                            </div>
                            <input className="btn btn-primary" type="submit" value="Add Craft" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddArt;