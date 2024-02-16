import Button from '../Button/Button';
import item from './CarItem.module.scss';
import randomImg from '../../images/car.jpeg';
import icons from '../../images/icons.svg';

export const CarItem = ({ car }) => {
  const {
    make,
    year,
    model,
    type,
    img,
    functionalities,
    rentalCompany,
    address,
    rentalPrice,
    id,
  } = car;

  const addressParts = address.split(', ');
  const classCar = rentalCompany.split(' ');
  const features = functionalities[0].split(' ').slice(0, 2);
  const typeCar = type.toLowerCase();

  const addFavorite = () => {};

  return (
    <li className={item.carItem}>
      <div>
        <button
          className={item.favoriteBtn}
          type="button"
          onClick={addFavorite}
        >
          <svg width="18" height="18">
            <use href={icons + '#icon-favorite'}></use>
          </svg>
        </button>
        <img
          src={img || randomImg}
          alt={make}
          width={274}
          height={268}
          className={item.carImg}
        />
        <div>
          <div className={item.carMainInfo}>
            <h3>
              {make} {model && <span>{model}</span>}, {year}
            </h3>
            <p>{rentalPrice}</p>
          </div>
          <div className={item.carAdditionalInfo}>
            <ul>
              <li>
                <p>{addressParts[1]}</p>
              </li>
              <li>
                <p>{addressParts[2]}</p>
              </li>
              <li>
                <p>{rentalCompany}</p>
              </li>
              <li>
                <p>{classCar[0]}</p>
              </li>
            </ul>
            <ul>
              <li>
                <p className={item.carType}>{typeCar}</p>
              </li>
              <li>
                <p>{model}</p>
              </li>
              <li>
                <p>{id}</p>
              </li>
              <li>
                <p>{features.join(' ')}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Button text="Learn more" car={car} />
    </li>
  );
};
