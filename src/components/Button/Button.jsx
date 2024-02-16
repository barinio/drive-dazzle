import { useDispatch } from 'react-redux';
import b from './Button.module.scss';

import { setIsOpenModal } from '../../redux/carInfo/isOpenModalSlice';
import { setCarInfo } from '../../redux/carInfo/carInfoSlice';
import { useCallback } from 'react';

function Button({ text, car }) {
  const dispatch = useDispatch();

  const learnMore = car => {
    dispatch(setCarInfo(car));
    dispatch(setIsOpenModal(true));
  };
  const loadMore = () => {};

  const closeModal = useCallback(() => {
    dispatch(setIsOpenModal(false));
    alert(
      "Apologize, it's just my pet project, but anyway I want to congratulate you!!! Car rent done succesfull😁🥳🎉"
    );
  }, [dispatch]);
  return (
    (text === 'Learn more' && (
      <button className={b.btnLearnMore} onClick={() => learnMore(car)}>
        {text}
      </button>
    )) ||
    (text === 'Load more' && (
      <button className={b.btnLoadMore} onClick={loadMore}>
        {text}
      </button>
    )) ||
    (text === 'Rental car' && (
      <button className={b.rentalCar} onClick={closeModal}>
        {text}
      </button>
    ))
  );
}

export default Button;
