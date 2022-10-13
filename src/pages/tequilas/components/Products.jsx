import React from 'react';
import products from '../../../helpers/products';

function Products() {
  return (
    <div className="Tequilas-products">
      {products.map((product) => (
        <div className="Tequilas-products__wrapper grid">
          <div className="Tequilas-products__data">
            <h2 className="PTequilas-poducts__name">
              SPHYNX Tequila® {product.name}
            </h2>
            <p>Color: {product.color}</p>
            <p>Aroma: {product.aroma}</p>
            <p>Taste: {product.taste}</p>
          </div>
          <div className="Tequilas-products__img">
            <img src={`img${product.img}`} alt={product.name} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
