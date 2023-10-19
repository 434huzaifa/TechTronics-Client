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
        <div className="flex">
            {
                brands.map((x,index)=>{
                    return(
                        <BrandCard key={index} logo={x.logo} name={x.name}></BrandCard>
                    )
                })
            }
        </div>
    );
};

export default BrandCards;