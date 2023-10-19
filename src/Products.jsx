import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";
import { Button, TextInput, Spinner } from 'flowbite-react';
import { IoIosSearch } from "react-icons/io";
const Products = () => {
    const [allProducts, setAllProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [isSearch, setSearch] = useState(false)
    function AllProduct() {
        setLoading(true)
        axios.get("http://192.168.0.115:5000/products")
            .then(res => {
                setAllProducts(res.data)
                setLoading(false)
                setSearch(false)
                document.getElementById("search").value = ""
            })
            .catch(error => console.log(error))
    }
    useEffect(() => {
        AllProduct()
    }, [])

    function SearchByName(e) {
        e.preventDefault();
        setLoading(true)
        setSearch(true)
        axios.get(`http://192.168.0.115:5000/search/${e.target.search.value}`)
            .then(res => {
                setLoading(false)
                setAllProducts(res.data)
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <form onSubmit={SearchByName}>
                <div className="w-full mt-4 flex gap-2 justify-center">
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
                        className="w-2/4"
                    />
                    <Button type="submit">Search</Button>
                </div>
            </form>
            {loading ? <div className="text-center mt-5">
                <Spinner
                    aria-label="Extra large spinner example"
                    size="xl"
                />
            </div> : <div className="grid grid-cols-4 gap-4 mt-5">
                {
                    allProducts.map((x, index) => {
                        return (
                            <Product key={index} id={x._id} image={x.image} name={x.name} price={x.price} rating={x.rating} type={x.type} details={false}></Product>
                        )
                    })
                }

            </div>}

        </div>
    );
};

export default Products;