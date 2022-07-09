import { TextField, InputAdornment } from "@mui/material";

function App({
  id,
  label,
  value,
  onChange,
  error,
  helperText,
  placeholder,
  unitOfMeasurement,
  isFloat,
}) {
  return (
    <TextField
      fullWidth
      id={id}
      label={label}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      variant="outlined"
      margin="normal"
      type="number"
      placeholder={placeholder}
      InputLabelProps={{ shrink: true }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">{unitOfMeasurement}</InputAdornment>
        ),
      }}
      inputProps={{
        inputMode: "numeric",
        step: isFloat ? "0.01" : "1",
      }}
    />
  );
}

export default App;
