import products from '../../../helpers/products';

export default function Family() {
  return (
    <section className="Family">
      <div className="Family__container grid grid-col-2">
        <div className="row Family__text">
          <h2>The Family</h2>
          <p>
            Welcome to the SPHYNX Tequila family. A premium collection of
            Tequila’s that embodies traditional methods going back several
            generations.
          </p>
          <p>
            From the youngest members of our Blanco family to the older, wiser
            Anejo’s, you're in good company.
          </p>
          <p>
            We have captured not only the magic of the SPHYNX but also the
            Mexican culture and we are certain there is a family member for
            every occasion.
          </p>
        </div>
        <div className="row Family__products">
          {products.map((prod) => (
            <figure className="product-figure" key={prod.name}>
              <img src={`img${prod.img}`} alt={prod.name} />
              <figcaption
                className={prod.name === 'Añejo Black Oak' ? 'dl' : ''}
              >
                {prod.name === 'Añejo Black Oak' ? 'Extra' : ''} {prod.name}
                <span>&nbsp;- 70cl</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
