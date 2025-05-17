// components/StyledTextField.js
import TextField from '@mui/material/TextField';

const StyledTextField = (props) => (
  <TextField
    variant="filled"
    fullWidth
    focused
    required
    InputLabelProps={{
      sx: {
        color: '#58595b',
        fontWeight: 'bold',
        fontSize: '18px',
      },
    }}
    InputProps={{
      sx: {
        backgroundColor: 'transparent',
        '&:hover': { backgroundColor: 'transparent' },
        '&.Mui-focused': { backgroundColor: 'transparent' },
        marginY: '10px',
        color: '#58595b',
      },
    }}
    inputProps={{
      style: {
        color: '#58595b',
        fontSize: '13px',
      },
    }}
    {...props} // allow custom label, id, placeholder etc.
  />
);

export default StyledTextField;