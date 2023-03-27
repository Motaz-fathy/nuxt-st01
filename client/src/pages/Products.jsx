import React, { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { Button, Container, Grid, TextField } from "@mui/material";
import "./dashbord.css";
import { Link } from "react-router-dom";
import {GetTodos} from '../redux/Actions/TodosAction'
export const Products = () => {
   const {user} = useSelector(state => state.GetTodos)
   console.log(user) 
   const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetTodos())
    } , [dispatch])
  return (
    <div>
      <Container maxWidth="md">
        <Grid md={2} xs={12} className="spacing" />
        <Grid md={8} xs={12}>
          <div className="box">

            <form>
              <div className="formcontent">
                <TextField id="outlined" label="new todo" />
                <Button variant="contained" size="large">
                  Add
                </Button>
              </div>
            </form>

           {
            user?.map( todo =>
                <div className="item" >
                <div className="data">
                <span>{todo.id}</span>
                <Link to={'/todos/:id'}>{todo.task}</Link>
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
        )

           }
     
          </div>
        </Grid>
        <Grid md={2} xs={12} />
      </Container>
    </div>
  );
};
