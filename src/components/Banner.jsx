import Picture from './Picture';

const Banner = ({ img }) => {
  return (
    <div className="Banner" data-aos="zoom-in-down">
      {/* <img src={img} alt="Banner" data-aos="zoom-in-down" /> */}
      <Picture img={img} ext="jpg" alt="Banner" />
    </div>
  );
};

export default Banner;
