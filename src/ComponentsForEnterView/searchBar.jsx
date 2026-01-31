import React, { useEffect, useState } from "react";

const url = "https://dummyjson.com/products";

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [sortBy, setSortBy] = useState('')
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    const getFetchData = async() =>{
      const res = await fetch(url)
      const data = await res.json()
      console.log(data.products)
      setProducts(data.products)
    }
    getFetchData()
  },[])

  const filteredProducts = (searchPrms, sortPrms) =>{
    console.log("searchPrms, sortPrms", searchPrms, sortPrms)
    let updateProduct = products
    if(searchPrms?.length){
      console.log(searchPrms)
      updateProduct=products.filter(item=>item.title.toLowerCase().includes(searchPrms.toLowerCase()))
      console.log(updateProduct)
    }
    if(sortPrms==='byName'){
      updateProduct.sort((a, b)=>b.title.localeCompare(a.title))
    }
    // else{
    //   updateProduct.sort((a, b)=>a.title.localeCompare(b.title))
    // }
    console.log("orginal", updateProduct)
    return updateProduct
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <select value={sortBy} onChange={e=>setSortBy(e.target.value)}>
        <option></option>
        <option value='byName'>by name</option>
        <option value='byTitle'>by title</option>
      </select>
      <ul>
        {filteredProducts(query, sortBy).length ? filteredProducts(query, sortBy).map(item=>{
          return <li key={item.id}>{
            item.title
          }</li>
        }): <div>data not found</div>}
      </ul>
    </div>
  );
}