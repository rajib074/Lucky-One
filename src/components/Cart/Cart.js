import React from 'react';
import { Button } from 'react-bootstrap';
import CartItem from './CartItem/CartItem';
import './Cart.css';

const Cart = ({cart, removeFormCart, emptyCart, randomItem}) => {
    return (
        <div className="card-sidebar">
            <h3>Photo</h3>

            <ul>
                {
                    cart.map(item => <CartItem item={item} key={item.id} removeFormCart={removeFormCart} />)
                }
            </ul>
            
            <div className="button-group">
                <Button variant="success" onClick={ () => randomItem(cart)}>Select One</Button>
                <Button variant="danger" onClick={() => emptyCart()}>Empty Cart</Button>
            </div>
        </div>
    );
};

export default Cart;