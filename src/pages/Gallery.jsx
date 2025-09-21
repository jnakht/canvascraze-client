import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import GalleryCard from '../components/GalleryCard';

const Gallery = () => {
    const loadedAllCrafts = useLoaderData();
    const [allCrafts, setAllCrafts] = useState(loadedAllCrafts);
    // useEffect( () => {
    //     setAllCrafts(loadedAllCrafts);
    // }, [loadedAllCrafts]) 
    console.log(allCrafts);
    return (
        <div>
            {/* <h3>No of Crafts are: {allCrafts.length}</h3> */}
            <div className='grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4  mt-[76px]'>
                {
                    allCrafts?.map(craft => <GalleryCard craft={craft}></GalleryCard>)
                }
            </div>
        </div>
    );
};

export default Gallery;