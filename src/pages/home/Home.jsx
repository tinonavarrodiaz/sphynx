import Banner from '../../components/Banner';
import Separator from '../../components/Separator';
import Born from './components/Born';
import Family from './components/Family';
import Leyend from './components/Leyend';
import Video from './components/video';

const Home = () => {
  return (
    <section className="Home">
      <Video img="/img/video.jpg" />
      {/* <Banner img="/img/video.jpg" /> */}
      <Leyend />
      <Born />
      <Separator />
      <Family />
      <Banner img="/img/landscape1.jpg" />
    </section>
  );
};

export default Home;
