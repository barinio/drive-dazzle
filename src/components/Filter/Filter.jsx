// import { useDispatch } from 'react-redux';
import makes from './makes.json';
import f from './Filter.module.scss';
// import { setFilter } from 'redux/contacts/filterSlice';

import { Autocomplete, TextField } from '@mui/material';

export const Filter = () => {
  // const dispatch = useDispatch();
  return (
    <>
      <p className={f.caption}>Car brand</p>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={makes}
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
        renderInput={params => <TextField {...params} label="Enter the text" />}
      />
    </>
  );
};

// '.MuiFormLabel-root.Mui-focused': { display: 'none' },
// '.MuiOutlinedInput-root': { padding: '0' },

// onChange={e => dispatch(setFilter(e.target.value))}
