import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";

const PopularProducts = () => {
    const [products, setProducts] = useState()
    const [isExist, setIsExist] = useState(false)
    useEffect(() => {
        axios.get('http://192.168.0.115:5000/popular')
            .then(res => {
                if (res.data.length > 0) {
                    setIsExist(true)
                    setProducts(res.data)
                }
            })
            .catch(error => console.log(error))
    }, [])
    return (
        <>
            {
                isExist &&
                <div className="mt-4">
                    <p className="text-center text-3xl font-extrabold mb-2">Popular Item</p>
                    <div className="md:grid sm:grid grid-cols-2 lg:grid-cols-4 gap-4 ">

                        {
                            products?.map((x, index) => {
                                return (
                                    <Product key={index} id={x._id} image={x.image} name={x.name} price={x.price} rating={x.rating} type={x.type} details={false}></Product>
                                )
                            })
                        }
                    </div>
                </div>

            }

        </>
    );
};

export default PopularProducts;