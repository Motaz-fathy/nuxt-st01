import React from 'react'
import {
    Container,
    Grid,
  Button
  } from "@mui/material";
  import "./header.css"
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
export const Header = () => {
  const nav = useNavigate()
  const handelLogOut = () => {
    window.localStorage.removeItem('SafeUser');
    nav('/')
  }
  const User = JSON.parse(window.localStorage.getItem('SafeUser'));
  return (
    <div className='header'>
    <Container maxWidth={'xl'}>
     <Grid container>
     <Grid md={5} xs={0}></Grid>
        <Grid md={3} xs={0}></Grid>
        <Grid md={4} xs={12}>
            <div className='navinfo'>
           
               
                 <div className='on'>
                   <img src={User ? `${User.avatar}` : "#"}  />
                  <h3>{User ? User.name : <Link to="/"> Login </Link>}</h3>
                  <Button size="small"
                  onClick={handelLogOut}
                  >
                  logout
                  </Button>
                 </div>
               
            </div>
        </Grid>
     </Grid>
    </Container>
    </div>
  )
}
