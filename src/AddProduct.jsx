import { Button, Label, TextInput, Select, Textarea, Radio } from 'flowbite-react';
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
const AddProduct = () => {
    const [brands, setBrands] = useState([])
    useEffect(() => {
        axios.get("http://192.168.0.115:5000/brands")
            .then(res => setBrands(res.data))
            .catch(err => console.log(err))
    }, [])
    function CreateProduct(e) {
        e.preventDefault();
        let formdata= Object.fromEntries(new FormData(e.target)) // turn fromdata into key value pair. default form data make array of array
        axios.post("http://192.168.0.115:5000/product",formdata)
        .then(res=>{
            if (res.data.insertedId !=null) {
                Swal.fire({ icon: 'success', title: "Product Successfully Created" }).then(()=>{
                    e.target.reset();
                });
                
            }
            
        })
        .catch(error=>console.log(error))
        
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
                                return (
                                    <option key={index} value={x._id}> {x.name}</option>
                                )
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
                        <option value="phone"> Phone</option>
                        <option value="computer"> Computer</option>
                        <option value="fridge"> Fridge</option>
                        <option value="headphone"> Headphone</option>
                        <option value="game"> Game</option>
                        <option value="other"> Other</option>
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
                    />
                </div>
                <div
                    className="max-w-md"
                    id="textarea"
                >
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
                <fieldset
                    className="flex  max-w-md gap-4"
                    id="radio"
                >
                    <legend className="mb-4">
                        Rating 
                    </legend>
                    <div className="flex items-center gap-2">
                        <Radio
                            defaultChecked
                            id="5"
                            name="rating"
                            value={1}
                        />
                        <Label htmlFor="5">
                            1
                        </Label>
                    </div>
                    <div className="flex items-center gap-2">
                        <Radio
                            id="5"
                            name="rating"
                            value={2}
                        />
                        <Label htmlFor="5">
                            2
                        </Label>
                    </div>
                    <div className="flex items-center gap-2">
                        <Radio
                            id="5"
                            name="rating"
                            value={3}
                        />
                        <Label htmlFor="5">
                            3
                        </Label>
                    </div>
                    <div className="flex items-center gap-2">
                        <Radio
                            id="5"
                            name="rating"
                            value={4}
                        />
                        <Label htmlFor="5">
                            4
                        </Label>
                    </div>
                    <div className="flex items-center gap-2">
                        <Radio
                        
                            id="5"
                            name="rating"
                            value={5}
                        />
                        <Label
                            htmlFor="5"
                        >
                            <p>
                                5
                            </p>
                        </Label>
                    </div>
                </fieldset>
                <Button type="submit">
                    Add
                </Button>
            </form>
        </div>
    );
};

export default AddProduct;