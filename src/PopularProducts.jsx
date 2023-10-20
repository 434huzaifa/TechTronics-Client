import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";

const PopularProducts = () => {
    const [products, setProducts] = useState()
    const [isExist, setIsExist] = useState(false)
    useEffect(() => {
        axios.get('https://b8a10-brandshop-server-side-434huzaifa.vercel.app/popular')
            .then(res => {
                if (res.data.length > 0) {
                    setIsExist(true)
                    setProducts(res.data)
                }
            })
            .catch(error => console.log(error))
        // fetch(`https://b8a10-brandshop-server-side-434huzaifa.vercel.app/popular`).then(res => {
        //     return res?.json()
        // }).then(data => {
        //     if (data.length > 0) {
        //         setIsExist(true)
        //         setProducts(data)
        //     }
        // }).catch(error => console.log(error))
    }, [])
    return (
        <>
            {
                isExist &&
                <div className="mt-4">
                    <p className="text-center text-3xl font-extrabold mb-2">Popular Item</p>
                    <div className="md:grid sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">

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