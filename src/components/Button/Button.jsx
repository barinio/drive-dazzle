import { useDispatch } from 'react-redux';
import b from './Button.module.scss';

import { setIsOpenModal } from '../../redux/slice/isOpenModalSlice';
import { setCarInfo } from '../../redux/slice/carInfoSlice';
import { useCallback } from 'react';

function Button({ text, car }) {
  const dispatch = useDispatch();

  const learnMore = car => {
    dispatch(setCarInfo(car));
    dispatch(setIsOpenModal(true));
  };

  const closeModal = useCallback(() => {
    dispatch(setIsOpenModal(false));
    alert(
      "You can contact the company by tel: +380730000000 \n\nApologize, it's just my Pet-project, but anyway I want to congratulate you!!! Car rent done succesfull😁🥳🎉"
    );
  }, [dispatch]);

  const filterSearch = () => {};

  return (
    (text === 'Learn more' && (
      <button className={b.btnLearnMore} onClick={() => learnMore(car)}>
        {text}
      </button>
    )) ||
    (text === 'Rental car' && (
      <button className={b.rentalCar} onClick={closeModal}>
        <a href="tel:+380730000000">{text}</a>
      </button>
    )) ||
    (text === 'Search' && (
      <button className={b.search} onClick={filterSearch}>
        {text}
      </button>
    ))
  );
}

export default Button;
