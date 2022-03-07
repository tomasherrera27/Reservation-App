import React from 'react'
import "./AddReservation.css";
import {Container,Form,Button} from 'react-bootstrap'
import firebaseApp from '../firebase';
import {getFirestore,updateDoc,doc} from "firebase/firestore";
import Swal from 'sweetalert2';

const firestore = getFirestore(firebaseApp);


const AddReservation= ({email,setReservations,reservations})=> {
    async function addReserve(e){
        e.preventDefault();
        const firstName = e.target.nombre.value;
        const number = e.target.numero.value;
        const date = e.target.fecha.value;
        const hour = e.target.hora.value;
        console.log(firstName + ' ' + number + ' ' + date + hour + ' ')
        if(firstName == "" || number == ""  || date == "" || hour == ""|| date == ""){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se puede crear una reserva sin datos',
                footer: '<a href="">Why do I have this issue?</a>'
              })
        }else{
            const newArray = [ 
                ...reservations, 
                {  firstName: firstName, 
                    number: number, 
                    date: date,
                    hour: hour,
                },
            ];
                const docuRef = doc(firestore, `usuarios/${email}` );
                updateDoc(docuRef, {reservations: [...newArray]});
                setReservations(newArray);
                e.target.nombre.value="";
                e.target.fecha.value="";
                e.target.hora.value="";
                Swal.fire(
                    'Good job!',
                    'Reserva Creada',
                    'success'
                  )
            }
        }
        



  return (
   <Container className="m-5">
       <Form onSubmit={addReserve} className="mb-5">
       <Form.Group className="mb-3"d="exampleForm.ControlInput1">
        <Form.Label align="left">Reservar Nueva Sala</Form.Label>
        <Form.Control type="text" placeholder="Nombre" id="nombre" />
  </Form.Group>
       <Form.Select aria-label="Default select example" id="numero">
        <option>Seleccione el numero de sala que desea reservar</option>
        <option value="1">Sala 1</option>
        <option value="2">Sala 2</option>
        <option value="3">Sala 3</option>
        </Form.Select>
        <Form.Group>
        <input type="date" placeholder="seleccione la fecha" id="fecha"></input>
        <input type="time" id="hora"></input>
        </Form.Group>
        <Button type="submit" className="mt-5">Reservar Sala</Button>
       </Form>
   </Container>
  )
}

export default AddReservation