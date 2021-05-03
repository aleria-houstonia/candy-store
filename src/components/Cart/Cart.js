import { CircularProgress } from "@material-ui/core";
import React, { useContext, useEffect,useState } from "react";
import { productContext } from "../../contexts/ProductsContext";
import { calcTotalPrice } from "../../helpers/calcPrice";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import "./Cart.css";
import Modal from "../Modal/Modal";


const Cart = () => {
    const { cart, getCart, changeProductCount,deleteCartProducts } = useContext(productContext);
    const [totalPrice, setTotalPrice] = useState()
   
    useEffect(() => {
        getCart();
    }, []);
    const [modal, setModal] = useState({modal1:false})

    useEffect(() => {
        if(cart?.products && cart?.products.length > 0){
            setTotalPrice(calcTotalPrice(cart.products))
        }
    },[cart])
    return (
        <div className="cart">
            
            {cart.products ? (
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Count</th>
                                <th>SubPrice</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.products.map((elem) => (
                                <tr key={elem.item.id}>
                                    <td>
                                        <img
                                            style={{ width:"250px",height:"200px",border:"2px solid grey" }}
                                            src={elem.item.image}
                                            alt="Here should be image of product"
                                        />
                                    </td>
                                    <td>{elem.item.title}</td>
                                    <td>{elem.item.price} $</td>
                                    <td>
                                        <input
                                            defaultValue={1}
                                            type="number"
                                            onChange={(e) =>
                                                changeProductCount(
                                                    e.target.value,
                                                    elem.item.id
                                                )
                                            }
                                        />
                                    </td>
                                    <td>{elem.subPrice} $</td>
                                    <IconButton style={{color:"#9900ff", paddingTop:"100px"}}
                                    onClick={()=>deleteCartProducts(elem.item.id)}><DeleteIcon/></IconButton> 
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <h4 className="total-price">Total: {calcTotalPrice(cart.products)} $</h4>
             
                    <button className="btn-form" onClick={()=>setModal({...modal,modal1 :true})}>Order</button>
                </div>
            ) : (
                <CircularProgress />
            )}
            <Modal
            title={'Modal 1 Title'}
            isOpened={modal.modal1}
            onModalClose={()=>setModal({...modal,modal1 :false})}
            totalPrice={totalPrice}
            />
        </div>
    );
};
export default Cart;