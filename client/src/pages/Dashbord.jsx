import React, { useEffect } from "react";
import { Container, Grid} from "@mui/material";
import {useDispatch , useSelector} from 'react-redux'
import "./dashbord.css";
import {Header} from '../component/Header'
import { Link } from "react-router-dom";
import {GetUsers} from '../redux/Actions/UserAction'
export const Dashbord = () => {
  const dispatch = useDispatch()
  const {users} = useSelector(state => state.GetUserReducer)
  useEffect( () => {
    dispatch(GetUsers())
  } , [dispatch])
  return (
    <div>
      <Header />
      <Container maxWidth="md">
        <Grid md={2} xs={12} className="spacing" />
        <Grid md={8} xs={12}>
          <div className="box">
          {
            users?.map( user => 
              
              <div className="item" key={user.id}>
              <div className="data">
              <span>{user.id}</span>
              <Link to={`/${user.id}`}>{user.name}</Link>
              </div>
              <div className="empty"></div>
               <div className="action">
                 <img src={`${user.avatar}`} alt="img"/>
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
