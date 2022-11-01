import { useEffect } from 'react';

function Cookie() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="policy">
      <h1>COOKIES POLICY</h1>
      <p>
        When you interact with the SPHYNX Tequila, we try to make that
        experience simple and meaningful. When you visit the SPHYNX Tequila, our
        Web server sends a cookie to your computer or mobile device. Cookies are
        small pieces of information which are issued to your computer or mobile
        device when you visit a website or access or use a mobile application
        and which store and sometimes track information about your use of the
        SPHYNX Tequila. A number of cookies we use last only for the duration of
        your session and expire when you close your browser or exit the UENI
        Platform. Other cookies are used to remember you when you return to the
        SPHYNX Tequila and will last for longer. We use cookies to:
      </p>
      <ul className="info-list">
        <li>remember that you have visited us before;</li>
        <li>
          {' '}
          customise elements of the promotional layout and/or content of the
          pages of the SPHYNX Tequila;
        </li>
        <li>
          collect anonymous statistical information about how you use the UENI
          Platform including how long you spend on the SPHYNX Tequila and where
          you have come to the SPHYNX Tequila from, so that we can improve the
          SPHYNX Tequila and learn which parts of the SPHYNX Tequila are most
          popular with users; and
        </li>
        <li>
          {' '}
          gather information about the pages on the SPHYNX Tequila you use, and
          also other information about other websites that you visit, so as to
          place you in a "market segment". This information is then used to
          place interest-based advertisements on the SPHYNX Tequila which it is
          believed will be relevant to your market segment. For more information
          about this type of interest based advertising
        </li>
      </ul>

      <p>
        Some of the cookies used by the SPHYNX Tequila are set by us, and some
        are set by third parties who are delivering services on our behalf.
      </p>
      <p>
        Most web and mobile device browsers automatically accept cookies but, if
        you prefer, you can change your browser settings to prevent that or to
        notify you each time a cookie is set. Please note, however, that by
        blocking or deleting cookies used on the SPHYNX Tequila, you may not be
        able to take full advantage of the SPHYNX Tequila.
      </p>
      <p>
        In addition to cookies, tracking Gifs may be set by us or third parties
        in respect of your use of the SPHYNX Tequila. Tracking Gifs are small
        image files within the content of the SPHYNX Tequila or the body of our
        newsletters so we or third parties can understand parts of the UENI
        Platform are used and whether particular content is of interest.
      </p>
    </section>
  );
}

export default Cookie;
