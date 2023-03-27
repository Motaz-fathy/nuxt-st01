import React from "react";
import "./login.css";
import {
  Button,
  Container,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from "@mui/material";
export const Login = () => {
  const [name, setName] = React.useState("");

  const handleChange = event => {
    setName(event.target.value);
  };
  return (
    <div>
      <Container maxWidth="md">
        <Grid md={4} xs={12} className="spacing" />
        <Grid md={4} xs={12}>
          <div className="box">
            <form>
              <InputLabel id="demo-simple-select-label">name</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={name}
                label="Name"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
              />
              <Button variant="contained" size="large">
                login
              </Button>
            </form>
          </div>
        </Grid>
        <Grid md={4} xs={12} />
      </Container>
    </div>
  );
};
