import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import GalleryCard from '../components/GalleryCard';

const Gallery = () => {
    const loadedAllCrafts = useLoaderData();
    const [allCrafts, setAllCrafts] = useState(loadedAllCrafts);
    return (
        <div>
            <h3>No of Crafts are: {allCrafts.length}</h3>
            <div>
                {
                    allCrafts.map(craft => <GalleryCard craft={craft}></GalleryCard>)
                }
            </div>
        </div>
    );
};

export default Gallery;