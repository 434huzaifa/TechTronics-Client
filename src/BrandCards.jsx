import axios from "axios";
import { useEffect, useState } from "react";
import BrandCard from "./BrandCard";

const BrandCards = () => {
    const [brands, setBrands] = useState([])
    useEffect(() => {
        axios.get("https://b8a10-brandshop-server-side-434huzaifa.vercel.app/brands")
        .then(res=>setBrands(res.data))
        .catch(err=>console.log(err))
        // fetch(`https://b8a10-brandshop-server-side-434huzaifa.vercel.app/brands`).then(res => {
        //     return res?.json()
        // }).then(data => {
        //     console.log(data)
        //     setBrands(data)
        // }).catch(error => console.log(error))
    }, [])

    return (
        <div className="mt-4">
            {
                brands.length>0?<>
                 <p className="text-center text-3xl font-extrabold mb-2">Brands</p>
                <div className="lg:flex lg:justify-center grid md:grid-cols-3 sm:grid-cols-2 gap-2">
                    {
                        brands.map((x, index) => {
                            return (
                                <BrandCard key={index} logo={x.logo} name={x.name} id={x._id}></BrandCard>
                            )
                        })
                    }
                </div></>:""
            }
            
        </div>
    );
};

export default BrandCards;