import React, { useState } from 'react'
import '../App.css'
import Stopwatch from '../ComponentsForEnterView/stopWatch'
import SearchBar from '../ComponentsForEnterView/searchBar'
import Counter from './Counter'
import ProductList from './viewApp/ProductList'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './viewApp/Dashboard'
import Home from './Home'

const router = createBrowserRouter([
  {path: '/', element: <Home />},
  {path: '/dashboard', element: <Dashboard />},
  {path: '/productList', element: <ProductList />}
])

function App() {
  const [visibleList, setVisibleList] = useState(false)

  return (
    <div className="App container mt-5 mb-5 p-4 border border-2 rounded-3 border-secondary">
      {/* <h1 className="text-center">Welcome to the App</h1>
      <p className="text-center">This is a simple React application.</p>
      <p className="text-center">Feel free to explore the components and learn more about React Router and Redux.</p>
      <p className="text-center">Happy coding!</p> */}
      {/* <Counter /> */}
      {/* <div>
        <button onClick={()=>setVisibleList(pre=>!pre)} >{visibleList?'hideProducts':'showProducts'}</button>
      {visibleList && <ProductList />}
      </div> */}
      <RouterProvider router={router} />
      <footer>
        <p className="text-center">&copy; 2024 My React App</p>
        {/* <Stopwatch /> */}
        {/* <SearchBar /> */}
      </footer>
    </div>
  )
}

export default App