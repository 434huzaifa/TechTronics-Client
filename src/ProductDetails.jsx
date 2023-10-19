import { useLoaderData } from "react-router-dom";
import { Button, Rating, Badge } from 'flowbite-react';
import { BsCurrencyDollar } from "react-icons/bs";
const ProductDetails = () => {
    const product = useLoaderData()
    console.log(product)
    let arr = new Array(Number(product.rating)).fill("")
    return (
        <div className="flex flex-col gap-3 justify-center items-center ">
            <div className="w-3/5">
                <img src={product.image} alt="" />
            </div>
            <div className="flex flex-col gap-2 w-3/5 p-3">
                <div>
                    <Badge className="justify-center p-2 w-min font-bold" color="success">
                        {product.type.toUpperCase()}
                    </Badge>
                </div>
                <div className="flex gap-2">
                <p className="text-3xl font-extrabold">{product.name}</p>
                <p className="bg-red-600 rounded-lg text-white p-1 w-min"> <span className="text-xl font-bold flex justify-center items-center "> <BsCurrencyDollar></BsCurrencyDollar> {product.price}</span> </p>
                </div>
                <p className="text-lg font-semibold">{product.description}</p>
                <Rating>
                    {
                        arr.map((x, index) => {
                            return <Rating.Star key={index} />
                        })
                    }

                </Rating>
                


                <Button color="light">
                    Add To Cart
                </Button>
            </div>
        </div>

    );
};

export default ProductDetails;