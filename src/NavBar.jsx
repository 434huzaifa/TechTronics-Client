// import { NavLink } from "react-router-dom";
import { Dropdown, Navbar,Avatar } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
    return (
        <Navbar fluid rounded className='mb-24'>
            <Navbar.Brand to="/">
                <img src="/laptop.png" className="mr-3 h-6 sm:h-9" alt="Techtronics" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Techtronics</span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                    }
                >
                    <Dropdown.Header>
                        <span className="block text-sm">Bonnie Green</span>
                        <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                    </Dropdown.Header>
                    <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <NavLink to="/">Home</NavLink>
                <NavLink to="#">About</NavLink>
                <NavLink to="#">Services</NavLink>
                <NavLink to="#">Pricing</NavLink>
                <NavLink to="#">Contact</NavLink>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;