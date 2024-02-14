import "./Contact.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    pass: "",
    conf: "",
  });
  console.log(formData);
  const [formDataError, setFormDataError] = useState({
    nameError: "",
    genderError: "",
    emailError: "",
    passError: "",
    confError: "",
  });

  function onSubmit(e) {
    e.preventDefault();
    setFormDataError({
      nameError: !formData.name ? "!please enter your name!" : "",
      genderError: !formData.gender ? "Please select a gender" : "",
      emailError: !formData.email ? "!please enter your email!" : "",
      passError: !formData.pass ? "!please enter password!" : "",
      confError: !formData.conf ? "!please re-enter your password!" : "",
    });

    if (formData.pass !== formData.conf && formData.conf !== "") {
      setFormDataError((prevState) => ({
        ...prevState,
        confError: "!passwords do not match!",
      }));
    }
  }

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="background">
        <h1 className="heading"> Fill this form</h1>
        <div className="footer">
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
            value={formData.name}
          />
          <span className="mistake">{formDataError.nameError}</span>

          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
            value={formData.email}
          />
          <span className="mistake">{formDataError.emailError}</span>

          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Gender
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={(e) => {
                setFormData({ ...formData, gender: e.target.value });
              }}
              value={formData.gender}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
            <span className="mistake">{formDataError.genderError}</span>
          </FormControl>

          <FormControl>
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              onChange={(e) => {
                setFormData({ ...formData, pass: e.target.value });
              }}
            />
            <span className="mistake">{formDataError.passError}</span>

            <TextField
              id="standard-password-input"
              label="ConfirmPassword"
              type="password"
              autoComplete="current-password"
              variant="standard"
              onChange={(e) => {
                setFormData({ ...formData, conf: e.target.value });
              }}
            />
            <span className="mistake">{formDataError.confError}</span>
          </FormControl>

          <Stack spacing={100} direction="row">
            <Button variant="contained" onClick={(e) => onSubmit(e)}>
              submit
            </Button>
          </Stack>
        </div>
      </div>
    </Box>
  );
}
export default Form;
