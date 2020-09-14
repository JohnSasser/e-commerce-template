import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function HomeScreen(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // fetch and await the product data from the server;
    const fetchData = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    };
    fetchData();
    return () => {
      //
    };
  }, []);

  return (
    <ul className="products">
      {/* <!-- MAAP JERSEY --> */}
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
