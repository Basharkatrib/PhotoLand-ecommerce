import { useEffect } from "react";
import { Collapse, Dropdown, initTWE } from "tw-elements";
function Navbar() {

    useEffect(() => {
        initTWE({ Collapse, Dropdown });
    }, []);


    return (
        <>
            <nav
                className="flex-no-wrap relative flex w-full items-center justify-between bg-black py-3 ">
                <div className="flex w-full flex-wrap items-center justify-between px-1 md:px-3">
                  
                    <div className="w-full flex justify-between items-center">


                        <div
                            className="mr-2">
                                <h1 className="text-white font-bold sm:text-2xl"><span className="text-amber-500">PHOTO</span>LAND</h1>
                        </div>

                    
                            <form className="flex items-center w-[600px] h-[30px] mr-2">
                                <input className="p-1 h-full rounded-tl rounded-bl w-full border-none outline-none" type="text" placeholder="search" />
                                <button className="p-1.5 md:px-4 bg-amber-500 flex items-center justify-center h-full rounded-tr rounded-br ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        className="w-5 h-5 text-white">
                                        <path fill="currentColor" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                                    </svg>
                                </button>
                            </form>
                        

                        <div className="relative flex items-center">
                            <a className="dark:text-white" href="#">
                                <span className="[&>svg]:w-5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="#ffffff">
                                        <path
                                            d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    );
}
export default Navbar;