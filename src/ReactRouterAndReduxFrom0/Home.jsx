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
      <div>
        all routes
        <div> <Link to={'/login'} >login</Link></div>
        <div> <Link to={'/dashboard'} >dashboard</Link></div>
        <div> <Link to={'/registration'} >registration</Link></div>
        <div> <Link to={'/productlist'} >productlist</Link></div>
        <div> <Link to={'/movies'} >movies</Link></div>
        <div> <Link to={'/reactHookForm'} >reactHookForm</Link></div>
        <div> <Link to={'/formikForm'} >formikForm</Link></div>
      </div>
    </div>
  )
}

export default Home