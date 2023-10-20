import axios from "axios";
import { useEffect, useState } from "react";
import BrandCard from "./BrandCard";

const BrandCards = () => {
    const [brands, setBrands] = useState([])
    useEffect(() => {
        axios.get("http://192.168.0.115:5000/brands")
        .then(res=>setBrands(res.data))
        .catch(err=>console.log(err))
    }, [])

    return (
        <div className="mt-4">
            <p className="text-center text-3xl font-extrabold mb-2">Brands</p>
        <div className="lg:flex lg:justify-center md:grid sm:grid md:grid-cols-3 sm:grid-cols-2 gap-2">
            {
                brands.map((x,index)=>{
                    return(
                        <BrandCard key={index} logo={x.logo} name={x.name} id={x._id}></BrandCard>
                    )
                })
            }
        </div>
        </div>
    );
};

export default BrandCards;