import { useState, useEffect } from 'react';
import './accessibility.scss';
import './icons.css';

const Accessibility = () => {
  const [access, setAccess] = useState(false);
  const [element, setElement] = useState(null);

  useEffect(() => {
    setElement(document.getElementById('accessibility-menu'));
  }, [access]);

  const accessibilityMenu = () => {
    access ? setAccess(false) : setAccess(true);
  };

  const rightPos = (e) => {
    element.classList.toggle('right');
  };

  const toggleQuestion = (e) => {
    document.querySelector('.ref').classList.toggle('show');
  };
  const profileClick = (e) => {
    let This = e.target;

    while (!This.classList.contains('acsb-profile')) {
      This = This.parentElement;
    }

    const input = This.querySelector('input');
    input.click();

    // !input.checked ? input.checked=true : input.checked = false

    // This.querySelector('input').checked = true
    // console.log(This.querySelector('input'))
  };

  const resetAll = (e) => {
    const inputs = [
      ...document.querySelectorAll('.acceessibilityContainer input'),
    ];

    inputs.map((input) => (input.checked ? input.click() : null));
  };

  const inputChange = (e) => {
    const This = e.target;
    // console.log(This)
    This.checked
      ? document.documentElement.classList.add(This.name)
      : document.documentElement.classList.remove(This.name);
  };

  return (
    <>
      <button
        className="acceessibility-btn"
        id="acceessibility"
        onClick={accessibilityMenu}
      >
        <img src="/img/acces1.png" alt="" />
      </button>
      {/* <div className="accessibilityMenu fixed w-[80vw] max-w-[450px] h-[80vh] max-h-[750px] bg-gradient-to-b from-[#146ff8] to-white bottom-[40px] left-[40px] z-[5500]">


    </div> */}

      <div className={`acceessibilityContainer`}>
        <aside
          className={`accessibility-menu ${access ? 'active' : ''}`}
          id="accessibility-menu"
        >
          <header className="accessibility-menu__header">
            <span
              onClick={accessibilityMenu}
              className="icon-times"
              id="accessibility-close"
            ></span>
            <span
              className="icon-arrows-h"
              onClick={rightPos}
              id="right-place"
            ></span>
            <span
              className="icon-question"
              id="question"
              onClick={toggleQuestion}
            ></span>
          </header>
          <h2 className="accessibility-menu__title">
            Accessibility Adjustments
          </h2>
          <button
            className="refresh icon-refresh"
            id="refresh"
            onClick={resetAll}
          >
            Reset Settings
          </button>
          <article className="accessibility-menu__body">
            <ul className="accessibility-menu__action">
              <p>Choose the right accessibility profile for you</p>
              <li>
                <div className="acsb-profile">
                  <div className="acsb-profile-toggle">
                    <input
                      onChange={inputChange}
                      className="Seizure switch"
                      type="checkbox"
                      name="Seizure"
                      id="Seizure"
                    />
                    <label className="switch-label" htmlFor="Seizure"></label>
                  </div>
                  <div className="acsb-profile-content " onClick={profileClick}>
                    <span className="acsb-profile-name">
                      Seizure Safe Profile
                    </span>
                    <span className="acsb-profile-text">
                      Eliminates flashes and reduces color
                    </span>
                  </div>
                </div>
                <p className="acsb-profile-description">
                  This profile enables epileptic and seizure prone users to
                  browse safely by eliminating the risk of seizures that result
                  from flashing or blinking animations and risky color
                  combinations.
                </p>
              </li>
              <li>
                <div className="acsb-profile">
                  <div className="acsb-profile-toggle">
                    <input
                      onChange={inputChange}
                      className="one switch"
                      type="checkbox"
                      name="Vision"
                      id="Vision"
                    />
                    <label className="switch-label" htmlFor="Vision"></label>
                  </div>
                  <div className="acsb-profile-content" onClick={profileClick}>
                    <span className="acsb-profile-name">
                      Vision Impaired Profile
                    </span>
                    <span className="acsb-profile-text">
                      Enhances the website's visuals
                    </span>
                  </div>
                </div>
                <p className="acsb-profile-description">
                  This profile adjusts the website, so that it is accessible to
                  the majority of visual impairments such as Degrading Eyesight,
                  Tunnel Vision, Cataract, Glaucoma, and others.li
                </p>
              </li>
              <li>
                <div className="acsb-profile">
                  <div className="acsb-profile-toggle">
                    <input
                      onChange={inputChange}
                      className="one switch"
                      type="checkbox"
                      name="Cognitive"
                      id="Cognitive"
                    />
                    <label className="switch-label" htmlFor="Cognitive"></label>
                  </div>
                  <div className="acsb-profile-content" onClick={profileClick}>
                    <span className="acsb-profile-name">
                      Cognitive Disability Profile
                    </span>
                    <span className="acsb-profile-text">
                      Assists with reading and focusing
                    </span>
                  </div>
                </div>
                <p className="acsb-profile-description">
                  This profile provides various assistive features to help users
                  with cognitive disabilities such as Autism, Dyslexia, CVA, and
                  others, to focus on the essential elements of the website more
                  easily.
                </p>
              </li>
            </ul>
          </article>
          <div className="ref">
            <span
              className="ref__close icon-times"
              onClick={toggleQuestion}
            ></span>
            <div className="ref__header">
              <h2>Accessibility Statemen</h2>
              <ul>
                <li>www.sphynxtequila.com</li>
                <li>October 2022</li>
              </ul>
            </div>
            <div className="ref__body">
              <h3>Compliance status</h3>
              <p>
                We firmly believe that the internet should be available and
                accessible to anyone, and are committed to providing a website
                that is accessible to the widest possible audience, regardless
                of circumstance and ability.
              </p>
              <p>
                To fulfill this, we aim to adhere as strictly as possible to the
                World Wide Web Consortium’s (W3C) Web Content Accessibility
                Guidelines 2.1 (WCAG 2.1) at the AA level. These guidelines
                explain how to make web content accessible to people with a wide
                array of disabilities. Complying with those guidelines helps us
                ensure that the website is accessible to all people: blind
                people, people with motor impairments, visual impairment,
                cognitive disabilities, and more.
              </p>
              <p>
                This website utilizes various technologies that are meant to
                make it as accessible as possible at all times. We utilize an
                accessibility interface that allows persons with specific
                disabilities to adjust the website’s UI (user interface) and
                design it to their personal needs.
              </p>
              <p>
                Additionally, the website utilizes an AI-based application that
                runs in the background and optimizes its accessibility level
                constantly. This application remediates the website’s HTML,
                adapts its functionality and behavior for screen-readers used by
                blind users, and for keyboard functions used by individuals with
                motor impairments.
              </p>
              <p>
                If you wish to contact the website's owner please use the
                following email support@sphynxtequila.com
              </p>
              <h3>Assistive technology and browser compatibility</h3>
              <p>
                We aim to support the widest array of browsers and assistive
                technologies as possible, so our users can choose the best
                fitting tools for them, with as few limitations as possible.
                Therefore, we have worked very hard to be able to support all
                major systems that comprise over 95% of the user market share
                including Google Chrome, Mozilla Firefox, Apple Safari, Opera
                and Microsoft Edge, both for Windows and for MAC users.
              </p>
              <h3>Notes, comments, and feedback</h3>
              <p>
                Despite our very best efforts to allow anybody to adjust the
                website to their needs, there may still be pages or sections
                that are not fully accessible, are in the process of becoming
                accessible, or are lacking an adequate technological solution to
                make them accessible. Still, we are continually improving our
                accessibility, adding, updating, and improving its options and
                features, and developing and adopting new technologies. All this
                is meant to reach the optimal level of accessibility, following
                technological advancements. If you wish to contact the website's
                owner please use the following email support@sphynxtequila.com
              </p>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Accessibility;
