import React from 'react';
import products from '../../../helpers/products';

function Products() {
  return (
    <div className="Tequilas-products">
      {products.map((product, i) => (
        <div className="Tequilas-products__wrapper grid" key={i}>
          <div
            className="Tequilas-products__data"
            data-aos="fade-right"
            data-aos-delay={i * 50}
          >
            <h2 className="PTequilas-poducts__name">
              SPHYNX Tequila® {product.name}
            </h2>
            <p>Color: {product.color}</p>
            <p>Aroma: {product.aroma}</p>
            <p>Taste: {product.taste}</p>
          </div>
          <div
            className="Tequilas-products__img"
            data-aos="zoom-in"
            data-aos-delay={i * 50}
          >
            <img src={`img${product.img}`} alt={product.name} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
