import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";

import { auth, provider } from "./firebase";

import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [loginError, setLoginError] = useState(null);
  const [userData, setUserData] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    signInWithEmailAndPassword(auth, email, pw)
      .then((userCredential) => {
        console.log("signed in as: ", userCredential);
        setUserData(userCredential);
      })
      .catch((error) => {
        console.log("an error occurred: ", error);
        setLoginError(error);
      });
  };

  return (
    <div style={{ width: "20rem" }}>
      {userData === null ? (
        <>
          <h1>firebase auth</h1>
          <br />
          <form onSubmit={onSubmit}>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <br />
            <label htmlFor="pw">Password</label>
            <input
              type="password"
              value={pw}
              onChange={(event) => setPw(event.target.value)}
            />
            <br />
            {loginError && <p>Error logging in</p>}
            <button type="submit">Login</button>
          </form>
        </>
      ) : (
        <p>logged in</p>
      )}
      <hr />
      <button
        onClick={() => {
          console.log("google signin");
          signInWithPopup(auth, provider)
            .then((result) => {
              console.log("logged in: ", result);
              setUserData(result);
            })
            .catch((error) => {
              console.log(error);
              setLoginError(error);
            });
        }}
      >
        Login with Google
      </button>
      <br />
      <hr />
      <button
        onClick={() => {
          console.log("log out");
          setUserData(null);
          setLoginError(null);
          setEmail("");
          setPw("");
          auth.signOut();
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default App;
