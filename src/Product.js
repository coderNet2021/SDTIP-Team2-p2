import React, { useState } from 'react';
import List from './ProductList';
function Product() {
    const data =[{
        id:1,
        name:"test1",
        image:"https://img.joomcdn.net/8351b650a2bde8ce3d0bc029d219afafedad09c6_original.jpeg"
    },{
        id:2,
        name:"test2",
        image:"https://5.imimg.com/data5/SELLER/Default/2020/9/KK/WE/FQ/37262215/25-1-500x500.PNG"
    },{
        id:3,
        name:"test3",
        image:"https://images-na.ssl-images-amazon.com/images/I/617cgSGZ3eL.jpg"
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
