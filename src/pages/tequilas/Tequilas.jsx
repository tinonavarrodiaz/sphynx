import Separator from '../../components/Separator';
import Buttons from './components/Buttons';
import Products from './components/Products';
import { useEffect } from 'react';

const Tequilas = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="Tequilas">
      <Products />
      <Separator />
      <Buttons />
    </section>
  );
};

export default Tequilas;
