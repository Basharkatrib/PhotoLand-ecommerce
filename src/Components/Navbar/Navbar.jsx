import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Collapse, Dropdown, initTWE } from "tw-elements";
import {increaseQuantity, decreaseQuantity, removeItem, removeAll} from '../../store/cartSlice';
import { Link } from "react-router-dom";

function Navbar() {

    useEffect(() => {
        initTWE({ Collapse, Dropdown });
    }, []);

    const dispatch = useDispatch();

    const [open, isOpen] = useState(false);
    const cart = useSelector(state => state.cart);


    return (
        <>
            <nav
                className="flex-no-wrap relative flex w-full items-center justify-between bg-black py-3 ">
                <div className="flex w-full flex-wrap items-center justify-between px-1 md:px-3">

                    <div className="w-full flex justify-between items-center">


                        <div
                            className="mr-2">
                            <Link to="/"><h1 className="text-white font-bold sm:text-2xl cursor-pointer"><span className="text-amber-500">PHOTO</span>LAND</h1></Link>
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
                            <a className="dark:text-white" onClick={() => isOpen(true)} href="#">
                                <span className="[&>svg]:w-12">
                                    <svg

                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="#ffffff">
                                        <path
                                            d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                                    </svg>
                                </span>
                            </a>
                            <div className="text-white px-1 text-[14px] bg-amber-500 rounded-full right-0 absolute top-0">{cart.items.length}</div>
                        </div>
                    </div>
                </div>

            </nav>
            <div
                className={`fixed top-0 right-0 h-full z-50 bg-neutral-800 transition-all duration-500 
                ${open ? "w-1/3 opacity-100 pointer-events-auto" : "w-0 opacity-0 "}`}>

                <div className="flex flex-col h-full">
                    <div className="w-full  flex justify-between items-center text-white font-bold border-b-2 border-amber-500 p-2">
                        <div>YOUR CART</div>
                        <svg
                            onClick={() => isOpen(false)}
                            className="w-6 cursor-pointer"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512">
                            <path fill="#FFD43B" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                        </svg>
                    </div>
                    <div className="w-full max-h-full basis-3/4 overflow-y-auto py-2">
                    {
                        cart.items.map((item) => {
                            return <div className="w-full h-auto flex items-center px-5 border-b-2 border-amber-500 py-1 " key={item.id}>
                              <div className="basis-1/3">
                                <img className=" w-28" src={item.image[0].url} />
                              </div>
                              <div className="flex flex-col basis-2/3 gap-4">
                                <div className="text-white">{item.subtitle}</div>
                                <div className="flex w-full justify-between">
                                    <div className="flex gap-2 ">
                                        <div onClick={() => dispatch(increaseQuantity(item.id))} className=" bg-stone-600 cursor-pointer text-amber-500 w-6 text-center rounded-sm border border-amber-500">+</div>
                                        <div className="text-white">{item.quantity}</div>
                                        <div onClick={() => dispatch(decreaseQuantity(item.id))} className=" bg-stone-600 cursor-pointer text-amber-500 w-6 text-center rounded-sm border border-amber-500">-</div>
                                    </div>
                                    <div className="text-white ">${(item.price * item.quantity)}</div>

                                </div>
                              </div>

                            </div>;
                        })
                    }

                    </div>
                    <div className={`${cart.items.length > 0? "block" : " hidden"} basis-1/4 flex flex-col gap-4 py-3 px-5`}>
                        <div className="w-full flex justify-between">
                            <div className="text-white">Total Price</div>
                            <div className="text-white">${cart.totalPrice}</div>
                        </div>
                        <div className="w-full flex gap-2">
                           <div onClick={() => dispatch(removeAll())} className="basis-1/3 cursor-pointer bg-amber-500 text-black flex justify-center items-center p-1 font-bold rounded-md">CLEAR CART</div>
                           <div className="basis-2/3 cursor-pointer bg-amber-500 text-black flex justify-center items-center gap-2 p-1 font-bold rounded-md">CHECKOUT <svg className="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg></div>

                        </div>

                    </div>
                    
                </div>
            </div>


        </>
    );
}
export default Navbar;