import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../store/productSlice';
import Slider from '../../Components/Slider/Slider';
import { addItem } from '../../store/cartSlice';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Product() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { product, status, error } = useSelector(state => state.product);

    useEffect(() => {
        dispatch(fetchProduct(id));
    }, [id, dispatch]);

    useEffect(() => {
        console.log(product.image?.[0]?.url);
    }, [product]);


    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'failed') return <p>Error: {error}</p>;
    if (!product) return <p>No product found</p>;

    return (
        <div className="w-full lg:h-[70vh]  bg-neutral-700 flex justify-center items-center p-4">
            <div className='w-full h-full flex flex-col md:flex-row gap-5 p-3'>
                <Swiper
                    className='basis-2/5 w-full max-h-full bg-gradient-to-b from-[#5f5f5f] via-[#525252] to-[#303030] flex justify-center items-center rounded'
                    modules={[Navigation, Pagination,]}
                    spaceBetween={50}
                    slidesPerView={1}

                    pagination={{ clickable: true }}
                >
                    {product.image?.map((img) => {
                        return <SwiperSlide className='!flex justify-center items-center w-full' key={img.id}><img className='h-3/4 object-contain' src={img?.url} /></SwiperSlide>
                    })}
                </Swiper>

                <div className='basis-3/5 flex h-full  justify-center items-center'>
                    <div className='flex flex-col justify-between w-5/6 h-full  gap-3'>
                        <div className=' text-amber-500 text-xl font-bold'>{product.title}</div>
                        <div className='text-white text-3xl font-bold'>{product.subtitle}</div>
                        <div className='text-white text-[15px]'>{product.desc}</div>
                        <div className='flex w-full gap-3'>
                            <div className='text-amber-500 text-xl font-bold'>${product.price}</div>
                            <div className='bg-amber-500 flex justify-center items-center font-bold px-2 rounded-lg cursor-pointer text-black' onClick={() => dispatch(addItem(product))}>Add To Cart</div>
                        </div>



                    </div>

                </div>



            </div>

        </div>
    );
}

export default Product;
