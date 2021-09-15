import React, { useState } from 'react';
import List from './ProductList';
function Product() {
    const data =[{
        id:1,
        name:"test1",
        image:"img1"
    },{
        id:2,
        name:"test2",
        image:"img2"
    },{
        id:3,
        name:"test3",
        image:"img3"
    }]
  const [product,setProduct]=useState(data);
//   const clickHandler = ()=>{
//     setProduct([]);
//   }

  return <main><section className="container">
    <h3>{product.length}products</h3>
    <List product={product}> </List>
    <button className="btn" type="button" onClick={()=>console.log('clicked!')}>clear all data</button>
  </section>
  </main>
}

export default Product;
