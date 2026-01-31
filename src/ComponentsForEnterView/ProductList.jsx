import React from 'react'
import useFetch from '../hooks/useFetch';

function ProductList() {
  const { data, loading, error } = useFetch("https://dummyjson.com/products");
  console.log('ProductListComponent', data, loading, error)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <ul>
      {data.products.map((p) => (
        <li key={p.id}>{p.title}</li>
      ))}
    </ul>
  );
}

export default ProductList