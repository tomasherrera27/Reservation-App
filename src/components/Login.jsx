import React , {useState} from 'react'
import {Form,Button,Stack,Container} from 'react-bootstrap';
import "./Login.css";

import firebaseApp from '../firebase';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithRedirect,GoogleAuthProvider} from "firebase/auth";
const auth = getAuth(firebaseApp);
const google = new GoogleAuthProvider();

function Login() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
    async function submitHandler(e){
      e.preventDefault();
      const email = e.target.formBasicEmail.value;
      const password = e.target.formBasicPassword.value;
      console.log(email, password);
      if(isLoggedIn){
        const user = await createUserWithEmailAndPassword(auth,email,password);
        console.log(user);
      }else{
        signInWithEmailAndPassword(auth,email,password);
      }

    }



  return (
    <div className="container">
    <Stack gap={3}>
      <h1 align="center">{isLoggedIn ? "Registrate" : "Iniciar Sesion"}</h1>
      <Form onSubmit={submitHandler}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit" className="buttonLogIn">
    {isLoggedIn? "Registrate" : "Inicia sesion"}
  </Button>
    </Form>
    <Button variant="primary" type="submit" onClick={()=>signInWithRedirect(auth,google)} >
    Acceder con google
    </Button>
    <a variant="primary" type="submit" align="center" onClick={()=> setIsLoggedIn(!isLoggedIn)}>
    {isLoggedIn? "¿Ya tienes cuenta?, inicia sesion": "REGISTRATE"}
    </a>
    </Stack>
    </div>
  )
}

export default Login