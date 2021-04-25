import React from 'react';
import './Cart.css';
import {AiFillHome, AiFillDelete} from 'react-icons/ai';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {removeItem, updateItem} from './../../actions/cartActions';

const Cart = () => {
  const dispatch = useDispatch();
  const {cart} = useSelector(state => state.cart);

  const handleRemove = id => {
    dispatch(removeItem(id));
  }

  const handleQuantity = (id, qty, stock, type) => {
    if (type === 1) {
      const newQty = qty + 1;
      if (newQty > stock) return;
      dispatch(updateItem(id, newQty));
    } else {
      const newQty = qty - 1;
      if (newQty < 1) return;
      dispatch(updateItem(id, newQty));
    }
  }

  return (
    <div className='cart-list-container'>
      <Link to='/' style={{color: '#000', textDecoration: 'none', fontSize: '25px'}}>
        <AiFillHome style={{marginBottom: '20px'}} />
      </Link>

      <main>
        <div className="left-content">
          <h1>Total Items : {cart.length} {cart.length > 1 ? 'Items' : 'Item'}</h1>
          <div className="cart-items-container">
            {
              cart.map(data => (
                <div className="cart-item" key={data.id}>
                  <div className="cart-title">
                    <h2>{data.name}</h2>
                    <AiFillDelete onClick={() => handleRemove(data.id)} />
                  </div>
                  <p className='price'>${data.price}</p>
                  <div className="item-quantity">
                    <button onClick={() => handleQuantity(data.id, data.qty, data.stock, 1)}>+</button>
                    <input type="number" value={data.qty} readOnly />
                    <button onClick={() => handleQuantity(data.id, data.qty, data.stock, 0)}>-</button>
                  </div>
                  <p className='totalPrice'>Total : ${data.price * data.qty}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className="right-content">
          <h1>Total Price</h1>
          <div className="cart-list">
            {
              cart.map(data => (
                <div className="single-list">
                  <div className="single-list-title">
                    <h3>{data.name}</h3>
                    <p>(qty {data.qty})</p>
                  </div>
                  <p className='price'>${data.qty * data.price}</p>
                </div>
              ))
            }
          </div>
          <h2 className='subtotal'>Subtotal : ${cart.reduce((acc, item) => acc + item.price * item.qty , 0)}</h2>
        </div>
      </main>
    </div>
  )
}

export default Cart;