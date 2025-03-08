import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/productsSlice';
import { fetchCategories } from '../../store/categoriesSlice';

function ProductCollection() {
    const dispatch = useDispatch();
    const { products, status, error } = useSelector((state) => state.products);
    const selectedCategory = useSelector((state) => state.categories.setCategory);

    

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (status === 'loading') return <p>Loading products...</p>;
    if (status === 'failed') return <p>Error: {error}</p>;

    return (
        <div className='flex flex-col basis-4/5'>
            <div className='text-white font-bold'>{products.length} RESULT FOUND FOR {selectedCategory}</div>
            <div className='flex flex-wrap w-full gap-3'>
                {products.map((product) => (
                    <div className='anim w-[24%] bg-black cursor-pointer rounded-md flex flex-col justify-between p-2 relative' key={product.id}>
                        {product.image && product.image.length > 0 ? (
                            <div className='w-full flex justify-center h-1/2'>
                                <img
                                    className='w-2/3 h-full object-fill transition-all duration-300'
                                    src={`https://postgresql-7xg4.onrender.com${product.image[0].url}`}
                                    alt={product.title}
                                />

                            </div>

                        ) : (
                            <p>No Image Available</p>
                        )}
                        <div className='text-amber-500 font-bold'>{product.title}</div>
                        <div className='text-white h-12 w-full overflow-hidden line-clamp-2'>{product.subtitle}</div>                        
                        <div className='text-amber-500 mt-4'>${product.price}</div>
                        <div className={`${product.isNew ? "block" : "hidden"} bg-amber-500 px-2 rounded-lg font-bold absolute top-1 right-2 text-black`}>NEW</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductCollection;
