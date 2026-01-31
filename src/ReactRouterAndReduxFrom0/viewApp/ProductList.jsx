import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../../reduxToolKit/slices/productListSlice';

function ProductList() {
  const dispatch = useDispatch()
  const {loading, data, error} = useSelector(state=>state?.productList);

  useEffect(()=>{
    dispatch(fetchProduct("https://dummyjson.com/products"))
  },[dispatch])

  return (
    <>
    <div>ProductList</div>
    {loading}
    {data?.products?.map(item=>
      <div key={item.id}>
        title : {item.title}
      </div>
    )}
    {error}
    </>
  )
}

export default ProductList