import { Outlet, useNavigate } from 'react-router-dom'
import NavBar from './NavBar'
import Footer2 from './Footer2'
import { getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from './firebase.init.js';
import { createContext, useEffect, useState } from 'react';
import axios from "axios";
import Swal from 'sweetalert2';
const auth = getAuth(app);
export const myContext = createContext(null)
const provider = new GoogleAuthProvider();
function App() {
  const [user, setUser] = useState([]);
  const [cartCount,setCartCount]=useState(localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):0)
  // const[spinner,setSpinner]=useState(true);
  function cartCountUp() {
    setCartCount(cartCount+1);
    localStorage.setItem("cart",cartCount)
  }
  const navigate = useNavigate()

  function signUpUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  function SignIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }
  function LogOut() {
    navigate('/login')
    localStorage.removeItem('cart')
    return signOut(auth)
  }
  function googlemama() {
    return signInWithPopup(auth, provider)
  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    }
  }, [])
  useEffect(()=>{
    if (user?.email!=undefined) {
      axios.get(`http://192.168.0.115:5000/cart/${user.email}`).then(res=>{
      console.log(res.data)
      if (res.data.length>0) {
        setCartCount(res.data.length)
        localStorage.setItem('cart',res.data.length)
      }
    }).catch(error=>console.log(error))
    }  
    
  },[user])
  const context = {
    user,
    signUpUser,
    SignIn,
    LogOut,
    googlemama,
    cartCount,
    cartCountUp
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
