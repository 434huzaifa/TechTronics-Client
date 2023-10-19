import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Product from "./Product";

const Brand = () => {
    const allProduct=useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-4 gap-2">
            {
                 allProduct.map((x,index)=>{
                    return (
                        <Product key={index} id={x._id} image={x.image} name={x.name} price={x.price} rating={x.rating} type={x.type} details={true}></Product>
                    )
                })
            }
            </div>
        </div>
    );
};

export default Brand;