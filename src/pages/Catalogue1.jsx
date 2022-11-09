import { useEffect, useRef } from 'react';
import React, { forwardRef } from 'react';
import HTMLFlipBook from 'react-pageflip';

const Catalogue = () => {
  const images = [];
  if (window.innerWidth < 787) {
    for (let index = 1; index < 33; index++) {
      images.push(`BookWebsite-${index}.jpg`);
    }
  } else {
    for (let index = 0; index < 34; index++) {
      images.push(`BookWebsite-${index}.jpg`);
    }
  }

  const book = useRef();

  useEffect(() => {
    // console.log(images);
  }, []);

  const prevButtonClick = (e) => {
    console.log(book.current);
    book.current.click();
  };
  const nextButtonClick = () => {};

  return (
    <section className="Tequilas Catalogue">
      <img className="Catalogue__logo" src="/img/logo.svg" alt="logo" />

      <div className="bookC" ref={book}>
        <HTMLFlipBook
          width={550}
          height={733}
          size="stretch"
          minWidth={315}
          maxWidth={600}
          minHeight={400}
          maxHeight={1533}
          maxShadowOpacity={0.5}
          showCover={false}
          mobileScrollSupport={true}
          // ref={book}
          // onFlip={this.onPage}
          // onChangeOrientation={this.onChangeOrientation}
          // onChangeState={this.onChangeState}
          className="demo-book"
        >
          {images.map((img, i) => (
            <img key={i} src={`img/book/${img}`} alt={`book ${i}`} />
          ))}
        </HTMLFlipBook>
      </div>
      <div className="buttonsBook">
        <button type="button" onClick={prevButtonClick}>
          Previous page
        </button>
        <button type="button" onClick={nextButtonClick}>
          Next page
        </button>
      </div>
    </section>
  );
};

export default Catalogue;
