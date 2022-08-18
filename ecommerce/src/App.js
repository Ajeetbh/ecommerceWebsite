import React,{useState} from 'react';
import data from './Data';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/Routes';
import Footer from './components/Footer';

const App=()=> {
 const {productItem}=data;
 const [cartItem,setCartItem]=useState([]);
 
 const handleAddProduct=(product)=>{
   const ProductExist=cartItem.find((item)=>item.id === product.id);
   if(ProductExist){
     setCartItem(cartItem.map((item)=>item.id===product.id ?
     {...ProductExist,quantity:ProductExist.quantity+1}:item)
     )
   }
   else {
     setCartItem([...cartItem,{...product,quantity:1}])
   }
 };
 const handleRemoveProduct=(product)=>{
   const ProductExist=cartItem.find((item)=>item.id === product.id);
  if(ProductExist.quantity===1){
   setCartItem(cartItem.filter((item)=>item.id !== product.id));
  }else{
   setCartItem(
     cartItem.map((item)=>
     item.id===product.id ?
     {...ProductExist,quantity:ProductExist.quantity-1}
     :item
     )
   )
  }
 }
 const handleCartClearance=()=>{
   setCartItem([]);
 }
  return (
    <div>
     <Router>
     <Navbar cartItem={cartItem} handleAddProduct={handleAddProduct}/>
     <Routes 
     productItem={productItem} 
     cartItem={cartItem} 
     handleAddProduct={handleAddProduct}
     handleRemoveProduct={handleRemoveProduct}
     handleCartClearance={handleCartClearance}
     />
      <Footer/>
     </Router>
    
    </div>
  )
};
export default App;















