import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../store/productSlice';
import Slider from '../../Components/Slider/Slider';
import { addItem } from '../../store/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Loading from '../Loading/Loading';

function Product() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { product, status, error } = useSelector(state => state.product);

    const AddItem = (prod) => {
        toast.success(`${prod.title} added to cart!`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        dispatch(addItem(prod));
    };

    useEffect(() => {
        dispatch(fetchProduct(id));
    }, [id, dispatch]);

    useEffect(() => {
        console.log(product.image?.[0]?.url);
    }, [product]);


    if (status === 'loading') return <Loading />;
    if (status === 'failed') return <p>Error: {error}</p>;
    if (!product) return <p>No product found</p>;

    return (
        <div className="mt-[60px] w-full lg:h-[70vh]  bg-neutral-700 flex justify-center items-center p-2 md:p-4">
            <div className='w-full h-full flex flex-col md:flex-row gap-5 md:p-3'>
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

                <div className='basis-3/5 flex h-full  md:justify-center items-center'>
                    <div className='flex flex-col  md:w-5/6 h-full  gap-3'>
                        <div className=' text-amber-500 text-xl font-bold'>{product.title}</div>
                        <div className='text-white text-3xl font-bold'>{product.subtitle}</div>
                        <div className='text-white text-[15px]'>{product.desc}</div>
                        <div className='flex w-full gap-3'>
                            <div className='text-amber-500 text-xl font-bold'>${product.price}</div>
                            <div className='bg-amber-500 flex justify-center items-center font-bold px-2 rounded-lg cursor-pointer text-black' onClick={() => AddItem(product)}>Add To Cart</div>
                        </div>



                    </div>

                </div>



            </div>
            <div>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    
                />
            </div>

        </div>
    );
}

export default Product;
