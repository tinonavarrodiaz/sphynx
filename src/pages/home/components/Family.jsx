import products from '../../../helpers/products';
import parse from 'html-react-parser';
import { NavLink } from 'react-router-dom';

export default function Family() {
  return (
    <section className="Family">
      <div className="Family__container grid grid-col-2">
        <div className="row Family__text" data-aos="fade-right">
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
          {products.map((prod, i) => (
            <figure
              className="product-figure"
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
            >
              <NavLink to="/tequilas">
                <img src={`img${prod.img}`} alt={prod.name} />
              </NavLink>
              <figcaption
                className={prod.name === 'Añejo Black Oak' ? 'dl' : ''}
              >
                {parse(prod.nameAlt)}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
