import { useContext, useEffect, useState } from "react";
import { myContext } from "./App";
import axios from "axios";
import { Table, Button, Spinner, Card, Badge } from 'flowbite-react';
import Swal from "sweetalert2";
const Cart = () => {
    const { user, CartCount } = useContext(myContext)
    const [cart, setCart] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [sum, setSum] = useState(0)
    useEffect(() => {
        if (user?.email) {
            axios.get(`https://techtronics.vercel.app/cart/${user.email}`).then(res => {
                if (res.data.length) {
                    CartCount(res.data.length);
                    setCart(res.data);
                    let s = 0
                    res.data?.forEach(x => {
                        s += parseFloat(x.price)
                    });
                    setSum(s)
                    setIsLoading(false);
                }
            }).catch(error => {
                setIsLoading(false);
                console.log(error)
            })
           
        }

    }, [user])
    function DeleteFromCart(id) {
        axios.delete(`https://techtronics.vercel.app/cart/${id}`).then(res => {
            if (res.data.deletedCount == 1) {
                Swal.fire({ icon: 'success', title: "Product Successfully Deleted from Cart" }).then(() => {
                    let newCart = cart?.filter(x => x.cartId != id)
                    setCart(newCart)
                    let s = 0
                    newCart?.forEach(x => {
                        s += parseFloat(x.price)
                    });
                    setSum(s)
                    CartCount(newCart.length);
                })
            }
        }).catch(error => console.log(error))
    }
    return (
        <div>
            {
                isLoading ? <div className="text-center">
                    <Spinner size="xl" color="purple" aria-label="Center-aligned spinner example" />
                </div>
                    :
                    <>
                        <Table hoverable  className="hidden md:table">
                            <Table.Head >
                                <Table.HeadCell className="lg:text-lg">Item Name</Table.HeadCell>
                                <Table.HeadCell className="lg:text-lg">Type</Table.HeadCell>
                                <Table.HeadCell className="lg:text-lg">Brand</Table.HeadCell>
                                <Table.HeadCell className="lg:text-lg">Price</Table.HeadCell>
                                <Table.HeadCell className="lg:text-lg">Action</Table.HeadCell>
                            </Table.Head>
                            <Table.Body className="divide-y">
                                {
                                    cart?.map((x, index) => {
                                        return (
                                            <Table.Row className="text-black font-semibold" key={index}>
                                                <Table.Cell>{x.name}</Table.Cell>
                                                <Table.Cell>{x.type}</Table.Cell>
                                                <Table.Cell>{x.company}</Table.Cell>
                                                <Table.Cell>${x.price}</Table.Cell>
                                                <Table.Cell><Button onClick={() => DeleteFromCart(x.cartId)} color="failure">
                                                    Delete
                                                </Button></Table.Cell>
                                            </Table.Row>
                                        )
                                    })
                                }
                                <Table.Row>
                                    <Table.Cell colSpan={3} className="text-black font-bold text-xl">Total Price</Table.Cell>
                                    <Table.Cell className="text-black font-bold text-xl">${sum}</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                        <div className="lg:hidden md:hidden flex flex-col justify-center items-center">
                            <p className="text-center w-full max-w-sm bg-lime-500 rounded mb-2 text-slate-200 p-1">Total Price: ${sum}</p>
                            <div>
                        {
                            cart?.map((x, index) => {
                                return (
                                    <Card key={index} className="max-w-sm">
                                        <Badge color="info" className="text-lg font-bold justify-center">
                                                {x.company}
                                            </Badge>
                                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            <p>
                                                {x.name}
                                            </p>
                                        </h5>
                                        <p className="font-normal text-gray-700 dark:text-gray-400">
                                            <Badge color="info" className="w-min">
                                                {x.type}
                                            </Badge>
                                        </p>
                                        <p className="font-normal text-center text-xl text-gray-700 dark:text-gray-400">
                                        ${x.price}
                                        </p>
                                        <Button color="failure">
                                            <p>
                                                Delete
                                            </p>
                                        </Button>
                                    </Card>
                                )
                            })
                        }</div></div>

                    </>
            }


        </div>
    );
};

export default Cart;