import ListCategory from "../../Components/ListCategory/ListCategory";
import NewProducts from "../../Components/NewProducts/NewProducts";
import Slider from "../../Components/Slider/Slider";

function Home() {
    return (
        <div className="flex flex-col bg-neutral-800">
            <div className="mt-[60px] flex flex-col md:flex-row w-full md:gap-5  p-2 md:p-4 h-full md:h-[500px]">
                <ListCategory />
                <Slider />
            </div>
            <NewProducts />
        </div>



    );
}
export default Home;