import React, {useState, useEffect} from 'react';
import Main from './components/Main';
import Login from './components/Login';
import firebaseApp from './firebase';
import {getAuth, onAuthStateChanged} from "firebase/auth";
import Header from './components/Header';


const auth = getAuth(firebaseApp);

function App() {
  const [user, setUser] = useState(null);
  
  onAuthStateChanged(auth,(userFirebase) => {
    if(userFirebase){
        //is logged in
        setUser(userFirebase);
    }else{
        //is not logged in
        setUser(null);
    }
  });

  return (
    <div className="app">
    <Header/>
    {user ? <Main email={user.email}/> : <Login/>}
    </div>
  

  );
}

export default App;
