
import LinearProgress from '@material-ui/core/LinearProgress';
import React, { useContext,useEffect, useState} from 'react';
import { productContext } from "../../contexts/ProductsContext";
import DeleteIcon from '@material-ui/icons/Delete';
import "./Cart.css";
import {calcTotalPrice} from '../../helpers/calcPrice';
import IconButton from "@material-ui/core/IconButton";
import {Link} from 'react-router-dom';

const Cart = () => {
    const {getCart, cart, changeProductCount, deleteCartProducts} =useContext(productContext)
    useEffect(()=>{
        getCart()
    },[])
    return (
        <div className="cart">
           
            {cart.product ? (

          
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Count</th>
                            <th>SubPrice</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.product.map(elem=>(
                        <tr key={elem.item.id}>
                            <td><img style={{width:"150px", height:"150px"}} src={elem.item.image} alt="product-img"/></td>
                            <td>{elem.item.title}</td>
                            <td>{elem.item.price}</td>
                            <td><input style={{textAlign:"center"}} type="number"
                             value={elem.count}
                             onChange={(e)=> changeProductCount(e.target.value, elem.item.id)}/></td>
                            <td>{elem.subPrice}</td>
                            <IconButton style={{color:"#ea9d9b", marginTop:"65px"}}
                            onClick={()=>deleteCartProducts(elem.item.id)}><DeleteIcon/></IconButton> 
                        </tr>
                       
                        ))}
                    </tbody>
                </table>
                <div className="order-title">
                <h4 className="total-price">Total: {calcTotalPrice(cart.product)} </h4>
               <Link to="/order"><button className="btn-form">Order</button></Link>
                </div>
                 </div>  
                 ): (<LinearProgress/>)}          
        </div>
    )
}

export default Cart
