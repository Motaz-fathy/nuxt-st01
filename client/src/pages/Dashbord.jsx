import React from "react";
import { Button, Container, Grid, TextField } from "@mui/material";
import "./dashbord.css";
import { Link } from "react-router-dom";
export const Dashbord = () => {
  return (
    <div>
      <Container maxWidth="md">
        <Grid md={2} xs={12} className="spacing" />
        <Grid md={8} xs={12}>
          <div className="box">

           

            <div className="item" >
             <div className="data">
             <span>id</span>
             <Link to={'/user/:id'}>username</Link>
             </div>
             <div className="empty"></div>
              <div className="action">
              <Button variant="contained" color="success">
                Edit
              </Button>
              <Button variant="contained" color="error">
                Delete
              </Button>
              </div>
            </div>
          </div>
        </Grid>
        <Grid md={2} xs={12} />
      </Container>
    </div>
  );
};
