import React, {useEffect} from 'react';
import {HiShoppingCart} from 'react-icons/hi';
import {AiFillHome} from 'react-icons/ai';
import './Home.css';
import {Link} from 'react-router-dom';
import ProductData from './../../data/product.json';
import {useDispatch, useSelector} from 'react-redux';
import {addItemToCart} from './../../actions/cartActions';
import {CLEAR_ERRORS} from './../../constants/cart';

const Home = () => {
  const dispatch = useDispatch();
  const {cart, error} = useSelector(state => state.cart);

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch({type: CLEAR_ERRORS});
    }
  }, [dispatch, error]);

  const addItem = id => {
    dispatch(addItemToCart(id));
  }

  return(
    <div className='home-container'>
      <Link to='/' style={{color: '#000', textDecoration: 'none', fontSize: '25px'}}>
        <AiFillHome style={{marginBottom: '20px'}} />
      </Link>

      <Link to='/cart' className='cart-container'>
        <HiShoppingCart />
        <span>{cart.length} {cart.length > 1 ? 'Items' : 'Item'}</span>
      </Link>

      <div className="home-product-container">
        {
          ProductData.map(data => (
            <div className="single-home-product" key={data.id}>
              <h2>{data.name}</h2>
              <p>{data.description}</p>
              <p className='price'>${data.price}</p>
              <div className="single-home-link">
                <Link to={`/product/${data.id}`}>See More</Link>
                <button onClick={() => addItem(data.id)}>Add to Cart</button>
              </div>
            </div>
          ))
        }
      </div>

      <Link className='allProducts' to='/products'>All Products</Link>
    </div>
  );
}

export default Home;