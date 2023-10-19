import { Card } from 'flowbite-react';
const BrandCard = ({ name, logo }) => {
    return (
        <Card renderImage={() => <div className='flex justify-center h-full'><img src={logo} className='w-28 object-contain'/></div>} className='p-1 m-1 w-60'>

            <h5 className="text-2xl font-bold tracking-tight w-full h-full text-gray-900 dark:text-white flex  ">
                <div className='self-end  text-center w-full'>
                    {name}

                </div>
            </h5>

        </Card>
    );
};

export default BrandCard;