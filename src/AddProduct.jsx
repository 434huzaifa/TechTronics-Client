import { Button, Label, TextInput, Select, Textarea, Radio } from 'flowbite-react';
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import { myContext } from "./App";

import { useContext } from "react";
import { useLoaderData, useNavigate } from 'react-router-dom';
const AddProduct = () => {
    const {dark } = useContext(myContext)
    const [brands, setBrands] = useState([])
    const product = useLoaderData();
    const navigate=useNavigate()
    const type = ['other', 'game', 'headphone', 'fridge', 'computer', 'phone']
    let arr = new Array(5).fill("")
    useEffect(() => {
        axios.get("https://techtronics.vercel.app/brands")
            .then(res => setBrands(res.data))
            .catch(err => console.log(err))
    }, [])
    function CreateProduct(e) {
        e.preventDefault();
        let formdata = Object.fromEntries(new FormData(e.target)) // turn fromdata into key value pair. default form data make array of array
        if (product) {
            axios.put(`https://techtronics.vercel.app/product/${product._id}`,formdata)
                .then(res => {
                    if (res.data.modifiedCount!=0) {
                        Swal.fire({ icon: 'success', title: "Product Successfully Updated" }).then(() => {
                            navigate(`/company/${product.company}`)
                        });
                    }
                })
                .catch(error => console.log(error))


        } else {
            axios.post("https://techtronics.vercel.app/product", formdata)
                .then(res => {
                    if (res.data.insertedId != null) {
                        Swal.fire({ icon: 'success', title: "Product Successfully Created" }).then(() => {
                            e.target.reset();
                        });
                    }
                })
                .catch(error => console.log(error))

               
        }


    }
    return (
        <div className='flex justify-center mb-10'>
            <form className={`flex max-w-md w-full flex-col gap-4 `} onSubmit={CreateProduct}>

                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="product_name"
                            value="Product Name"
                            className={`${dark?"text-white": "text-gray-900"}`}
                        />
                    </div>
                    <TextInput
                        id="product_name"
                        required
                        type="name"
                        name="name"
                        
                        defaultValue={product ? product.name : ""}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="image url"
                            value="Image Url"
                            className={`${dark?"text-white": "text-gray-900"}`}
                        />
                    </div>
                    <TextInput
                        id="image url"
                        required
                        type="url"
                        name="image"
                        defaultValue={product ? product.image : ""}
                    />
                </div>
                <div
                    className="max-w-md"
                    id="select">
                    <div className="mb-2 block">
                        <Label
                            htmlFor="company"
                            value="Brand Name"
                            className={`${dark?"text-white": "text-gray-900"}`}
                        />
                    </div>
                    <Select
                        id="company"
                        name="company"
                        required
                        
                    >
                        {
                            brands.map((x, index) => {
                                if (product) {

                                    if (product.company == x._id) {
                                        return (<option className={`${dark?"text-white": "text-gray-900"}`} key={index} value={x._id} selected> {x.name}</option>)
                                    }
                                }
                                return (<option className={`${dark?"text-white": "text-gray-900"}`} key={index} value={x._id}> {x.name}</option>)
                            })
                        }
                    </Select>
                </div>
                <div
                    className="max-w-md"
                    id="select">
                    <div className="mb-2 block">
                        <Label
                            htmlFor="type"
                            value="Product Type"
                            className={`${dark?"text-white": "text-gray-900"}`}
                        />
                    </div>
                    <Select
                        id="type" required name="type">
                        {
                            type.map((x, index) => {

                                if (product && product.type == x) {
                                    return <option className={`${dark?"text-white": "text-gray-900"}`}  key={index} value={x} selected> {x.toUpperCase()}</option>
                                } else {

                                    return (<option className={`${dark?"text-white": "text-gray-900"}`} key={index} value={x}>  {x.toUpperCase()}</option>)
                                }
                            })
                        }
                    </Select>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="price"
                            value="Price"
                            className={`${dark?"text-white": "text-gray-900"}`}
                        />
                    </div>
                    <TextInput
                        id="price"
                        required
                        type="number"
                        name="price"
                        className={`${dark?"text-white": "text-gray-900"}`}
                        defaultValue={product ? product.price : ""}
                    />
                </div>
                {
                    product ? "" : <div
                        className="max-w-md"
                        id="textarea">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="description"
                                value="Short Description"
                                className={`${dark?"text-white": "text-gray-900"}`}
                            />
                        </div>
                        <Textarea
                            id="description"
                            required
                            rows={4}
                            name="description"
                            
                        />
                    </div>
                }

                <fieldset
                    className={`flex  max-w-md gap-4 ${dark?"text-white": "text-gray-900"}`}
                    id="radio"
                    
                >
                    <legend className="mb-4">
                        Rating
                    </legend>
                    {
                        arr.map((x, index) => {
                            if (product && product.rating == index + 1) {
                                if (product && product?.rating) {
                                    return (
                                        <>
                                            <div key={index} className="flex items-center gap-1">
                                            <Label htmlFor={index + 1} className={`${dark?"text-white": "text-gray-900"}`}>
                                                    {index + 1}
                                                </Label>
                                                <Radio
                                                defaultChecked
                                                    required="required"
                                                    id={index + 1}
                                                    name="rating"
                                                    value={index}
                                                    
                                                />
                                               
                                            </div>
                                        </>
                                    )
                                }
                                return (
                                    <>
                                        <div className="flex items-center gap-1">
                                        <Label htmlFor={index + 1} className={`${dark?"text-white": "text-gray-900"}`}>
                                                {index + 1}
                                            </Label>
                                            <Radio
                                                required="required"
                                                id={index + 1}
                                                name="rating"
                                                value={index}
                                            />
                                            
                                        </div>
                                    </>
                                )
                            } else {
                                return (
                                    <>
                                        <div className="flex items-center gap-1">
                                        <Label htmlFor={index + 1} className={`${dark?"text-white": "text-gray-900"}`}>
                                                {index + 1}
                                            </Label>
                                            <Radio

                                                id={index + 1}
                                                name="rating"
                                                value={index + 1}
                                            />
                                            
                                        </div>
                                    </>
                                )
                            }
                        })
                    }
                </fieldset>
                <Button type="submit">
                    {
                        product? "Submit":"Add"
                    }
                </Button>
            </form>
        </div>
    );
};

export default AddProduct;