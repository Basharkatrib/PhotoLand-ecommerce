import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchProduct } from '../../services/FetchProduct';
function Product() {
    const { id } = useParams();
    const [data, setData] = useState(null); 
    useEffect(() => {
        const fetchData = async () => {
            const productData = await FetchProduct(id);
            setData(productData);
        };
        fetchData();
    }, [id]);
    useEffect(() => {
        console.log(data);
    }, [data]);
    return (
        <>
          kkk
        </>
    );
}
export default Product;