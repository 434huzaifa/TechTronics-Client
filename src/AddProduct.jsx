import { Button, Label, TextInput, Select, Textarea, Radio } from 'flowbite-react';
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import { useLoaderData, useNavigate } from 'react-router-dom';
const AddProduct = () => {
    const [brands, setBrands] = useState([])
    const product = useLoaderData();
    const navigate=useNavigate()
    const type = ['other', 'game', 'headphone', 'fridge', 'computer', 'phone']
    let arr = new Array(5).fill("")
    useEffect(() => {
        axios.get("http://192.168.0.115:5000/brands")
            .then(res => setBrands(res.data))
            .catch(err => console.log(err))
    }, [])
    function CreateProduct(e) {
        e.preventDefault();
        let formdata = Object.fromEntries(new FormData(e.target)) // turn fromdata into key value pair. default form data make array of array
        console.log('formdata: ', formdata);
        if (product) {
            console.log("product._id",product._id)
            axios.put(`http://192.168.0.115:5000/product/${product._id}`,formdata)
                .then(res => {
                    if (res.data.modifiedCount!=0) {
                        Swal.fire({ icon: 'success', title: "Product Successfully Updated" }).then(() => {
                            navigate(`/company${product.company}`)
                        });
                    }
                })
                .catch(error => console.log(error))
        } else {
            axios.post("http://192.168.0.115:5000/product", formdata)
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
        <div className='flex justify-center'>
            <form className="flex max-w-md w-full flex-col gap-4" onSubmit={CreateProduct}>

                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="product_name"
                            value="Product Name"
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
                                        return (<option key={index} value={x._id} selected> {x.name}</option>)
                                    }
                                }
                                return (<option key={index} value={x._id}> {x.name}</option>)
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
                        />
                    </div>
                    <Select
                        id="type" required name="type">
                        {
                            type.map((x, index) => {

                                if (product && product.type == x) {
                                    return <option key={index} value={x} selected> {x.toUpperCase()}</option>
                                } else {

                                    return (<option key={index} value={x}>  {x.toUpperCase()}</option>)
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
                        />
                    </div>
                    <TextInput
                        id="price"
                        required
                        type="number"
                        name="price"
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
                    className="flex  max-w-md gap-4"
                    id="radio"
                >
                    <legend className="mb-4">
                        Rating
                    </legend>
                    {
                        arr.map((x, index) => {
                            if (product && product.rating == index + 1) {
                                return (
                                    <>
                                        <div className="flex items-center gap-2">
                                            <Radio
                                                defaultChecked
                                                id={index + 1}
                                                name="rating"
                                                value={index}
                                            />
                                            <Label htmlFor={index + 1}>
                                                {index + 1}
                                            </Label>
                                        </div>
                                    </>
                                )
                            } else {
                                return (
                                    <>
                                        <div className="flex items-center gap-2">
                                            <Radio

                                                id={index + 1}
                                                name="rating"
                                                value={index + 1}
                                            />
                                            <Label htmlFor={index + 1}>
                                                {index + 1}
                                            </Label>
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