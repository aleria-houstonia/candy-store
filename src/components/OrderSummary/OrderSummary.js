import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import IconButton from "@material-ui/core/IconButton";
import {Link} from 'react-router-dom';
import '../OrderSummary/OrderSummary.css';
import Paper from '@material-ui/core/Paper';
const OrderSummary = () => {
    return (
        <div className="order">
        <div className="order_list" style={{maxWidth:"600px"}}>
             <h3 className="page-heading">Secure checkout</h3>
            <IconButton style={{color:"#ea9d9b"}}><CheckCircleIcon/></IconButton> 
            <span className="customer">Customer</span>
             <h3>Checking out as a Guest? You'll be able to save your details to create an account with us later.
            </h3>
           
            <input placeholder="Email Address" className="inp-input"/>
            <input type="checkbox"/><span className="checkbox-title">Yes, I want to hear about special offers!</span>
            <React.Fragment>
                <div className="address">
              
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField className="inp-input"
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField className="inp-input"
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField className="inp-input"
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField className="inp-input"
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField className="inp-input"
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField className="inp-input" id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField className="inp-input"
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField className="inp-input"
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
          />
        </Grid> 
      </Grid> 
      </div>
      <Grid item xs={12}>
          <FormControlLabel 
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />  
          <Link to='/payment'><button className="order-next">NEXT</button>
          </Link>  
        </Grid>
    </React.Fragment>
        <div>
                <Grid>
                    <Paper>
                    <h2>Order Summary</h2>
                    <h6>Edit Cart</h6>
                    <h5>Gift Message:</h5>
                      {/* <ul>{cart.products.map(elem=>(
                <li key={elem.item.id}
                <li><img style={{width:"100px", height:"100px"}} src={elem.item.image}/></li>
           <li >{elem.item.title}</li>
           <li Subtotal>{elem.item.price}</li>
           <li>{elem.subPrice}</li>
          
           </li>
            </ul>
            ))}  */}
           <h3 className="coupon">Coupon/Gift Certificate</h3>
           <input type="text" />
           <button className="order-next">Apply</button>
           <h6>Promo codes not valid on products that ship separately, gift cards or certificates & select
               monthly clubs. Other exclusions may apply.

           </h6>
           {/* <h2>Total:{calcTotalPrice(cart.products)}</h2> */} 
             </Paper>
             </Grid>
              </div>
             </div>
        </div>
    )
}

export default OrderSummary
