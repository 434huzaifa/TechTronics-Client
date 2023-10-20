import { Card } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
const BrandCard = ({ name, logo, id }) => {
    const navigate = useNavigate()
    return (
        <Card onClick={() => { navigate(`/company/${id}`) }} renderImage={() => <div className='flex justify-center lg:h-full'><img src={logo} className=' w-1/4 lg:w-28 object-contain' /></div>} className='p-1 m-1 w-full lg:w-60'>
            <h5 className="text-2xl font-bold tracking-tight lg:w-full h-full text-gray-900 dark:text-white flex  ">
                <div className='self-end  text-center w-full'>
                    {name}
                </div>
            </h5>

        </Card>
    );
};

export default BrandCard;