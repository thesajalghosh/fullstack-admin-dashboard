import React from 'react'
import Header from 'components/header/Header'
import { useGetProductsQuery } from 'state/api'
import Product from "../../components/products/Product"
import './Products.css'

const Products = () => {
  const { data, isLoading } = useGetProductsQuery();
  console.log(data)

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='products'>
      <div className='product_container'>
        <Header title="PRODUCTS" subtitle="See your list of Products" />
        <div className='items'>
          {data?.map(({ _id, name, description, price, rating, category, supply, stat }) => (
            <Product
              key={_id}
              _id={_id}
              name={name}
              description={description}
              price={price}
              rating={rating}
              category={category}
              supply={supply}
              stat={stat}
            />
          ))}
          
        </div>
        
        
      </div>
    </div>
  )
}

export default Products
