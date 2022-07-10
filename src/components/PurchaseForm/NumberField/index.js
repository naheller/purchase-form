import { TextField, InputAdornment } from "@mui/material";

export default function NumberField({
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
      onBlur={(e) => {
        if (isFloat) {
          e.target.value = value;
          onChange(e);
        }
      }}
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
        step: isFloat ? "0.01" : "1",
      }}
    />
  );
}
