import Banner from '../../components/Banner';
import Map from './components/Map';
import Way from './components/Way';
import Separator from '../../components/Separator';

const Buy = () => {
  return (
    <>
      <section className="Buy">
        <Map />
        <Separator />
        <Way />
      </section>
      <Banner img="img/buy-banner.jpg" />
    </>
  );
};

export default Buy;
