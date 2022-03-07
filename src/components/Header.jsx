import React from 'react'
import "./Header.css";
import firebaseApp from '../firebase';
import { Button } from 'react-bootstrap';
import {getAuth, signOut} from 'firebase/auth';


function Header(){
    const auth =  getAuth(firebaseApp);
  return (
    <div className="header">
    <h1 className="header-h1">Reserva Salas</h1>
    <Button onClick={()=>signOut(auth)}>Cerrar Sesion</Button>
    </div>
  )
}

export default Header