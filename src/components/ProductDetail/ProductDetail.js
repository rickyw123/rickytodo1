import React, {useEffect} from 'react';
import './ProductDetail.css';
import {HiShoppingCart} from 'react-icons/hi';
import {AiFillHome} from 'react-icons/ai';
import {useDispatch, useSelector} from 'react-redux';
import {addItemToCart} from './../../actions/cartActions';
import {CLEAR_ERRORS} from './../../constants/cart';
import ProductData from './../../data/product.json';
import {Link} from 'react-router-dom';

const ProductDetail = ({match}) => {
  const dispatch = useDispatch();
  const {cart, error} = useSelector(state => state.cart);
  const product = ProductData.find(data => data.id === match.params.id);

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch({type: CLEAR_ERRORS});
    }
  }, [error, dispatch]);

  const addItem = id => {
    dispatch(addItemToCart(id));
  }

  return (
    <div className='detail-container'>
      <Link to='/' style={{color: '#000', textDecoration: 'none', fontSize: '25px'}}>
        <AiFillHome style={{marginBottom: '20px'}} />
      </Link>
      
      <Link to='/cart' className='cart-container'>
        <HiShoppingCart />
        <span>{cart.length} {cart.length > 1 ? 'Items' : 'Item'}</span>
      </Link>

      <div className="product-information">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p className='price'>${product.price}</p>
        <p className='stock'>Stock : {product.stock}</p>
        <button onClick={() => addItem(product.id)}>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductDetail;