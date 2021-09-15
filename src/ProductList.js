import React from 'react';

const ProductList = ({product}) => {
  return (
    <>
      {product.map((aProduct)=>{
        const {id,name,image}=aProduct;
        return <article key={id} className='person'>
          <img src={image} alt={name} />
          <div className='row'>
            <h4>{name}</h4>
            {name} {name}
          </div>
          
        </article>
      })}
    </>
  );
};

export default ProductList;
