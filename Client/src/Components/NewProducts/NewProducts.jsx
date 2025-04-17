import { useEffect, useState } from "react";
import axios from 'axios';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from "react-router-dom";
import SkelatonLast from "../SkelatonLast/SkelatonLast";
function NewProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`https://postgresql-7xg4.onrender.com/api/products?filters[isNew][$eq]=true&populate=*`);
                setProducts(res.data.data);
                console.log("Response:", res.data);
                setLoading(false);
            } catch (err) {
                setLoading(true);
                console.log("Error details:", err.response);
            }
        }
        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="w-full mt-5 p-2  md:p-4">
             <div className="block w-full md:hidden">
                    <SkelatonLast count={1} width={100} />;
                </div>
                <div className="hidden w-full md:block">
                    <SkelatonLast count={5} width={20}/>;
                </div>
               
            </div>
        )
    }

    return (
        <div className="w-full h-[430px] p-2  md:p-4 flex flex-col">
            <h1 className="text-white text-2xl font-bold">LAST PRODUCTS</h1>
            <Swiper
                autoplay={{
                    delay: 2000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false
                }}
                breakpoints={{
                    300: {

                        slidesPerView: 1,
                    },
                    // when window width is >= 640px
                    640: {

                        slidesPerView: 2,
                    },
                    // when window width is >= 768px
                    800: {

                        slidesPerView: 3,
                    },
                    1024: {

                        slidesPerView: 4,
                    },
                    1250: {

                        slidesPerView: 5,
                    },

                }}
                loop
                modules={[Navigation, Pagination, Autoplay]}

                spaceBetween={50}
                pagination={{ clickable: true, }}
                className=' text-white w-full h-full mt-5'
            >
                {products.map((product) => {
                    return <SwiperSlide className="w-full ">
                        <div className='h-[300px] anim bg-gradient-to-tr from-[#3b3b3b] via-[#3b3b3b] to-[#e1e4df] sm:basis-[48%] md:basis-[48%] lg:basis-[32%]  xl:basis-[24%] bg-black  rounded-md flex flex-col justify-between p-2 relative' key={product.id}>
                            {product.image && product.image.length > 0 ? (
                                <div className='w-full flex justify-center h-1/2 cursor-pointer'>
                                    <div className='w-2/3 h-full flex justify-center'>
                                        <img
                                            className='object-fill h-full transition-all duration-300'
                                            src={product.image[0].url}
                                            alt={product.title}
                                        />
                                    </div>

                                </div>

                            ) : (
                                <p>No Image Available</p>
                            )}
                            <div className='text-amber-500 font-bold'>{product.title}</div>
                            <div className='text-white h-12 w-full overflow-hidden line-clamp-2'>{product.desc}</div>
                            <div className=' w-full flex justify-between items-center'>
                                <div className='text-amber-500'>${product.price}</div>
                                <Link to={`/product/${product.documentId}`}><div className=' text-amber-500 px-2 flex justify-center items-center rounded-lg cursor-pointer gap-2 '>View Details <svg xmlns="http://www.w3.org/2000/svg" height="20" width="17.5" viewBox="0 0 448 512"><path fill="#f59e0b" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg></div></Link>
                            </div>
                            <div className={`${product.isNew ? "block" : "hidden"} bg-amber-500 px-2 rounded-lg font-bold absolute top-1 right-2 text-black`}>NEW</div>
                        </div>
                    </SwiperSlide>
                })}


            </Swiper>

        </div>
    );
}
export default NewProducts;