import React from 'react';
import { PayPalButtons } from "@paypal/react-paypal-js";
import { removeAll } from '../../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Checkout() {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const navigat = useNavigate();

    const onCreateOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    reference_id: "order_12345",
                    amount: {
                        currency_code: "USD",
                        value: cart.totalPrice,
                    },
                },
            ],
        });
    };

    const onApproveOrder = (data, actions) => {
        return actions.order.capture()
            .then((details) => {
                dispatch(removeAll());
                axios.post("https://postgresql-7xg4.onrender.com/api/orders", {
                    data: {
                        items: cart.items,
                        totalPrice: cart.totalPrice,
                    }
                }, { withCredentials: true })
                    .then(response => {
                        console.log("Order saved:", response.data);
                    })
                    .catch(error => {
                        console.error("Error saving order:", error);
                    });

                console.log("Transaction Details:", details);
                navigat('/thank');

            })
            .catch((error) => {
                console.error("Error capturing order:", error);
                alert("There was an issue processing your payment.");
            });
    };

    return (
        <>
            <PayPalButtons
                className='w-full'
                style={{ layout: "vertical" }}
                createOrder={onCreateOrder}
                onApprove={onApproveOrder}
            />
           
        </>
    );
}

export default Checkout;
