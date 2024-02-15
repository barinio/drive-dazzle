import Button from '../Button/Button';
import item from './CarItem.module.scss';
import randomImg from '../../images/car.jpeg';
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
    // description,
  } = car;
  const addressParts = address?.split(', ');
  const classCar = rentalCompany?.split(' ');
  const features = functionalities[0]?.split(' ').slice(0, 2);

  return (
    <li className={item.carItem}>
      <div>
        <img src={img || randomImg} alt={make} width={274} height={268} />
        <div>
          <div className={item.carMainInfo}>
            <p>
              {make} {model && <span>{model}</span>}, {year}
            </p>
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
                <p>{type}</p>
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
