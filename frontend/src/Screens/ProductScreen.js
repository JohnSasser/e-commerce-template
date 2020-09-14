import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

function ProductScreen(props) {
  console.log('product ID: ', props.match.params.id);
  const product = data.products.find((x) => x._id === props.match.params.id);
  return (
    <>
      <div className="back-to-result">
        <Link to="/">Back to Products</Link>
      </div>
      <div className="details">
        <div className="details-image">
          <img src={product.image} alt="product" />
        </div>

        <div className="details-info">
          <ul>
            <li>
              <h4>{product.name}</h4>
            </li>
            <li>
              {product.rating} Stars ({product.numReviews})
            </li>
            <li>
              Price: <b>${product.price}</b>
            </li>
            {/* if product.description exists, print <div> */}
            {product.description ? (
              <li>
                Description:
                {product.description}
              </li>
            ) : null}{' '}
          </ul>
        </div>
        <div className="details-action">
          <ul>
            <li>Price: ${product.price}</li>
            <li>Status: {product.status}</li>
            <li>
              qty:{' '}
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </li>
            <button className="cart-button">Add To Cart</button>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProductScreen;
