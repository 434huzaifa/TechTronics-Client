import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Footer2 from './Footer2'

function App() {

  return (
    <div className='px-24'>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer2></Footer2>
    </div>
  )
}

export default App
