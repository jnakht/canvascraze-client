import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import GalleryCard from '../components/GalleryCard';

const Gallery = () => {
    const loadedAllCrafts = useLoaderData();
    const [allCrafts, setAllCrafts] = useState(loadedAllCrafts);
    return (
        <div>
            <h3>No of Crafts are: {allCrafts.length}</h3>
            <div className='grid divide-x divide-y grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0 border border-gray-900  mt-[76px]'>
                {
                    allCrafts.map(craft => <GalleryCard craft={craft}></GalleryCard>)
                }
            </div>
        </div>
    );
};

export default Gallery;