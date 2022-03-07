import React, {useEffect, useState} from 'react';
import {Container,Button,Stack} from 'react-bootstrap';
import {getFirestore,doc,getDoc,setDoc} from "firebase/firestore";
import AddReservation from './AddReservation';
import ReservationsList from './ReservationsList'
import firebaseApp from '../firebase'


const firestore = getFirestore(firebaseApp)


function Main({email}) {
  const [reservations, setReservations] = useState(null);

  const fakeData = [
    
  ]
  async function searchAndCreate(id){
    const docuRef = doc(firestore, `usuarios/${id}`);
    const search = await getDoc(docuRef);
      if(search.exists()){
          const info = search.data();
          return info.reservations;
      }else{
          await setDoc(docuRef,{reservations:[...fakeData]});
          const search = await getDoc(docuRef);
          const info = search.data();
          return info.reservations;
      }
  }
    useEffect(()=>{ 
      async function fetchReservations(){
        const reservationsFetch = await searchAndCreate(email);
        setReservations(reservationsFetch)
      }  
      fetchReservations();
    }, [])

  console.log(email)
  return (
    <Container align="center">
    <Stack>
    <h2>Salas Reservadas</h2>
    <hr/>
    <AddReservation
      reservations={reservations} 
      setReservations={setReservations} 
      email={email}
    />
    { reservations? <ReservationsList 
    reservations={reservations} 
    setReservations={setReservations} 
    email={email}/>: null}
    </Stack>
    </Container>
  )
}

export default Main;