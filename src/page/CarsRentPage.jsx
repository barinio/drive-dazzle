import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../components/Container/Container';
import { Section } from '../components/Section/Section';
import { catatlogCarsThunk } from '../redux/cars/carsThunk';
import {
  selectCatalogCarsData,
  selectIsOpenModal,
} from '../redux/cars/cars.selectors';
import { CarItem } from '../components/CarItem/CarItem';

import rentalCars from './CarsRentPage.module.scss';
import { Filter } from '../components/Filter/Filter';
import Button from '../components/Button/Button';
import { ModalCar } from '../components/ModalCar/ModalCar';

const CarsRentPage = () => {
  const dispatch = useDispatch();

  const isOpenModal = useSelector(selectIsOpenModal);

  const allCars = useSelector(selectCatalogCarsData);

  useEffect(() => {
    dispatch(catatlogCarsThunk());
  }, [dispatch]);

  useEffect(() => {
    document.body.style.overflow = isOpenModal ? 'hidden' : '';
  }, [isOpenModal]);

  return (
    <>
      <Section>
        <Container>
          <div className={rentalCars.wrapper}>
            <Filter />
            <ul className={rentalCars.listCards}>
              {allCars.map(e => (
                <CarItem key={e.id} car={e} />
              ))}
            </ul>
            <Button text="Load more" />
          </div>
        </Container>
      </Section>

      {isOpenModal && <ModalCar />}
    </>
  );
};

export default CarsRentPage;
