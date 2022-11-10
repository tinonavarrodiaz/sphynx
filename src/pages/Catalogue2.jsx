// import './styles.css';
import React, { forwardRef } from 'react';
// import pageFlipSFX from '../page-flip-01a.mp3';

import HTMLFlipBook from 'react-pageflip';
// import useSound from 'use-sound';

export default function Catalogue() {
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
  // const [soundOn, setSoundOn] = React.useState(true);
  // const [play] = useSound(pageFlipSFX);
  const flipbook = React.useRef(null);

  // const onFlip = React.useCallback(
  //   (e) => {
  //     // console.log(e.object);
  //     // console.log("Current page: " + e.data);
  //     soundOn && play();
  //   },
  //   [play, soundOn]
  // );

  const flipBack = React.useCallback(() => {
    const pageFlipObj = flipbook.current.pageFlip();
    if (pageFlipObj?.getCurrentPageIndex() === 0) {
      // pageFlipObj.flip(pageFlipObj?.getPageCount() - 1);
    } else {
      pageFlipObj.flipPrev();
    }
  }, [flipbook]);

  const flipForward = React.useCallback(() => {
    const pageFlipObj = flipbook.current.pageFlip();
    if (
      pageFlipObj?.getCurrentPageIndex() + 2 ===
      pageFlipObj?.getPageCount()
    ) {
      // pageFlipObj.flip(0);
    } else {
      pageFlipObj.flipNext();
    }
  }, [flipbook]);
  const first = React.useCallback(() => {
    const pageFlipObj = flipbook.current.pageFlip();
    pageFlipObj.flip(0);
  });

  return (
    <section className="Tequilas Catalogue">
      <img className="Catalogue__logo" src="/img/logo.svg" alt="logo" />
      {/* <h2 onClick={() => setSoundOn((prev) => !prev)}>
        Click here to TURN {soundOn ? 'OFF' : 'ON'} audio
      </h2> */}
      <span>
        <div className="flipbook">
          <HTMLFlipBook
            ref={flipbook}
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
          <button type="button" onClick={flipBack}>
            Previous page
          </button>
          <button type="button" onClick={flipForward}>
            Next page
          </button>
          <button type="button" onClick={first}>
            First Page
          </button>
          <a className="ext-link" href="/media/DigitalFile.pdf" download>
            Download PDF
          </a>
        </div>
      </span>
    </section>
  );
}
