import React from 'react';
import Picture from '../../../components/Picture';

function Way() {
  return (
    <div className="Way">
      <div className="Way__grid grid grid-col-2">
        {/* <img src="/img/buy1.jpg" alt="Sphynx Bottle" data-aos="fade-right" /> */}
        <div data-aos="fade-right">
          <Picture img="buy1" ext="jpg" alt="Sphynx Bottle" />
        </div>
        <div className="Way__text" data-aos="fade-left">
          <h2>The authentic way</h2>
          <p>
            For generations Tequila has been sipped and enjoyed neat or over
            ice, allowing one to savour the flavours of skilled production.
            SPHYNX Tequila® does not require lime or salt, it will be a taste
            that you will want to enjoy slowly.
          </p>
          <p>
            “We don’t create hangovers, we create experiences and we want you to
            savour every single drop.”
          </p>
        </div>
      </div>
    </div>
  );
}

export default Way;
