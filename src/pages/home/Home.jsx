import Banner from '../../components/Banner';
import Separator from '../../components/Separator';
import Born from './components/Born';
import Family from './components/Family';
import Leyend from './components/Leyend';
import Video1 from './components/Video1';

const Home = () => {
  return (
    <div className="Home">
      <Video1 img="/img/video.jpg" />
      <Leyend />
      <Born />
      <Separator />
      <Family />
      <Banner img="/img/landscape1.jpg" />
    </div>
  );
};

export default Home;
