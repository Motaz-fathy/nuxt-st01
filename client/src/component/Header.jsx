import React from 'react'
import {
    Container,
    Grid,
  Button
  } from "@mui/material";
  import "./header.css"
export const Header = () => {
  return (
    <div className='header'>
    <Container maxWidth={'xl'}>
     <Grid container>
     <Grid md={5} xs={0}></Grid>
        <Grid md={5} xs={0}></Grid>
        <Grid md={2} xs={12}>
            <div className='navinfo'>
                <img src='#'  />
                <h3>username</h3>
                <Button size="small">
                logout
              </Button>
            </div>
        </Grid>
     </Grid>
    </Container>
    </div>
  )
}
