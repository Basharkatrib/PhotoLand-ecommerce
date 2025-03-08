import ListCategory from "../../Components/ListCategory/ListCategory";
import ProductCollection from "../../Components/ProductCollection/ProductCollection";

function Products() {
    return (
        <div className="flex w-full gap-5 bg-neutral-800 p-4" >
            <ListCategory />
            <ProductCollection />
        </div>


    );
}
export default Products;