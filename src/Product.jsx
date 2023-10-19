import { Card, Rating } from 'flowbite-react';
const Product = ({ price, image, id, name,rating,type }) => {
    let arr=new Array(Number(rating)).fill("")
    console.log(arr)
    return (
        <div>
            <Card
                imgAlt={name}
                imgSrc={image}
                id={id} >
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        <p>
                            {name}
                        </p>
                    </h5>
                </a>
                <div className="mb-5 mt-2.5 flex items-center">
                <Rating>
                            {
                                arr.map((x,index)=>{
                                    return <Rating.Star key={index} />
                                })
                            }
                            
                        </Rating>
                    <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                        {type}
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        ${price}
                    </span>
                    <a
                        className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                        href="#"
                    >
                        <p>
                            Add to cart
                        </p>
                    </a>
                </div>
            </Card>
        </div>
    );
};

export default Product;