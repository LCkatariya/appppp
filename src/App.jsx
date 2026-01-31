import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import Home from "./ReactRouterAndReduxFrom0/Home"
import Dashboard from "./ReactRouterAndReduxFrom0/viewApp/Dashboard"
import Login from "./ReactRouterAndReduxFrom0/authUser/Login"
import Registration from "./ReactRouterAndReduxFrom0/authUser/Registration"
import ProductList from "./ComponentsForEnterView/ProductList"
import Error404 from "./Error404"
import MovieApp from "./MovieApp/App"
import ReactHookForm from "./forPractice/reactHookForm/ReactHookForm"
import FormikForm from "./forPractice/formik/FormicForm"


const ProtectRoute = (props) =>{

  const token = localStorage.getItem('token');
  if(!token){
    return <Navigate to="/login" replace/>
  }
  return <>{props.children}</>
}


const router = createBrowserRouter([
  {path:'*', element: <Error404 />},
  {path: '/', element: <Home />},
  {path: '/login', element: <Login />},
  {path: '/dashboard/*', element:<ProtectRoute><Dashboard /></ProtectRoute>},
  {path: '/registration', element: <ProtectRoute><Registration /></ProtectRoute>},
  {path: '/productlist', element: <ProtectRoute><ProductList /></ProtectRoute>},
  {path: '/movies', element: <ProtectRoute><MovieApp /></ProtectRoute>},
  {path: '/formikForm', element: <ProtectRoute><FormikForm /></ProtectRoute>},
  {path: '/reactHookForm', element: <ProtectRoute><ReactHookForm /></ProtectRoute>}
])

function App() {

  return (
    <>
      {/* <h1>Vite + React lalchand it is so faster to deplemetn</h1> */}
      <RouterProvider router={router} />
    </>
  )
}

export default App
