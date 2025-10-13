import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/productsSlice';
import { fetchCategories } from '../../store/categoriesSlice';
import { addItem, increaseQuantity, decreaseQuantity, removeItem } from '../../store/cartSlice';
import { Link } from 'react-router-dom';

function ProductCollection() {
    const dispatch = useDispatch();
    const { products, status, error } = useSelector((state) => state.products);
    const selectedCategory = useSelector((state) => state.categories.setCategory);
    const search = useSelector((state) => state.search.data);


    if (status === 'loading') return <p>Loading products...</p>;
    if (status === 'failed') return <p>Error: {error}</p>;


    


    return (
        <div className='flex flex-col basis-4/5 mt-2 md:mt-0'>
            <div className='text-white font-bold'>{products.length} RESULT FOUND FOR {selectedCategory}</div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full mt-2 gap-3'>
                {products
                    .filter((product) => {
                        return search.toLowerCase() === '' ? product : product.title.toLowerCase().includes(search);
                    })
                    .map((product) => (
                        <div className='group bg-neutral-900 border border-neutral-800 hover:border-amber-500/40 rounded-lg flex flex-col justify-between p-3 relative transition' key={product.id}>
                            {product.image && product.image.length > 0 ? (
                                <div className='w-full flex justify-center h-40 cursor-pointer overflow-hidden rounded-md'>
                                    <img
                                        className='object-cover h-full w-full transition-transform duration-300 group-hover:scale-105'
                                        src={product.image[0].url}
                                        alt={product.title}
                                    />
                                </div>

                            ) : (
                                <p>No Image Available</p>
                            )}
                            <div className='text-amber-500 font-bold mt-2 line-clamp-1'>{product.title}</div>
                            <div className='text-neutral-300 h-12 w-full overflow-hidden line-clamp-2 text-sm'>{product.desc}</div>
                            <div className=' w-full flex justify-between items-center mt-1'>
                                <div className='text-amber-500 font-semibold'>${product.price}</div>
                               <Link to={`/product/${product.documentId}`}><div className=' text-amber-500 px-2 flex justify-center items-center rounded-lg cursor-pointer gap-2 hover:text-amber-300 transition'>View Details <svg xmlns="http://www.w3.org/2000/svg" height="20" width="17.5" viewBox="0 0 448 512"><path fill="#f59e0b" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></div></Link>
                            </div>
                            <div className={`${product.isNew ? "block" : "hidden"} bg-amber-500 px-2 rounded-lg font-bold absolute top-2 right-2 text-black`}>NEW</div>
                        </div>
                    ))}
            </div>
            
        </div>
    );
}

export default ProductCollection;
