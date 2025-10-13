import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../store/productSlice';
import Slider from '../../Components/Slider/Slider';
import { addItem, addItemWithQuantity } from '../../store/cartSlice';
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
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');

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

    const AddItemQty = (prod) => {
        toast.success(`${prod.title} x${quantity} added to cart!`, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        dispatch(addItemWithQuantity({ product: prod, quantity }));
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
        <div className="mt-[60px] w-full  bg-neutral-800 flex flex-col p-2 md:p-4">
            <div className='w-full h-full flex flex-col md:flex-row gap-5 md:p-3'>
                <Swiper
                    className='basis-2/5 w-full max-h-full bg-neutral-900 border border-neutral-800 flex justify-center items-center rounded'
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
                        <div className='text-neutral-300 text-[15px]'>{product.desc}</div>
                        <div className='flex w-full gap-3 items-center'>
                            <div className='text-amber-500 text-2xl font-bold'>${product.price}</div>
                            <div className='flex items-center gap-2'>
                                <button className='w-8 h-8 bg-neutral-700 text-amber-500 border border-amber-500 rounded' onClick={() => setQuantity(q => Math.max(1, q-1))}>-</button>
                                <div className='w-10 text-center text-white'>{quantity}</div>
                                <button className='w-8 h-8 bg-neutral-700 text-amber-500 border border-amber-500 rounded' onClick={() => setQuantity(q => q+1)}>+</button>
                            </div>
                            <div className='bg-amber-500 flex justify-center items-center font-bold px-3 py-1 rounded-lg cursor-pointer text-black' onClick={() => AddItemQty(product)}>Add To Cart</div>
                        </div>
                        <div className='text-xs text-neutral-400'>SKU: {product.documentId} • In stock</div>



                    </div>

                </div>



            </div>
            <div className='mt-6 bg-neutral-900 border border-neutral-800 rounded p-3'>
                <div className='flex gap-4 border-b border-neutral-800 mb-3'>
                    <button className={`pb-2 ${activeTab==='description'?'text-amber-500 border-b-2 border-amber-500':'text-neutral-300'}`} onClick={()=>setActiveTab('description')}>Description</button>
                    <button className={`pb-2 ${activeTab==='specs'?'text-amber-500 border-b-2 border-amber-500':'text-neutral-300'}`} onClick={()=>setActiveTab('specs')}>Specifications</button>
                    <button className={`pb-2 ${activeTab==='shipping'?'text-amber-500 border-b-2 border-amber-500':'text-neutral-300'}`} onClick={()=>setActiveTab('shipping')}>Shipping & Returns</button>
                </div>
                {activeTab==='description' && (
                    <div className='text-neutral-300 text-sm'>{product.desc}</div>
                )}
                {activeTab==='specs' && (
                    <div className='text-neutral-300 text-sm'>Lens mount: Universal • Material: Aluminum • Warranty: 1 year.</div>
                )}
                {activeTab==='shipping' && (
                    <div className='text-neutral-300 text-sm'>Ships within 2-5 business days. 30-day return policy.</div>
                )}
            </div>
            <div className='mt-6'>
                <div className='text-white font-semibold mb-2'>Related products</div>
                <Slider />
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
