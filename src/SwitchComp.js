import './SwitchComp.css';
import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';

export default function SwitchesGroup() {
  const [state, setState] = React.useState({
    online: true,
    // jason: false,
    // antoine: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className='switchsompCN'>
    <FormControl component="fieldset" >
      <FormLabel component="legend">Online Mode</FormLabel>
      <FormGroup>
      <FormHelperText>Is this application connected to the internet?</FormHelperText>

        <FormControlLabel
          control={<Switch checked={state.gilad} onChange={handleChange} name="gilad" />}
          label=""
        />
        {/* <FormControlLabel
          control={<Switch checked={state.jason} onChange={handleChange} name="jason" />}
          label="Jason Killian"
        /> */}
        {/* <FormControlLabel
          control={<Switch checked={state.antoine} onChange={handleChange} name="antoine" />}
          label="Antoine Llorca"
        /> */}
      </FormGroup>
      
    </FormControl>
    </div>
  );
}
