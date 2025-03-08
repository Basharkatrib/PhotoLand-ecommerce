import ListCategory from "../../Components/ListCategory/ListCategory";
import Slider from "../../Components/Slider/Slider";

function Home() {
    return (
        <div className="flex w-full gap-5 bg-neutral-800 p-4">
            <ListCategory />
            <Slider />
        </div>



    );
}
export default Home;