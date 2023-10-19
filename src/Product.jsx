import { Card, Rating, Badge } from 'flowbite-react';
import { Link } from 'react-router-dom';
const Product = ({ price, image, id, name, rating, type, details }) => {
    let arr = new Array(Number(rating)).fill("")
    return (
        <div>
            <Card renderImage={() => <div className='flex justify-center h-full'><img src={image} className='h-44' /></div>}
                imgAlt={name}
                id={id} className='p-1 h-full'>

                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    <p>
                        {name}
                    </p>
                </h5>

                <div className="mb-5 mt-2.5 flex items-center">
                    <Rating>
                        {
                            arr.map((x, index) => {
                                return <Rating.Star key={index} />
                            })
                        }

                    </Rating>
                    <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                        {type}
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                        ${price}
                    </span>

                    {
                        details ? <div className='flex gap-1'> <Link className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800" to={`/productdetails/${id}`}>
                            <p>Details</p>
                        </Link>

                            <Link className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800" to={`/product/${id}`}>
                                <p>
                                    Update
                                </p>

                            </Link></div> :
                            <Link
                                className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                                to="#">
                                <p>
                                    Add to cart
                                </p>

                            </Link>
                    }

                </div>
                <Badge className='text-lg justify-center' color="purple">
                    {details}
                </Badge>
            </Card>
        </div>
    );
};

export default Product;