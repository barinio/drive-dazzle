import { useSelector } from 'react-redux';
import { Container } from '../components/Container/Container';
import { Section } from '../components/Section/Section';
import { selectFavorites } from '../redux/cars.selectors';
import { CarItem } from '../components/CarItem/CarItem';

import rentalCars from './CarsRentPage.module.scss';

const FavoriteCarsPage = () => {
  const favoriteCars = useSelector(selectFavorites);
  return (
    <Section title="FavoriteCarsPage!">
      <Container>
        <div className={rentalCars.wrapper}>
          {favoriteCars.length === 0 ? (
            <>
              <div>Here empty yet</div>
            </>
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
