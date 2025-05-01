// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = () => {
    const spaceBetween = 10;
    const onProgress = (e) => {
        const [swiper, progress] = e.detail;
        console.log(progress);
    };
    const onSlideChange = (e) => {
        console.log('slide changed');
    };
    return (
       
            <Swiper className=' z-0 h-[calc(100vh-65px)]'
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                
                slidesPerView={1}
                autoplay={{ delay: 2500 }}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div className="w-screen h-full bg-black  flex flex-col justify-center items-center text-center bg-[url('https://ik.imagekit.io/ghlgoepam/New%20Folder/pexels-fwstudio-33348-139321.jpg?updatedAt=1746018560671')] text-[#9B3300] text-white bg-center bg-cover bg-no-repeat  bg-transparent ">
                    {/* banner content div */}
                        <div className='border bg-[#43a293] p-20 flex flex-col space-y-6 items-center rounded-2xl text-center'>
                                
                        <h3 className='font-merriweather text-5xl z-50 tracking-[5px] uppercase'>Crafting Nature’s Touch into Every Home</h3>
                        <p className='font-merriweather text-lg max-w-[55%]'>Celebrate natural beauty with handcrafted jute and wood decor. Sustainably made, rich in texture, and designed to bring warmth, authenticity.</p>
                        <button className={`btn bg-[url('https://ik.imagekit.io/ghlgoepam/New%20Folder/1746011756191.png_image.png?updatedAt=1746012342488')]  bg-center bg-no-repeat font-bold text-[15px] w-[191px] h-[50px]  text-white border-none`}>View More</button>
                        </div>

                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="w-screen h-full bg-black text-white flex justify-center items-center bg-[url('https://ik.imagekit.io/ghlgoepam/New%20Folder/pexels-magda-ehlers-pexels-31754468.jpg?updatedAt=1746098802942')] bg-center bg-cover bg-no-repeat  bg-transparent">
                         {/* banner content div */}
                         <div className='border bg-[#43a293] p-20 flex flex-col space-y-6 items-center rounded-2xl mx-auto text-center'>
                                
                                <h3 className='font-merriweather text-5xl z-50 tracking-[5px] uppercase'>Rooted in Tradition, Designed for Today</h3>
                                <p className='font-merriweather text-lg max-w-[55%]'>Traditional craftsmanship meets modern design in every jute and wooden piece. Discover timeless home decor.</p>
                                <button className={`btn bg-[url('https://ik.imagekit.io/ghlgoepam/New%20Folder/1746011756191.png_image.png?updatedAt=1746012342488')]  bg-center bg-no-repeat font-bold text-[15px] w-[191px] h-[50px]  text-white border-none`}>View More</button>
                                </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-screen h-full bg-black text-white flex justify-center items-center bg-[url('https://ik.imagekit.io/ghlgoepam/New%20Folder/pexels-designecologist-1389460.jpg?updatedAt=1746099082479')] bg-center bg-cover bg-no-repeat  bg-transparent">
                         {/* banner content div */}
                         <div className='border bg-[#43a293] p-20 flex flex-col space-y-6 items-center rounded-2xl text-center'>
                                
                                <h3 className='font-merriweather text-5xl z-50 tracking-[5px] uppercase'>Sustainable. Stylish. Handmade.</h3>
                                <p className='font-merriweather text-lg max-w-[55%]'>Crafted from durable wood and organic jute, our eco-friendly decor offers lasting style. Add charm, simplicity.</p>
                                <button className={`btn bg-[url('https://ik.imagekit.io/ghlgoepam/New%20Folder/1746011756191.png_image.png?updatedAt=1746012342488')]  bg-center bg-no-repeat font-bold text-[15px] w-[191px] h-[50px]  text-white border-none`}>View More</button>
                                </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-screen h-full bg-black text-white flex justify-center items-center bg-[url('https://ik.imagekit.io/ghlgoepam/New%20Folder/pexels-leeloothefirst-5802153.jpg?updatedAt=1746099428276')] bg-center bg-cover bg-no-repeat  bg-transparent">
                         {/* banner content div */}
                         <div className='border bg-[#43a293] p-20 flex flex-col space-y-6 items-center rounded-2xl text-center'>
                                
                                <h3 className='font-merriweather text-5xl z-50 tracking-[5px] uppercase'>Where Craft Meets Purpose</h3>
                                <p className='font-merriweather text-lg max-w-[55%]'>Every item is a purposeful creation—ethically sourced, beautifully made, and designed to last. Choose decor that reflects values of sustainability.</p>
                                <button className={`btn bg-[url('https://ik.imagekit.io/ghlgoepam/New%20Folder/1746011756191.png_image.png?updatedAt=1746012342488')]  bg-center bg-no-repeat font-bold text-[15px] w-[191px] h-[50px]  text-white border-none`}>View More</button>
                                </div>
                    </div>
                </SwiperSlide>
                ...
            </Swiper>
        

    );
};

export default Banner;