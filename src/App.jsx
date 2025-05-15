import { useState } from "react";
import { auth } from "./firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";


function App() {

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  


  const addUser = async () => {

    const userData = await createUserWithEmailAndPassword(auth, userEmail, userPassword);
    console.log(userData);

  }
 

  return (
    <>

      <div className="container mt-5 p-5 border rounded">
        <h1 className="text-center text-info">Welcome to Meerkat App</h1>

        <div className="text-center mt-5">

          <h2>Sign Up</h2>

          <form>

            <label htmlFor="email">Email</label> <br />
            <input 
            id="email"
            type="email"  
            onChange={(event) => {
              setUserEmail(event.target.value);
            }}/> <br /> <br />

            <label htmlFor="password">Password</label> <br />
            
            <input 
            id="password"
            type="password"  
            onChange={(event) => {
              setUserPassword(event.target.value);
            }}/>  <br /> <br />
            
            <button type="button" className="btn btn-primary btn-lg" onClick={addUser}>Sign Up</button>

            <p>{userEmail}</p>
            <p>{userPassword}</p>

          </form>

        </div>

      </div>

    </>
  )
}

export default App
