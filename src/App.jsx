import { Outlet, useNavigate } from 'react-router-dom'
import NavBar from './NavBar'
import Footer2 from './Footer2'
import { getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from './firebase.init.js';
import { createContext, useEffect, useState } from 'react';

const auth = getAuth(app);
export const myContext = createContext(null)
const provider = new GoogleAuthProvider();
function App() {
  const [user, setUser] = useState([]);
  // const[spinner,setSpinner]=useState(true);
  const navigate = useNavigate()

  function signUpUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  function SignIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }
  function LogOut() {
    navigate('/login')
    return signOut(auth)
  }
  function googlemama() {
    return signInWithPopup(auth, provider)
  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      console.log('observing current state', currentUser)
    });
    return () => {
      unSubscribe();
    }
  }, [])
  const context = {
    user,
    signUpUser,
    SignIn,
    LogOut,
    googlemama
  }
  return (
    <div className='px-24'>
      <myContext.Provider value={context}>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer2></Footer2>
      </myContext.Provider>
    </div>
  )
}

export default App
