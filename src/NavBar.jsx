// import { NavLink } from "react-router-dom";
import { Dropdown, Navbar, Avatar, Badge } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
import './App.css'
import { useContext } from 'react';
import { myContext } from './App';
import { AiOutlineShoppingCart } from "react-icons/ai";
const NavBar = () => {
    const { user, LogOut, cartCount } = useContext(myContext)
    return (
        <Navbar fluid rounded className='mb-4 lg:mb-24'>
            <Navbar.Brand to="/">
                <img src="/laptop.png" className="mr-3 h-6 sm:h-9" alt="Techtronics" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Techtronics</span>
            </Navbar.Brand>
            <div className='md:hidden block'>{
                user ? <NavLink to="/cart">
                    <Badge color="warning" className='absolute'>
                        <AiOutlineShoppingCart className='text-xl'></AiOutlineShoppingCart>
                    </Badge>
                    <p className='relative bottom-2 left-8 bg-green-400 rounded-full px-1'>{cartCount}</p>
                </NavLink> : ""
            }</div>
            {
                user && <div className="flex gap-1 md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar alt="User settings" img={user.photoURL} rounded />
                        }

                    >
                        <Dropdown.Header>
                            <span className="block text-sm">{user.displayName}</span>
                            <span className="block truncate text-sm font-medium">{user.email}</span>
                        </Dropdown.Header>
                        <Dropdown.Item onClick={LogOut}>Sign out</Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
            }

            <Navbar.Collapse>
                <NavLink to="/">Home</NavLink>

                {
                    user ?
                        <>

                            <NavLink to="/addproduct">Add Product</NavLink>
                            <NavLink className="hidden md:block" to="/cart">
                                <Badge color="warning" className='absolute'>
                                    <AiOutlineShoppingCart className='text-xl'></AiOutlineShoppingCart>
                                </Badge>
                                <p className='relative bottom-2 left-8 bg-green-400 rounded-full px-1'>{cartCount}</p>
                            </NavLink>
                        </>
                        : <>
                            <NavLink to="/login">Login</NavLink>

                            <NavLink to="/register">Register</NavLink></>
                }

            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;