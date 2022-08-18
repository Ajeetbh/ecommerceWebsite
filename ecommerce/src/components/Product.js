import React from 'react'
import '../style/Product.css';

const Product=({productItem,handleAddProduct})=>{
  return (
    <div className='product'>
        {productItem.map((productItem)=>(
            <div className='card'>
                <div>
                    <img 
                    className='product-image'
                    src={productItem.img}
                    alt=""
                    />
                </div>
                <div className="product-name">
                <h3>{productItem.title}</h3>
                </div>
                <div className='product-price'>Price -${productItem.price}Rs</div>
                <div>
                    <button className='product-add-button' 
                    onClick={()=>handleAddProduct(productItem)}>Add to Cart</button>
                </div>
             </div>
        ))}
    </div>
  )
}
export default Product;