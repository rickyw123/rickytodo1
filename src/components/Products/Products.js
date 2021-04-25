import React, {useEffect} from 'react';
import {HiShoppingCart} from 'react-icons/hi';
import {AiFillHome} from 'react-icons/ai';
import './Products.css';
import {useDispatch, useSelector} from 'react-redux';
import ProductData from './../../data/product.json';
import {Link} from 'react-router-dom';
import {addItemToCart} from './../../actions/cartActions';
import {CLEAR_ERRORS} from './../../constants/cart';

const Products = () => {
  const dispatch = useDispatch();
  const {error, cart} = useSelector(state => state.cart);

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch({type: CLEAR_ERRORS});
    }
  }, [dispatch, error]);

  const addItem = id => {
    dispatch(addItemToCart(id));
  }

  return (
    <div className='products-container'>
      <Link to='/' style={{color: '#000', textDecoration: 'none', fontSize: '25px'}}>
        <AiFillHome style={{marginBottom: '20px'}} />
      </Link>

      <Link to='/cart' className='cart-container'>
        <HiShoppingCart />
        <span>{cart.length} {cart.length > 1 ? 'Items' : 'Item'}</span>
      </Link>

      <div className="product-list-container">
        {
          ProductData.map(data => (
            <div className="single-product">
              <h2>{data.name}</h2>
              <p>{data.description}</p>
              <p className="price">${data.price}</p>
              <div className="single-product-link">
                <Link to={`/product/${data.id}`}>See More</Link>
                <button onClick={() => addItem(data.id)}>Add to Cart</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Products;