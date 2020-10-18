import React from 'react'
import './Cart-item.css'

function CartItem({id, name, price, qty, updateQty}) {
    const addOne = () => {
        updateQty(id, qty+1);
    }
    const subOne = () => {
        updateQty(id, qty-1);
    }
    
    return(
        <div className = "Cart-item">
            <div>{name}</div>
            <div>${price}</div>
            <div>
                <button onClick={subOne} disabled={qty==1}>-</button>
                {qty}
                <button onClick={addOne}>+</button>
            </div>
            <div>Total: ${qty*price}</div>
        </div>
    );

}

export default CartItem;