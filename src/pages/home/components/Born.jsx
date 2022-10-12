import blottle from '/img/bottle1.jpg';

const Born = () => {
  return (
    <section className="Born">
      <div className="Born__container grid grid-col-2">
        <div className="row Born__text">
          <h2>Born from an unorthodox love story,</h2>
          <p>
            that later transformed into a true masterpiece from the inside out.
          </p>
        </div>
        <div className="row">
          <img src={blottle} alt="Born" />
        </div>
      </div>
    </section>
  );
};

export default Born;
