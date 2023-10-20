import { useLoaderData, useNavigate } from "react-router-dom";
import { Button, Rating, Badge } from 'flowbite-react';
import { BsCurrencyDollar } from "react-icons/bs";
import {HiShoppingCart } from 'react-icons/hi';
import { useContext } from "react";
import { myContext } from "./App";
// import axios from "axios";
import Swal from "sweetalert2";
import { local } from "./varcel";
const ProductDetails = () => {
    const {user,cartCountUp}=useContext(myContext)
    const navigate=useNavigate()
    const product = useLoaderData()
    let arr
    if (product.rating != undefined) {
        arr = new Array(Number(product.rating)).fill("")
    } else {
        arr = new Array(0).fill("")
    }
    function AddToCart(id) {
        // axios.post("http://192.168.0.115:5000/cart",{productId:id,email:user.email}).then(res=>{
        //     if (res.data.insertedId != null) {
        //         cartCountUp();
        //         Swal.fire({ icon: 'success', title: "Product Successfully Added to Cart" }).then( ()=>{
        //             navigate('/')
        //         }

        //         )
        //     }
        // })

        fetch(`${local}/cart`,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({productId:id,email:user.email}),
        }).then(res=>res.json()).then(data=>{
            if (data.insertedId != null) {
                cartCountUp();
                Swal.fire({ icon: 'success', title: "Product Successfully Added to Cart" }).then( ()=>{
                    navigate('/')
                }

                )
            }
        }).catch(error=>console.log(error))
    }
    return (
        <div className="flex flex-col gap-3 justify-center items-center ">
            <div className="lg:w-3/5">
                <img src={product.image} alt="" />
            </div>
            <div className="flex flex-col gap-2 lg:w-3/5 p-3">
                <div>
                    <Badge className="justify-center p-2 w-min font-bold" color="success">
                        {product.type.toUpperCase()}
                    </Badge>
                </div>
                <p className="text-2xl font-bold">{product.name}</p>
                <Rating>
                    {
                        arr.map((x, index) => {
                            return <Rating.Star key={index} />
                        })
                    }

                </Rating>
                <p className="bg-red-600 rounded-lg text-white p-1 w-min"> <span className="text-xl font-bold flex justify-center items-center "> <BsCurrencyDollar></BsCurrencyDollar> {product.price}</span> </p>

                <p className=" font-semibold">{product.description}</p>
                <Button gradientDuoTone="purpleToPink" onClick={()=>{AddToCart(product._id)}}>
                    <HiShoppingCart className="mr-2 h-5 w-5" />
                    <p>
                        Buy now
                    </p>
                </Button>
            </div>
        </div>

    );
};

export default ProductDetails;