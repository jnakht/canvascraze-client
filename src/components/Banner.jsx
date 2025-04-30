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
       
            <Swiper className='-mt-[65px] text-5xl z-0 h-screen'
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                // spaceBetween={550}
                slidesPerView={1}
                // autoplay={{ delay: 1000 }}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide><div className="w-screen h-full bg-black text-white flex justify-center items-center bg-[url('https://i.ibb.co.com/MyHqgQnB/pexels-airamdphoto-15883109.jpg')] bg-center bg-cover bg-no-repeat  bg-transparent">Slide 1
                


                

                </div></SwiperSlide>
                <SwiperSlide><div className='w-screen h-full bg-black text-white flex justify-center items-center bg-[url()]'>Slide 2</div></SwiperSlide>
                <SwiperSlide><div className='w-screen h-full bg-black text-white flex justify-center items-center bg-[url()]'>Slide 3</div></SwiperSlide>
                <SwiperSlide><div className='w-screen h-full bg-black text-white flex justify-center items-center bg-[url()]'>Slide 4</div></SwiperSlide>
                ...
            </Swiper>
        

    );
};

export default Banner;