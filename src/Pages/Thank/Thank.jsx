import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';


function Thank(){

    const location = useLocation();
    

    useEffect(()=>{
        toast.success('Thank you', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        console.log(location);
    },[])
    return(
        <div className="w-full h-svh flex flex-col justify-center items-center bg-neutral-800 gap-5">
          <div className=" text-amber-500 text-center font-bold text-3xl">Thank you, your payment has been completed successfully.</div>
          <Link to="/" className="py-1 px-3 bg-black text-amber-500 rounded-md">Back to home</Link>
          <div>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"

                />
            </div>
        </div>
    );
}
export default Thank;