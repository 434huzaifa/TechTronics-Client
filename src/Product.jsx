import { Card, Rating, Badge } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';
const Product = ({ price, image, id, name, rating, type, details }) => {
    const navigate = useNavigate()
    let arr
    if (rating != undefined) {
        arr = new Array(Number(rating)).fill("")
    } else {
        arr = new Array(0).fill("")
    }
    return (
        <div>
            <Card onClick={() => { navigate(`/productdetails/${id}`) }} renderImage={() => <div className='flex justify-center h-full' ><img src={image} className='object-contain h-auto lg:h-44' /></div>}
                imgAlt={name}
                id={id} className='p-1 h-full'>

                <h5 className=" lg:text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    <p>
                        {name}
                    </p>
                </h5>

                <div className="lg:mb-5 lg:mt-2.5 flex flex-col gap-1 lg:flex-row items-center">
                    <Rating >
                        {
                            arr.map((x, index) => {
                                return <Rating.Star key={index} />
                            })
                        }

                    </Rating>
                    <span className="lg:ml-3 lg:mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                        {type}
                    </span>
                </div>
                <div className="flex lg:flex-row flex-col items-center justify-center lg:justify-between" >
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                        ${price}
                    </span>

                    {
                        details ? <div className='flex gap-1'> <Link className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800" to={`/product/${id}`}>
                            <p>Details</p>
                        </Link>

                            <Link className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800" to={`/productdetails/${id}`}>
                                <p>
                                    Update
                                </p>

                            </Link></div> : ""
                    }

                </div>
                {
                    details ? <Badge className='text-lg justify-center' color="purple" >
                        {details}
                    </Badge> : ""
                }

            </Card>
        </div>
    );
};

export default Product;