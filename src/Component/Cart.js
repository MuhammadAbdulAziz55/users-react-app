import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    const total = cart.reduce((total, user) => total + +user.yearlySelary, 0);

    // let total = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const user = cart[i];
    //     total = total + + user.yearlySelary;
    // }


    const totalSelary = total.toFixed(2);








    return (
        <div>
            <h2>Added People List & Salary</h2>
            <p>Added: {cart.length}</p>


            <p>Total salary: ${totalSelary}</p>
        </div>
    );
};

export default Cart;