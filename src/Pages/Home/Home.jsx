import ListCategory from "../../Components/ListCategory/ListCategory";
import Slider from "../../Components/Slider/Slider";

function Home() {
    return (
        <div className="mt-[60px] flex flex-col md:flex-row w-full md:gap-5 bg-neutral-800 p-2 md:p-4 h-full md:h-[500px]">
            <ListCategory />
            <Slider />
        </div>



    );
}
export default Home;