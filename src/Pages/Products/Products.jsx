import { useSelector } from "react-redux";
import ListCategory from "../../Components/ListCategory/ListCategory";
import ProductCollection from "../../Components/ProductCollection/ProductCollection";
import Loading from "../Loading/Loading";

function Products() {

    const stat = useSelector((state) => state.products.status);

    if(stat === 'loading'){
        return <Loading />
    }
    return (
        <div className="mt-[60px] flex-col md:flex md:flex-row w-full gap-5 bg-neutral-800 p-2 md:p-4" >
            <ListCategory />
            <ProductCollection />
        </div>


    );
}
export default Products;