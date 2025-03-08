import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../assets/1.png'
import img2 from '../../assets/2.png'
import img3 from '../../assets/3.png'
import img4 from '../../assets/4.png'
import img5 from '../../assets/5.png'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function Slider() {
    return (
        <div className='flex basis-4/5 gap-5 h-80'>

            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true, }}
                className=' text-white w-6 h-full  basis-2/3'
            >
                <SwiperSlide ><img className=' w-full h-full object-contain' src={img1} /></SwiperSlide>
                <SwiperSlide><img className=' w-full h-full object-contain' src={img2} /></SwiperSlide>
                <SwiperSlide><img className=' w-full h-full object-contain' src={img3} /></SwiperSlide>
                <SwiperSlide><img className=' w-full h-full object-contain' src={img4} /></SwiperSlide>
                <SwiperSlide><img className=' w-full h-full object-contain' src={img5} /></SwiperSlide>
            </Swiper>
            <div className='flex flex-col h-full basis-1/3 justify-between'>
                <img className=' w-full h-[48%] object-contain bg-black rounded-md' src={img1} />
                <img className=' w-full h-[48%] object-contain bg-black rounded-md' src={img2} />

            </div>

        </div>

    );
}
export default Slider;