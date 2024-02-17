import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../components/Container/Container';
import { Section } from '../components/Section/Section';
import { catatlogCarsThunk } from '../redux/cars/carsThunk';
import { selectCatalogCarsData, selectNextPage } from '../redux/cars.selectors';

import { CarItem } from '../components/CarItem/CarItem';

import rentalCars from './CarsRentPage.module.scss';
import { Filter } from '../components/Filter/Filter';
import { setNextPage } from '../redux/slice/nextApiPageSlice';

const CarsRentPage = () => {
  const dispatch = useDispatch();
  const responseCarData = useSelector(selectCatalogCarsData);
  const nextPage = useSelector(selectNextPage);

  useEffect(() => {
    if (responseCarData.length === 0) {
      dispatch(catatlogCarsThunk(1));
    }
  }, [dispatch, responseCarData]);

  const loadMore = () => {
    nextPage === 2 && dispatch(setNextPage(3));
    nextPage === 3 && dispatch(setNextPage(4));
    dispatch(catatlogCarsThunk(nextPage));
  };

  return (
    <>
      <Section title="All adverts">
        <Container>
          <div className={rentalCars.wrapper}>
            <Filter />
            <ul className={rentalCars.listCards}>
              {responseCarData.map(e => (
                <CarItem key={e.id} car={e} />
              ))}
            </ul>
            {nextPage < 4 && (
              <button className={rentalCars.btnLoadMore} onClick={loadMore}>
                Load more
              </button>
            )}
          </div>
        </Container>
      </Section>
    </>
  );
};

export default CarsRentPage;
