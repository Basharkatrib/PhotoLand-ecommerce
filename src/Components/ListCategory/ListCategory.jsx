import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../store/categoriesSlice';
import { fetchProducts } from '../../store/productsSlice';
import { Link } from 'react-router-dom';
import { setCateg } from '../../store/categoriesSlice';


function ListCategory() {
    const dispatch = useDispatch();
    const { categories, status, error } = useSelector((state) => state.categories);
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
        setActive(categoryId);
    };

    if (status === 'loading') return <p>Loading categories...</p>;
    if (status === 'failed') return <p>Error: {error}</p>;

    return (
        <div className='h-80 bg-black rounded-md text-white basis-1/5'>
            <div className='bg-amber-500 py-2 rounded-t-md rounded-tr-md text-center font-bold'>
                BROWSE CATEGORIES
            </div>
            <ul className='text-white py-2'>
                {categories.map((category) => (
                    <Link to="/products" key={category.id}>
                        <li className={`${active === category.id? 'text-amber-500' : ''} border-b-2 border-amber-500 mb-3 p-2`} onClick={() => handleCategoryClick(category.id, category.title)}> {/* ✅ التصحيح هنا */}
                            {category.title}
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}

export default ListCategory;
