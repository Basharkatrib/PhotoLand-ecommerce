import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../store/categoriesSlice';
import { fetchProducts } from '../../store/productsSlice';
import { Link } from 'react-router-dom';
import { setCateg } from '../../store/categoriesSlice';
import { Navigation, Pagination, Scrollbar, A11y, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function ListCategory() {
    const dispatch = useDispatch();
    const { categories, status, error, setCategory } = useSelector((state) => state.categories);
    const [active, setActive] = useState(null);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCategories());
        }
    }, [dispatch, status]);



    const handleCategoryClick = (categoryId, title) => {
        console.log("Selected Category ID:", categoryId);
        dispatch(fetchProducts(categoryId));
        dispatch(setCateg(title));
        // setActive(categoryId);
        // console.log(active);
    };

    if (status === 'loading') return <p>Loading categories...</p>;
    if (status === 'failed') return <p>Error: {error}</p>;

    return (
        <>
            <div className=' hidden md:block h-fit bg-neutral-900 rounded-lg text-white basis-1/5 border border-neutral-800 overflow-hidden'>
                <div className='bg-gradient-to-r from-amber-500 to-amber-400 py-2 text-center font-bold'>
                    BROWSE CATEGORIES
                </div>
                <ul className='text-white h-[300px] overflow-auto divide-y divide-neutral-800'>
                    {categories.map((category) => (
                        <Link to="/products" key={category.id}>
                            <li className={`cursor-pointer hover:bg-neutral-800/60 transition ${setCategory === category.title ? 'text-amber-500' : ''} p-2`} onClick={() => handleCategoryClick(category.id, category.title)}> 
                                {category.title}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className='md:hidden'>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, FreeMode]}
                    slidesPerView={3}
                    freeMode={true}
                    className=' text-white w-full h-8'
                >
                    {categories.map((category) => (
                        <SwiperSlide className='w-12' key={category.id}>
                            <Link to="/products" key={category.id}>
                                <div className={`px-2 ${setCategory === category.title ? 'text-amber-500' : ''} text-[14px] border-r-2 border-amber-500 text-center`} onClick={() => handleCategoryClick(category.id, category.title)}>
                                    {category.title}
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}

                </Swiper>

            </div>
        </>
    );
}

export default ListCategory;
