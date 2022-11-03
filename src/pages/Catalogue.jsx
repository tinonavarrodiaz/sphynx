const Catalogue = () => {
  return (
    <section className="Tequilas Catalogue">
      <img src="/img/logo.svg" alt="logo" />
      <iframe
        className="showPDF"
        src="/media/DigitalFile.pdf"
        type="application/pdf"
        // width="550"
        // height="800"
      ></iframe>
      <div className="link-container">
        <a
          href="/media/DigitalFile.pdf"
          target="_blank"
          download
          rel="noopener noreferrer"
        >
          download
        </a>
      </div>
    </section>
  );
};

export default Catalogue;
