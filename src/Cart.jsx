import { useContext, useEffect, useState } from "react";
import { myContext } from "./App";
import axios from "axios";

const Cart = () => {
    const { user } = useContext(myContext)
    const [cart, setCart] = useState()
    useEffect(() => {
        axios.get(`http://192.168.0.115:5000/cart/${user.email}`).then(res => {
            console.log(res.data)
            if (res.data.length) {
                setCart(res.data)
            }
        }).catch(error => console.log(error))
    }, [])
    return (
        <div>
            {
                cart?.map()
            }
        </div>
    );
};

export default Cart;