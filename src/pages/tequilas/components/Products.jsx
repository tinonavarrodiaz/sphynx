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
            <h2 className="Tequilas-poducts__name">
              SPHYNX Tequila® {product.name}
            </h2>
            <p>
              <span>Color: </span> {product.color}
            </p>
            <p>
              <span>Aroma: </span> {product.aroma}
            </p>
            <p>
              <span>Taste: </span> {product.taste}
            </p>
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
      <div className="link-ext">
        <a href="#" onClick={(e) => e.preventDefault()}>
          Click here to view detailed information in our catalog/book.
        </a>
      </div>
    </div>
  );
}

export default Products;
