import React from 'react'
import { Link, Navigate, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import Error404 from '../../Error404'

const Dashboard1 = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }
    return (
        <div>
            <div>Dashboard content</div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>            
                <Link to={'/movies'} >popular movies</Link>
                <Link to={'/formikForm'} >Formik Form</Link>
                <Link to={'/reactHookForm'} >React Hook Form</Link></div>
            <button onClick={() => { handleLogout() }}>Click to Logout</button>
        </div>
    )
}

const Post = () => {
    const { pid } = useParams()

    return <div>
        <h1>post page are in development... post no is {pid}</h1>
    </div>
}

function Dashboard() {

    return (
        <>
            <Routes>
                <Route index element={<Navigate to={'/dashboard/dashboard1'} replace />} />
                <Route path='/dashboard1' element={<Dashboard1 />} />
                <Route path='/profile' element={<h1>Profile page in development...</h1>} />
                <Route path='/post/:pid' element={<Post />} />
                <Route path='*' element={<Error404 />} />
            </Routes>
        </>
    )
}

export default Dashboard