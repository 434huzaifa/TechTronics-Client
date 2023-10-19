import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
    const [allProducts,setAllProducts]=useState([])
    useEffect(()=>{
        axios.get("http://192.168.0.115:5000/products")
        .then(res=>{
            setAllProducts(res.data)
        })
        .catch(error=>console.log(error))
    },[])
    return (
        <div className="grid grid-cols-4 gap-4 mt-5">
            {
                allProducts.map((x,index)=>{
                    return (
                        <Product key={index} id={x._id} image={x.image} name={x.name} price={x.price} rating={x.rating} type={x.type} details={false}></Product>
                    )
                })
            }
            
        </div>
    );
};

export default Products;