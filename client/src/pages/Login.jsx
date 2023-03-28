import React, { useEffect }  from "react";
import {useNavigate} from 'react-router-dom'
import {Header} from '../component/Header'
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
import {LoginAction} from '../redux/Actions/UserAction'
import {useDispatch, useSelector} from 'react-redux'
export const Login = () => {
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const LoginR = useSelector(state => state.LoginR)
  const {user} = LoginR
  const safeUser = user?.find( user => user.username === name && user.password === password)
  if(safeUser !== undefined ) {
    localStorage.setItem("SafeUser", JSON.stringify(safeUser));
  }
  const dispatch = useDispatch()
  const nav = useNavigate()
  const handleChangeName = event => {
    setName(event.target.value);
  };
  const handleChangePassword = event => {
    setPassword(event.target.value)
  }
  const submitHandler = event => {
    event.preventDefault()
    
    if(safeUser) {
      nav('/todos')
     }
     else {
      nav('/')
     }
  };

  useEffect(() => {
    dispatch(LoginAction());
  } , [dispatch])

  return (
    <div>
      <Container maxWidth="md">
        <Grid md={4} xs={12} className="spacing" />
        <Grid md={4} xs={12}>
          <div className="box">
            <form >
              <InputLabel id="demo-simple-select-label">name</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={name}
                label="Name"
                onChange={handleChangeName}
              >
                <MenuItem value={'zucker'}>zucker</MenuItem>
                <MenuItem value={'felon'}>felon</MenuItem>
                <MenuItem value={'robon'}>robon</MenuItem>
              </Select>
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                onChange={handleChangePassword}

              />
              <Button variant="contained" size="large"
              onClick={submitHandler}
              >
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
