import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  FormHelperText,
} from "@mui/material";

function TypeSelector({ id, label, onChange, error, helperText }) {
  return (
    <FormControl fullWidth id={id} margin="normal" error={error}>
      <InputLabel id={`${id}-label`}>{label}</InputLabel>
      <Select
        label={label}
        labelId={`${id}-label`}
        defaultValue=""
        onChange={onChange(id)}
      >
        <MenuItem value="capacitor">Capacitor</MenuItem>
        <MenuItem value="resistor">Resistor</MenuItem>
        <MenuItem value="transistor">Transistor</MenuItem>
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
}

export default TypeSelector;
