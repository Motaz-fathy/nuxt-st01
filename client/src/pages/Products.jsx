import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { Button, Container, Grid, TextField } from "@mui/material";
import "./dashbord.css";
import { Link } from "react-router-dom";
import {AddNewTodo, DeleteTodo, GetTodos} from '../redux/Actions/TodosAction'
export const Products = () => {
   const todo = useSelector(state => state.TodoReducer)
   const [newToDo , setNewtodo] = useState("")
   const [updatenewToDo , setUpdatenewtodo] = useState("")
   const dispatch = useDispatch()

    const HandleDeleteTodo = id => { 
          dispatch(DeleteTodo(id))
          dispatch(GetTodos())
    }
    const HandleAddtodo = (e) => {
        e.preventDefault()
        dispatch(AddNewTodo(newToDo))

    }
    const HandleUpdate = (id , updatenewToDo) => {

    }
    useEffect(() => {
        dispatch(GetTodos())
    } , [dispatch])


  return (
    <div>
      <Container maxWidth="md">
        <Grid md={2} xs={12} className="spacing" />
        <Grid md={8} xs={12}>
          <div className="box">

            <form method="POST" >
              <div className="formcontent">
                <TextField id="outlined" label="new todo" onChange={(e) => setNewtodo(e.target.value)}/>
                <Button variant="contained" size="large"
                onClick={HandleAddtodo}
                >
                  Add
                </Button>
              </div>
            </form>

            {
            todo?.map( todo =>
                <div className="item" key={todo.id}>
                <div className="data">
                <span>{todo.id}</span>
                <Link to={'/todos/:id'}>{todo.task}</Link>
                </div>
                <div className="empty"></div>
                 <div className="action">
                 <Button variant="contained" color="success"
                 onClick={ () =>HandleUpdate(todo.id) }
                 >
                   Edit
                 </Button>
                 <Button variant="contained" color="error" onClick={ () =>HandleDeleteTodo(todo.id) }>
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
