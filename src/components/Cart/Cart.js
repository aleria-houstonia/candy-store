// import { CircularProgress } from "@material-ui/core";
// import React, { useContext, useEffect, useState } from "react";
// // import {productContext} from '../                      '
// import "./Cart.css";
// // import { calcTotalPrice } from "../helpers/calcPrice";

// const Cart = () => {
//     // const {
//     //     getCart,
//     //     cart,
//     //     changeProductCount,
//     //     deleteCartProducts,
//     // } = useContext(productContext);

//     // useEffect(() => {
//     //     getCart();
//     // }, []);
//     return (
//         <div className="cart">
//             {cart.products ? (
//                 <div>
//                     <div>
//                         {cart.products.length === 0 && <div>Cart Is Empty</div>}
//                     </div>
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>Image</th>
//                                 <th>Title</th>
//                                 <th>Price</th>
//                                 <th>Count</th>
//                                 <th>SubPrice</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {cart.products.map((elem) => (
//                                 <tr key={elem.item.id}>
//                                     <td>
//                                         <img
//                                             style={{ width: "200px" }}
//                                             src={elem.item.image}
//                                             alt="product-image"
//                                         />
//                                     </td>
//                                     <td>{elem.item.title}</td>
//                                     <td>{elem.item.price}</td>
//                                     <td>
//                                         <input
//                                             type="number"
//                                             value={elem.count}
//                                             //  onchange={(e)=>changeProductCount(e.target.value, elem.item.id)}
//                                         />
//                                         <button
//                                             onClick={(e) =>
//                                                 changeProductCount(
//                                                     e.target.value,
//                                                     elem.item.id
//                                                 )
//                                             }
//                                         >
//                                             +
//                                         </button>
//                                         <button
//                                             onClick={() =>
//                                                 deleteCartProducts(elem.item.id)
//                                             }
//                                         >
//                                             -
//                                         </button>
//                                     </td>
//                                     <td>{elem.subPrice}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                     <h4>Total: {calcTotalPrice(cart.products)}</h4>
//                     <button>Оформить заказ</button>
//                 </div>
//             ) : (
//                 <CircularProgress />
//             )}
//         </div>
//     );
// };
// export default Cart;
