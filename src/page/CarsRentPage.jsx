import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../components/Container/Container';
import { Section } from '../components/Section/Section';
import { catatlogCarsThunk } from '../redux/cars/carsThunk';
import {
  selectCatalogCarsData,
  selectFilter,
  selectNextPage,
} from '../redux/cars.selectors';
import { CarItem } from '../components/CarItem/CarItem';
import { Filter } from '../components/Filter/Filter';
import { setNextPage } from '../redux/slice/nextApiPageSlice';
import { NoContent } from '../components/NoContent/NoContent';

import rentalCars from './pages.module.scss';
const CarsRentPage = () => {
  const dispatch = useDispatch();
  const [carsData, setCarData] = useState([]);
  const responseCarData = useSelector(selectCatalogCarsData);
  const nextPage = useSelector(selectNextPage);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    if (responseCarData.length === 0) {
      dispatch(catatlogCarsThunk({ page: 1 }));
    }
  }, [dispatch, responseCarData]);

  useEffect(() => {
    if (filter !== null) {
      const filterList = responseCarData.filter(car => car.make === filter);
      setCarData(filterList);
      return;
    }
    setCarData(responseCarData);
  }, [responseCarData, filter]);

  const loadMore = () => {
    nextPage === 2 && dispatch(setNextPage(3));
    nextPage === 3 && dispatch(setNextPage(4));
    nextPage === 4 && dispatch(setNextPage(5));
    nextPage === 5 && dispatch(setNextPage(6));
    nextPage === 6 && dispatch(setNextPage(7));
    nextPage === 7 && dispatch(setNextPage(8));
    nextPage === 8 && dispatch(setNextPage(9));
    nextPage === 9 && dispatch(setNextPage(10));
    dispatch(catatlogCarsThunk({ page: nextPage }));
  };

  return (
    <>
      <Section title="All adverts">
        <Container>
          <div className={rentalCars.wrapper}>
            <Filter />
            {carsData.length === 0 ? (
              <NoContent />
            ) : (
              <ul className={rentalCars.listCards}>
                {carsData.map(e => (
                  <CarItem key={e.id} car={e} />
                ))}
              </ul>
            )}
            {carsData.length !== 0 && nextPage < 10 && filter === null && (
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
