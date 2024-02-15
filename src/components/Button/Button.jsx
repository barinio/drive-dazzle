import { useDispatch } from 'react-redux';
import b from './Button.module.scss';

import { setIsOpenModal } from '../../redux/carInfo/isOpenModalSlice';
import { setCarInfo } from '../../redux/carInfo/carInfoSlice';

function Button({ text, car }) {
  const dispatch = useDispatch();

  const learnMore = car => {
    dispatch(setCarInfo(car));
    dispatch(setIsOpenModal(true));
  };
  return (
    (text === 'Learn more' && (
      <button className={b.btnLearnMore} onClick={() => learnMore(car)}>
        {text}
      </button>
    )) ||
    (text === 'Load more' && (
      <button className={b.btnLoadMore} onClick={learnMore}>
        {text}
      </button>
    ))
  );
}

export default Button;
