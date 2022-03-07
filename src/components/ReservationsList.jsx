import React from 'react'
import {Row,Button,Col,Stack} from 'react-bootstrap';

import firebaseApp from '../firebase';
import {getFirestore,updateDoc,doc} from "firebase/firestore";
const firestore = getFirestore(firebaseApp);

const ReservationsList = ({reservations,email,setReservations}) => {
    async function deleteReservation(idDeleted){
        const newArray = reservations.filter(
            (reserve)=> reserve.number !== idDeleted
            );
        
        const docuRef = doc(firestore, `usuarios/${email}`);
        updateDoc(docuRef, {reservations: [...newArray]})
        setReservations(newArray)
    
    }
        return (
    <div className="reservations">
        <Stack>
        {reservations.map((reservation)=>{
            return(
                <>
                <Row className="mb-5">
                    <Col>Nombre: {reservation.firstName}</Col>
                    <Col> Numero de Sala: {reservation.number}</Col>
                    <Col> Fecha de Reserva: {reservation.date}</Col>
                    <Col>Horario Reservado: {reservation.hour}</Col>
                    <Col><Button variant="danger" onClick={()=>(deleteReservation(reservation.number))}>Eliminar Reserva</Button></Col>
                </Row>
                <hr/>
                </>
            )
        })}
        </Stack>
    </div>
  );
};

export default ReservationsList