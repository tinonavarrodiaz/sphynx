import { useEffect, useRef } from 'react';
import { isMobile } from '../../../helpers/isMobile';

export default function Video1({ img }) {
  const videoEl = useRef(null);
  const imgElemen = '<img src="/img/home1.jpg">';
  const videoElement = `
    <video playsInline disablePictureInPicture muted loop id="video">
      <source src="/media/Intro_Sphynx-720.mp4" type="video/mp4"/>
    </video>
  `;
  useEffect(() => {
    console.log(isMobile);
    isMobile
      ? videoEl.current.insertAdjacentHTML('afterbegin', imgElemen)
      : videoEl.current.insertAdjacentHTML('afterbegin', videoElement);
    const video =
      videoEl.current.querySelector('video') && sessionStorage.getItem('access')
        ? videoEl.current.querySelector('video').play()
        : null;

    const screenHeight = window.innerHeight;
    const headerHeight = document.querySelector('.main-header').clientHeight;
    const videoHeight = document.querySelector('video')
      ? document.querySelector('video').clientHeight
      : null;

    if (videoHeight && videoHeight >= screenHeight - headerHeight) {
      videoEl.current.classList.add('video-cut');
    }
  }, []);
  return (
    <div className="Video" ref={videoEl}>
      {/* <img src={'/img/video.jpg'} alt="Video" /> */}
    </div>
  );
}
