import { useFormik } from "formik";
import { Button, Container, Typography } from "@mui/material";
import * as yup from "yup";

import TypeSelector from "./TypeSelector";
import NumberField from "./NumberField";

const validationSchema = yup
  .object({
    type: yup.string().required(),
    nominal_capacitance: yup.number().positive().required(),
    working_voltage: yup.number().positive().integer().required(),
    tolerance: yup.number().positive().max(1).required(),
    working_temperature: yup.number().positive().integer().required(),
    temperature_coefficient: yup.number().positive().max(1).required(),
  })
  .required();

export default function PurchaseForm() {
  const formik = useFormik({
    initialValues: {
      type: "",
      nominal_capacitance: "",
      working_voltage: "",
      tolerance: "",
      working_temperature: "",
      temperature_coefficient: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  console.log("formik", formik);

  const { values, handleSubmit, handleChange, touched, errors } = formik;

  return (
    <Container maxWidth="xs">
      <Typography variant="h5" component="h1" mt={4} mb={1}>
        Purchase Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <TypeSelector
          id="type"
          label="Component Type"
          onChange={handleChange}
          error={touched.type && Boolean(errors.type)}
          helperText={touched.type && errors.type}
        />
        <NumberField
          id="nominal_capacitance"
          label="Nominal Capacitance"
          value={values.nominal_capacitance}
          onChange={handleChange}
          error={
            touched.nominal_capacitance && Boolean(errors.nominal_capacitance)
          }
          helperText={touched.nominal_capacitance && errors.nominal_capacitance}
          placeholder="0.02"
          unitOfMeasurement="pF"
          isFloat
        />
        <NumberField
          id="working_voltage"
          label="Working Voltage"
          value={values.working_voltage}
          onChange={handleChange}
          error={touched.working_voltage && Boolean(errors.working_voltage)}
          helperText={touched.working_voltage && errors.working_voltage}
          placeholder="200"
          unitOfMeasurement="volts"
        />
        <NumberField
          id="tolerance"
          label="Tolerance"
          value={values.tolerance}
          onChange={handleChange}
          error={touched.tolerance && Boolean(errors.tolerance)}
          helperText={touched.tolerance && errors.tolerance}
          placeholder="0.05"
          unitOfMeasurement="mm"
          isFloat
        />
        <NumberField
          id="working_temperature"
          label="Working Temperature"
          value={values.working_temperature}
          onChange={handleChange}
          error={
            touched.working_temperature && Boolean(errors.working_temperature)
          }
          helperText={touched.working_temperature && errors.working_temperature}
          placeholder="125"
          unitOfMeasurement="°C"
        />
        <NumberField
          id="temperature_coefficient"
          label="Temperature Coefficient"
          value={values.temperature_coefficient}
          onChange={handleChange}
          error={
            touched.temperature_coefficient &&
            Boolean(errors.temperature_coefficient)
          }
          helperText={
            touched.temperature_coefficient && errors.temperature_coefficient
          }
          placeholder="0.8"
          unitOfMeasurement="%/°C"
          isFloat
        />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Submit
        </Button>
      </form>
    </Container>
  );
}
