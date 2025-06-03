

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

        // send to the server to store on db
        fetch(`http://localhost:5000/arts`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(craftItem)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
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

                    <div className="">
                        <form onSubmit={handleAddCraft} className="flex flex-col gap-4">
                            {/* row one */}
                            
                                <div className="w-full flex flex-col group focus-within:outline-dashed">
                                    <label for='1' className="label cursor-text pl-2">Item Name</label>
                                    <input id="1" type="text" class="w-full pl-2  h-[44px] focus:outline-none outline-none" name="itemName" placeholder="" />
                                </div>
                                <div className="w-full flex flex-col group focus-within:outline-dashed">
                                    <label for='2' className="label cursor-text  pl-2">Subcategory Name</label>
                                    <input id="2" type="text" class="w-full pl-2  h-[44px] focus:outline-none outline-none" name="subcategoryName" placeholder="" />
                                </div>
                            
                            {/* row two */}
                            
                                <div className="w-full flex flex-col group focus-within:outline-dashed">
                                    <label for='3' className="label cursor-text pl-2">Image URL</label>
                                    <input id="3" type="text" class="w-full pl-2  h-[44px] focus:outline-none outline-none" name="imageURL" placeholder="" />
                                </div>
                                <div className="w-full flex flex-col group focus-within:outline-dashed">
                                    <label for='4' className="label cursor-text pl-2">Price</label>
                                    <input id="4" type="text" class="w-full pl-2  h-[44px] focus:outline-none outline-none" name="price" placeholder="" />
                                </div>
                            
                            {/* row three */}
                           
                                <div className="w-full flex flex-col group focus-within:outline-dashed">
                                    <label for='5' className="label cursor-text pl-2">Rating</label>
                                    <input id="5" type="text" class="w-full pl-2  h-[44px] focus:outline-none outline-none" name="rating" placeholder="" />
                                </div>
                                <div className="w-full flex flex-col group focus-within:outline-dashed">
                                    <label for='6' className="label cursor-text pl-2">Customization</label>
                                    <input id="6" type="text" class="w-full pl-2  h-[44px] focus:outline-none outline-none" name="customization" placeholder="" />
                                </div>
                            
                            {/* row four */}
                            
                                <div className="w-full flex flex-col group focus-within:outline-dashed">
                                   <label for='7' className="label cursor-text pl-2">Processing Time</label>
                                    <input id="7" type="text" class="w-full pl-2  h-[44px] focus:outline-none outline-none" name="processingTime" placeholder="" />
                                </div>
                                <div className="w-full flex flex-col group focus-within:outline-dashed">
                                     <label for='8' className="label cursor-text pl-2">Stock Status</label>
                                    <input id="8" type="text" class="w-full pl-2  h-[44px] focus:outline-none outline-none" name="stockStatus" placeholder="" />
                                </div>
                           

                            {/* row six */}
                            
                                <div className="w-full flex flex-col group focus-within:outline-dashed">
                                    <label for='9' className="label cursor-text pl-2">Name</label>
                                    <input id="9" type="text" class="w-full pl-2  h-[44px] focus:outline-none outline-none" name="name" placeholder="" />
                                </div>
                                <div className="w-full flex flex-col group focus-within:outline-dashed">
                                    <label for='10' className="label cursor-text pl-2">Email</label>
                                    <input id='10' type="email" class="w-full pl-2  h-[44px] focus:outline-none outline-none" name="email" placeholder="" />
                                </div>
                           
                            {/* row seven */}
                            <div className="flex gap-4  justify-between">
                                <div className=" w-full flex flex-col">
                                    
                                    <textarea type="text" placeholder="about the product"
                                        name="shortDescription" className="textarea textarea-secondary w-full my-4 pl-4 border border-[#AA0009] h-[44px] focus:outline-none "></textarea>
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