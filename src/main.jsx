// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './ReactRouterAndReduxFrom0/App.jsx'
// import { Provider } from 'react-redux'
// import { store } from './redux/store'
// import App from './ComponentsForEnterView/App.jsx'
// import App from './MovieApp/App'
// import App from './ReactRouterAndReduxFrom0/App'
import { Provider } from 'react-redux'
import {store} from './reduxToolKit/store'
import App from './App'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  // </StrictMode>,
)
