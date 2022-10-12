import cat from '/img/cat.svg';

const Leyend = () => {
  return (
    <div className="Leyend">
      <img src={cat} alt="Sphynx Tequila" />
      <p className="Leyend__text">
        A premium tequila
        <br />
        with the magic touch of a SPHYNX.
      </p>
    </div>
  );
};

export default Leyend;
