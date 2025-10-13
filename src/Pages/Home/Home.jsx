import ListCategory from "../../Components/ListCategory/ListCategory";
import NewProducts from "../../Components/NewProducts/NewProducts";
import Slider from "../../Components/Slider/Slider";
import FAQ from "../../Components/FAQ/FAQ";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Features from "../../Components/Features/Features";
import Brands from "../../Components/Brands/Brands";

function Home() {
    return (
        <div className="flex flex-col bg-neutral-800">
            <div className="mt-[60px] flex flex-col md:flex-row w-full md:gap-5  p-2 md:p-4 h-full md:h-[500px]">
                <ListCategory />
                <Slider />
            </div>
            <NewProducts />
            <Features />
            <Brands />
            <Testimonials />
            <FAQ />
        </div>



    );
}
export default Home;