import React, { useEffect, useState } from 'react'
import axiosClient, { controler } from '../api/axiosInstence'
import EmployeeForm from '../forPractice/formik/FormicForm'
import ReactHookForm from '../forPractice/reactHookForm/ReactHookForm'
import { Link } from 'react-router-dom'

const Home = () => {
  const [data, setData] = useState([])
  const [urls, setUrls] = useState(["https://www.naukri.com/react-js-developer-jobs-1?k=react+js+developer&nignbevent_src=jobsearchDeskGNB&experience=6&jobAge=1", "https://www.naukri.com/react-js-developer-jobs-2?k=react+js+developer&nignbevent_src=jobsearchDeskGNB&experience=6&jobAge=1", "https://www.naukri.com/react-js-developer-jobs-3?k=react+js+developer&nignbevent_src=jobsearchDeskGNB&experience=6&jobAge=1"])
  useEffect(() => {
    // async function getData() {
    //   try {
    //     const posts = await axiosClient.get("/products?delay=5000")
    //     setData(posts)
    //   } catch (error) {
    //     console.log('error-lalchand', error)
    //   }
    // }
    // getData()
  }, [])
  console.log(data)

  const getCarts = async () => {
    try {
      const posts = await axiosClient.get("/carts?delay=5000")
      setData(posts)
    } catch (error) {
      console.log('error-lalchand', error)
    }
  }
  const getProduct = async () => {
    try {
      const posts = await axiosClient.get("/products?delay=5000")
      setData(posts)
    } catch (error) {
      console.log('error-lalchand', error)
    }
  }
  const getUsers = async () => {
    try {
      const posts = await axiosClient.get("/users?delay=5000")
      setData(posts)
    } catch (error) {
      console.log('error-lalchand', error)
    }
  }

  const handleClick = () => {
    urls.forEach(url => {
      window.open(
        url,
        '_blank'
      );
    });
  }

  return (
    <div>Home
      <button onClick={() => getCarts()}>getCarts</button>
      <button onClick={() => getProduct()}>getProduct</button>
      <button onClick={() => getUsers()}>getUsers</button>
      <button onClick={() => { controler.get('/carts?delay=5000').abort() }}>abortRequestOf getCarts</button>
      <button onClick={() => handleClick()}>Apply Jobs on Naukri</button>
      <br />
      <div>All Routes</div>
      <ol>
        <li> <Link to={'/login'} >login</Link></li>
        <li> <Link to={'/dashboard'} >dashboard</Link></li>
        <li> <Link to={'/registration'} >registration</Link></li>
        <li> <Link to={'/productlist'} >productlist</Link></li>
        <li> <Link to={'/movies'} >movies</Link></li>
        <li> <Link to={'/reactHookForm'} >reactHookForm</Link></li>
        <li> <Link to={'/formikForm'} >formikForm</Link></li>
      </ol>
    </div>
  )
}

export default Home