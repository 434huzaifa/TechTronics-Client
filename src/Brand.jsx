import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Product from "./Product";
import { Badge } from 'flowbite-react';
const Brand = () => {
    const data = useLoaderData()
    const allProduct = data[0]
    const brand = data[1]
    return (
        <div>
            <Badge color="indigo" className="p-2 my-2 text-3xl justify-center">
               Welcome to {brand?.name}
            
      </Badge>
            <Banner></Banner>
            {
                allProduct.length != 0 ?
                    <div className="grid md:grid-cols-3 sm:grid-cols-1 lg:grid-cols-4 gap-2">
                        {
                            allProduct.map((x, index) => {
                                return (
                                    <Product key={index} id={x._id} image={x.image} name={x.name} price={x.price} rating={x.rating} type={x.type} details={brand?.name}></Product>
                                )
                            })
                        }
                    </div>

                    :
                    <p className="text-center text-red-600 text-3xl font-extrabold mt-4">No data found for this brand</p>
            }

        </div>
    );
};

export default Brand;