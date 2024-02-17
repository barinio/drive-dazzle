import makes from './makes.json';
import f from './Filter.module.scss';

import { Autocomplete, TextField } from '@mui/material';
import Button from '../Button/Button';
import { useState } from 'react';

export const Filter = () => {
  const [make, setMake] = useState(null);

  const generatePriceArr = () => {
    return Array.from({ length: 100 }, (_, index) => ({
      value: (index + 1) * 10,
      label: `${(index + 1) * 10}$`,
    }));
  };
  const priceOptions = generatePriceArr();

  return (
    <div className={f.container}>
      <div>
        <p className={f.caption}>Car brand</p>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={makes}
          onChange={(event, value) => {
            setMake(value);
          }}
          sx={{
            width: 224,
            backgroundColor: '#F7F7FB',
            borderRadius: '14px',
            border: 'none',
            button: {
              width: '24px',
              justifyContent: 'flex-end',
            },
            label: { color: 'var(--prim-black-color)' },
            fieldset: { padding: '0px', border: 'none' },
          }}
          renderInput={params => {
            return <TextField {...params} label="Makes" />;
          }}
        />
      </div>
      <div>
        <p className={f.caption}>Price/ 1 hour</p>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={priceOptions}
          sx={{
            width: 125,
            backgroundColor: '#F7F7FB',
            borderRadius: '14px',
            border: 'none',
            button: {
              width: '24px',
              justifyContent: 'flex-end',
            },
            label: { color: 'var(--prim-black-color)' },
            fieldset: { padding: '0px', border: 'none' },
          }}
          renderInput={params => <TextField {...params} label="To $" />}
        />
      </div>
      <div className={f.mileageWrap}>
        <p className={f.caption}>Сar mileage / km 10</p>
        <div className={f.mileage}>
          <div>
            <span>From</span>
            <input type="text" />
          </div>
          <div>
            <span>To</span>
            <input type="text" />
          </div>
        </div>
      </div>
      <Button text="Search" make={make} />
    </div>
  );
};
