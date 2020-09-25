import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';

function HomeScreen(props) {
  // const [products, setProducts] = useState([]);
  const productList = useSelector((state) => state.productList);
  console.log(productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
    // fetch and await the product data from the server;
    // const fetchData = async () => {
    //   const { data } = await axios.get('/api/products');
    //   setProducts(data);
    // };
    // fetchData();
    return () => {
      //
    };
  }, []);

  return loading ? (
    <div>LOADING...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <ul className="products">
      {products.map((product, idx) => (
        <li key={product.name + idx}>
          <div className="product">
            <Link to={'product/' + product._id}>
              <img
                className="product-image"
                src={product.image}
                alt={`product ${product.name}`}
              />
              <div className="product-name">{product.name}</div>{' '}
            </Link>
            <div className="product-brand">{product.brand}</div>
            <div className="product-price">$ {product.price}</div>
            <div className="product-rating">
              {product.rating} Stars {product.numReviews}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default HomeScreen;
