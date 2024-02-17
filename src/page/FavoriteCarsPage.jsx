import { useSelector } from 'react-redux';
import { Container } from '../components/Container/Container';
import { Section } from '../components/Section/Section';
import { selectFavorites } from '../redux/cars.selectors';
import { CarItem } from '../components/CarItem/CarItem';

import rentalCars from './pages.module.scss';
import { NoContent } from '../components/NoContent/NoContent';

const FavoriteCarsPage = () => {
  const favoriteCars = useSelector(selectFavorites);
  return (
    <Section title="Your favorite rental cars!">
      <Container>
        <div className={rentalCars.favoriteWrapper}>
          {favoriteCars.length === 0 ? (
            <NoContent />
          ) : (
            <ul className={rentalCars.listCards}>
              {favoriteCars.map(e => (
                <CarItem key={e.id} car={e} />
              ))}
            </ul>
          )}
        </div>
      </Container>
    </Section>
  );
};

export default FavoriteCarsPage;
