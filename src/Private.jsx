import { useContext } from 'react';
import { myContext } from './App';
import { Link } from 'react-router-dom';
import { Kbd } from 'flowbite-react';
const Private = ({ children }) => {
    const { user } = useContext(myContext)
    if (user) {
        return children ;
    }
    return(

        <p className='text-center text-lg mt-4 font-semibold'> If you have a account please, <Link to="/login"><Kbd className='underline text-blue-500'>Login</Kbd></Link></p>
    );
};

export default Private;