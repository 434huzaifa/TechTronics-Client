import { Outlet, useNavigate } from 'react-router-dom'
import NavBar from './NavBar'
import Footer2 from './Footer2'
import { getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from './firebase.init.js';
import { createContext, useEffect, useState } from 'react';
import axios from "axios";
const auth = getAuth(app);
export const myContext = createContext(null)
const provider = new GoogleAuthProvider();
function App() {
  const [user, setUser] = useState([]);
  const [cartCount, setCartCount] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : 0)
  function cartCountUp() {
    setCartCount(cartCount + 1);
    localStorage.setItem("cart", cartCount)
  }
  const navigate = useNavigate()

  function signUpUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  function SignIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }
  function LogOut() {
    localStorage.removeItem('cart')
    navigate('/login')
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
  function CartCount(number) {
    setCartCount(number)
    localStorage.setItem('cart', number)
  }
  useEffect(() => {
    if (user?.email != undefined && !localStorage.getItem('cart')) {
      axios.get(`https://b8a10-brandshop-server-side-434huzaifa.vercel.app/cartitem/${user.email}`).then(res => {
        if (res.data.itemNumber > 0) {
          CartCount(res.data.itemNumber);
        }
      }).catch(error => console.log(error))
    }

  }, [user])
  const context = {
    user,
    signUpUser,
    SignIn,
    LogOut,
    googlemama,
    cartCount,
    cartCountUp,
    CartCount
  }
  return (
    <div className='px-[5%] min-h-[100vh] flex flex-col'>
      <myContext.Provider value={context}>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer2></Footer2>
      </myContext.Provider>
    </div>
  )
}

export default App
