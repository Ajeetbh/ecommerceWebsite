import React from "react"
import '../style/cart.css';
const Cart=({cartItem,handleAddProduct,handleRemoveProduct,handleCartClearance})=> {
  const totalPrice=cartItem.reduce(
    (price,item)=>price + item.quantity*item.price,
    0
  );
  return (
    <div className="cart-item">
      <h2 className="cart-item-header">Cart Items</h2>
      <div className="clear-cart">
        {cartItem.length>=1 && (
          <button className="clear-cart-button" onClick={handleCartClearance}>Clear Cart</button>
        )}
      </div>
      {cartItem.length === 0 && (
        <div className="cart-item-empty">No Item are added</div>
      )}
      <div>
        {cartItem.map((item)=>(
          <div key={item.id} className="cart-item-list">
            <img className="cart-item-image" 
            src={item.img} 
            alt={item.title}/>
          <div className="cart-item-name">{item.title}</div>
          <div className="cart-item-price">{item.price}</div>
          <div className="cart-item-function">
             <button className="cart-item-remove" onClick={() =>handleRemoveProduct(item)}>-</button>
             <button className="cart-item-add" onClick={() =>handleAddProduct(item)}>+</button>
          </div>
          <div className="cart-item-price">
            <button>{item.quantity}</button>${item.price}
          </div>
          </div>
        ))}
      </div>
      <div className="cart-item-total-price-name">Total price
      <div className="cart-item-total-price">${totalPrice}</div>
      </div>
    </div>
  )
}
export default Cart;































