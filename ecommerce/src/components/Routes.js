import React from 'react'
import { Route,Switch } from 'react-router-dom';
import Product from '../components/Product';
import SignUp from '../components/SignUp';
import Cart from '../components/Cart';
import Login from '../components/Login';
const Routes=({productItem,
    cartItem,
    handleAddProduct,
    handleRemoveProduct,
    handleCartClearance,
}) =>{
  return (
    <div>
        <Switch>
            <Route path="/" exact>
                <Product productItem={productItem} handleAddProduct={handleAddProduct}/>
            </Route>
            <Route path="/signup" exact>
                <SignUp/>
            </Route>
            <Route path="/login" exact>
                <Login/>
            </Route>
            <Route path="/cart" exact>
                <Cart cartItem={cartItem} 
                handleAddProduct={handleAddProduct} 
                handleRemoveProduct={handleRemoveProduct}
                handleCartClearance={handleCartClearance}
                />
            </Route>
        </Switch>
    </div>
  )
}
export default Routes;








































