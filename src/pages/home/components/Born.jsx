import Picture from '../../../components/Picture';

const Born = () => {
  return (
    <section className="Born">
      <div className="Born__container grid grid-col-2">
        <div className="row Born__text" data-aos="fade-right">
          <h2>Born from an unorthodox love story,</h2>
          <p>
            that later transformed into a true masterpiece from the inside out.
          </p>
        </div>
        <div className="row" data-aos="fade-left">
          <Picture img="bottle1" ext="jpg" alt="image 1" />
        </div>
      </div>
    </section>
  );
};

export default Born;
