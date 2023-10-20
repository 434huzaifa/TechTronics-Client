// import { NavLink } from "react-router-dom";
import { Dropdown, Navbar, Avatar, Badge } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
import './App.css'
import { useContext } from 'react';
import { myContext } from './App';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiMoon } from "react-icons/gi";
const NavBar = () => {
    const { user, LogOut, cartCount, setDark, dark } = useContext(myContext)
    function changeTheme() {
        let tml = document.getElementsByTagName("html")[0]
        if (tml.getAttribute("data-theme") == "light") {
            setDark(true)
            tml.setAttribute("data-theme", "dark")
        } else {
            setDark(false)
            tml.setAttribute("data-theme", "light")
        }
    }
    return (
        <Navbar fluid rounded className={`mb-4 ${dark && "bg-slate-900"}`} >

            <Navbar.Brand to="/">
                <img src="/laptop.png" className="mr-3 h-6 sm:h-9 " alt="Techtronics" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Techtronics</span>
            </Navbar.Brand>
            <div className='md:hidden block'>
                {
                    user ?
                        <div>
                            <NavLink to="/cart">
                                <Badge color="warning" className='absolute'>
                                    <AiOutlineShoppingCart className='text-xl'></AiOutlineShoppingCart>
                                </Badge>
                                <p className={`relative w-min bottom-2 left-8 bg-emerald-500  ${dark ? "text-white" : "text-gray-900"} rounded-full px-1`}>{cartCount}</p>
                            </NavLink>  </div> : ""
                }

            </div>
            <div onClick={changeTheme} className='text-xl md:hidden block'>
                <GiMoon className='mx-5'></GiMoon>
            </div>
            
                <div className="flex gap-1 md:order-2">
                    {
                        user &&
                        <Dropdown
                            arrowIcon={false}
                            inline
                            label={
                                <Avatar alt="User settings" img={user?.photoURL} rounded />
                            }

                        >
                            <Dropdown.Header>
                                <span className="block text-sm">{user?.displayName}</span>
                                <span className="block truncate text-sm font-medium">{user?.email}</span>
                            </Dropdown.Header>
                            <Dropdown.Item onClick={LogOut}>Sign out</Dropdown.Item>
                        </Dropdown>
                    }

                    <Navbar.Toggle />
                </div>

                <Navbar.Collapse >
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/addproduct">Add Product</NavLink>
                                <NavLink to="/login">Login</NavLink>
                    <div>
                    <NavLink className="hidden md:block " to="/cart">
                        <Badge color="white" className='absolute'>
                                        <AiOutlineShoppingCart className='text-xl'></AiOutlineShoppingCart>
                                    </Badge>
                                    <p className={`relative bottom-3 left-6 bg-emerald-500 ${dark ? "text-white" : "text-gray-900"} rounded-full px-1`}>{cartCount}</p>
                                </NavLink>
                    </div>


                    <div onClick={changeTheme} className='text-xl hidden md:block'>
                        <GiMoon className='mx-5'></GiMoon>
                    </div>

                </Navbar.Collapse>


        </Navbar>
    );
};

export default NavBar;