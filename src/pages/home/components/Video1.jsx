import { useEffect, useRef } from 'react';
import { isMobile } from '../../../helpers/isMobile';

export default function Video1({ img }) {
  const videoEl = useRef(null);
  const imgElemen = '<img src="/img/home1.jpg">';
  const videoElement = `
    <video autoPlay playsInline disablePictureInPicture muted loop id="video">
      <source src="/media/Intro_Sphynx-720.mp4" type="video/mp4"/>
    </video>
  `;
  useEffect(() => {
    console.log(isMobile);
    isMobile
      ? videoEl.current.insertAdjacentHTML('beforebegin', imgElemen)
      : videoEl.current.insertAdjacentHTML('beforebegin', videoElement);
    const video = videoEl.current.querySelector('video')
      ? videoEl.current.querySelector('video').play()
      : null;
  }, []);
  return (
    <div className="Video" ref={videoEl}>
      {/* <img src={'/img/video.jpg'} alt="Video" /> */}
    </div>
  );
}
