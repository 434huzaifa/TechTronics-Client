import { useContext, useEffect, useState } from "react";
import { myContext } from "./App";
import axios from "axios";
import { Table, Button ,Spinner} from 'flowbite-react';
const Cart = () => {
    const { user,CartCount } = useContext(myContext)
    const [cart, setCart] = useState()
    const[isLoading,setIsLoading]=useState(true)
    const [sum,setSum]=useState(0)
    useEffect(() => {
        if (user?.email) {
            axios.get(`http://192.168.0.115:5000/cart/${user.email}`).then(res => {
                if (res.data.length) {
                    CartCount(res.data.length);
                    setCart(res.data);
                    let s=0
                    res.data?.forEach(x => {
                        s+=parseFloat(x.price)
                    });
                    setSum(s)
                    setIsLoading(false);
                }
            }).catch(error => console.log(error))
        }

    }, [user])
    function DeleteFromCart(id) {
        axios.delete(`http://192.168.0.115:5000/cart/${id}`).then(res=>console.log(res)).catch(error=>console.log(error))
    }
    return (
        <div>
            {
                isLoading ? <div className="text-center">
                <Spinner  size="xl" color="purple" aria-label="Center-aligned spinner example" />
              </div>
              :
              <Table hoverable>
              <Table.Head >
                  <Table.HeadCell className="text-lg">Item Name</Table.HeadCell>
                  <Table.HeadCell className="text-lg">Type</Table.HeadCell>
                  <Table.HeadCell className="text-lg">Brand</Table.HeadCell>
                  <Table.HeadCell className="text-lg">Price</Table.HeadCell>
                  <Table.HeadCell className="text-lg">Action</Table.HeadCell>
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
                                  <Table.Cell><Button onClick={()=>DeleteFromCart(x._id)} color="failure">
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
            }

        </div>
    );
};

export default Cart;