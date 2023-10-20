// import { NavLink } from "react-router-dom";
import { Dropdown,Navbar, Avatar } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
import './App.css'
import { useContext } from 'react';
import { myContext } from './App';
const NavBar = () => {
    const { user, LogOut } = useContext(myContext)
    return (
        <Navbar fluid rounded className='mb-24'>
            <Navbar.Brand to="/">
                <img src="/laptop.png" className="mr-3 h-6 sm:h-9" alt="Techtronics" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Techtronics</span>
            </Navbar.Brand>
            {
                user && <div className="flex md:order-2">
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
                <NavLink to="/login">Login</NavLink>
                
                <NavLink to="/register">Register</NavLink>
                {
                    user ? <NavLink to="/addproduct">Add Product</NavLink> : ""
                }
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;