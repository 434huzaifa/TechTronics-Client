import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";
import { Button, TextInput, Spinner } from 'flowbite-react';
import { IoIosSearch } from "react-icons/io";
const Products = () => {
    const [allProducts, setAllProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [isSearch, setSearch] = useState(false)
    const [isExist, setIsExist] = useState(false)
    function AllProduct() {
        axios.get("https://b8a10-brandshop-server-side-434huzaifa.vercel.app/products")
            .then(res => {
                setLoading(false)
                if (res.data.length != 0) {
                    setAllProducts(res.data)
                    setSearch(false)
                    setIsExist(true)
                }

                if (isExist) {

                    document.getElementById("search").value = ""
                }
            })
            .catch(error => {
                console.log(error)
                setIsExist(false)
                setSearch(false)
            })


    }
    useEffect(() => {
        AllProduct()
    }, [])

    function SearchByName(e) {
        e.preventDefault();
        setLoading(true)
        setSearch(true)

        axios.get(`https://b8a10-brandshop-server-side-434huzaifa.vercel.app/search/${e.target.search.value}`)
            .then(res => {
                setLoading(false)
                setAllProducts(res.data)
                setIsExist(true)

            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <>
            {loading ? <div className="text-center mt-5">
                <Spinner
                    aria-label="Extra large spinner example"
                    size="xl"
                />
            </div>
                :
                isExist ?
                    <div>
                        <p className="text-center text-3xl font-extrabold mt-4">{isSearch ? "Searched Item" : "All Item"}</p>
                        <form onSubmit={SearchByName}>
                            <div className="lg:w-full mt-2 flex gap-1 lg:gap-2 justify-center">
                                {
                                    isSearch ? <Button onClick={() => AllProduct()}>Clear Search</Button> : ""
                                }

                                <TextInput
                                    icon={IoIosSearch}
                                    id="search"
                                    name="search"
                                    required
                                    placeholder="Search by name...."
                                    type="text"
                                    className="lg:w-2/4"
                                />
                                <Button type="submit">Search</Button>
                            </div>
                        </form>
                        {loading ? <div className="text-center mt-5">
                            <Spinner
                                aria-label="Extra large spinner example"
                                size="xl"
                            />
                        </div>
                            : allProducts.length == 0 ? <p className="text-center text-red-600 text-3xl font-extrabold mt-4">No Data Found </p> :
                                <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
                                    {
                                        allProducts.map((x, index) => {
                                            return (
                                                <Product key={index} id={x._id} image={x.image} name={x.name} price={x.price} rating={x.rating} type={x.type} details={false}></Product>
                                            )
                                        })
                                    }

                                </div>}

                    </div> :
                    <p className="text-center text-red-600 text-3xl font-extrabold mt-4">There is no data in the database</p>
            }

        </>
    );
};

export default Products;