import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper/modules';
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
import { Link } from 'react-router-dom';
function Slider() {
    return (
        <div className='w-full mt-3 md:mt-0 flex flex-col md:flex-row md:basis-4/5 gap-5 h-[900px] md:h-full'>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                autoplay={{
                    delay: 2000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false
                }}
                loop
                pagination={{ clickable: true, }}
                className=' text-white md:w-6 h-full w-full md:h-full  md:basis-2/3 rounded-md'
            >
                <SwiperSlide>
                    <div
                        className="relative bg-contain bg-no-repeat bg-right w-full h-full"
                        style={{
                            backgroundImage: `linear-gradient(to top right, #3b3b3b, #3b3b3b, #e1e4df), url(${img1})`,
                            backgroundBlendMode: "overlay",

                        }}
                    >
                        <div className="absolute flex flex-col w-[300px] md:w-[150px] top-[10px] left-4 md:top-[100px] md:left-14">
                            <div className="text-white">SPECIAL OFFER</div>
                            <div className="text-white text-3xl font-bold">SAVE 20% ON YOUR FIRST ORDER</div>
                            <Link to="/products"><div className=' bg-amber-500 text-black w-fit py-1 px-5 mt-3 md:mt-9 rounded cursor-pointer'>SHOP NOW</div></Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="relative bg-contain bg-no-repeat bg-right w-full h-full"
                        style={{
                            backgroundImage: `linear-gradient(to top right, #3b3b3b, #3b3b3b, #e1e4df), url(${img2})`,
                            backgroundBlendMode: "overlay",

                        }}
                    >
                        <div className="absolute flex flex-col w-[300px] md:w-[150px] top-[10px] left-4 md:top-[100px] md:left-14">
                            <div className="text-white">SPECIAL OFFER</div>
                            <div className="text-white text-3xl font-bold">SAVE 20% ON YOUR FIRST ORDER</div>
                            <Link to="/products"><div className=' bg-amber-500 text-black w-fit py-1 px-5 mt-3 md:mt-9 rounded cursor-pointer'>SHOP NOW</div></Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="relative bg-contain bg-no-repeat bg-right w-full h-full"
                        style={{
                            backgroundImage: `linear-gradient(to top right, #3b3b3b, #3b3b3b, #e1e4df), url(${img3})`,
                            backgroundBlendMode: "overlay",

                        }}
                    >
                        <div className="absolute flex flex-col w-[300px] md:w-[150px] top-[10px] left-4 md:top-[100px] md:left-14">
                            <div className="text-white">SPECIAL OFFER</div>
                            <div className="text-white text-3xl font-bold">SAVE 20% ON YOUR FIRST ORDER</div>
                            <Link to="/products"><div className=' bg-amber-500 text-black w-fit py-1 px-5 mt-3 md:mt-9 rounded cursor-pointer'>SHOP NOW</div></Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="relative bg-contain bg-no-repeat bg-right w-full h-full"
                        style={{
                            backgroundImage: `linear-gradient(to top right, #3b3b3b, #3b3b3b, #e1e4df), url(${img4})`,
                            backgroundBlendMode: "overlay",

                        }}
                    >
                        <div className="absolute flex flex-col w-[300px] md:w-[150px] top-[10px] left-4 md:top-[100px] md:left-14">
                            <div className="text-white">SPECIAL OFFER</div>
                            <div className="text-white text-3xl font-bold">SAVE 20% ON YOUR FIRST ORDER</div>
                            <Link to="/products"><div className=' bg-amber-500 text-black w-fit py-1 px-5 mt-3 md:mt-9 rounded cursor-pointer'>SHOP NOW</div></Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="relative bg-contain bg-no-repeat bg-right w-full h-full"
                        style={{
                            backgroundImage: `linear-gradient(to top right, #3b3b3b, #3b3b3b, #e1e4df), url(${img5})`,
                            backgroundBlendMode: "overlay",

                        }}
                    >
                        <div className="absolute flex flex-col w-[300px] md:w-[150px] top-[10px] left-4 md:top-[100px] md:left-14">
                            <div className="text-white">SPECIAL OFFER</div>
                            <div className="text-white text-3xl font-bold">SAVE 20% ON YOUR FIRST ORDER</div>
                            <Link to="/products"><div className=' bg-amber-500 text-black w-fit py-1 px-5 mt-3 md:mt-9 rounded cursor-pointer'>SHOP NOW</div></Link>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
            <div className='flex flex-col h-full gap-4 md:basis-1/3 md:justify-between'>
                <div
                    className="relative bg-contain bg-no-repeat bg-right w-full h-full rounded-md"
                    style={{
                        backgroundImage: `linear-gradient(to top right, #3b3b3b, #3b3b3b, #e1e4df), url(${img4})`,
                        backgroundBlendMode: "overlay",

                    }}
                >
                    <div className="absolute flex flex-col w-[150px] md:w-[120px] top-9 left-3">
                        <div className=" text-amber-500">SPECIAL OFFER</div>
                        <div className="text-white text-xl font-bold">SAVE 20% ON YOUR FIRST ORDER</div>
                    </div>
                </div>
                <div
                    className="relative bg-contain bg-no-repeat bg-right w-full h-full rounded-md"
                    style={{
                        backgroundImage: `linear-gradient(to top right, #3b3b3b, #3b3b3b, #e1e4df), url(${img5})`,
                        backgroundBlendMode: "overlay",

                    }}
                >
                    <div className="absolute flex flex-col w-[150px] md:w-[120px] top-9 left-3">
                        <div className="text-amber-500">SPECIAL OFFER</div>
                        <div className="text-white text-xl font-bold">SAVE 20% ON YOUR FIRST ORDER</div>
                    </div>
                </div>

            </div>

        </div>

    );
}
export default Slider;