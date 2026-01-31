import axios from "axios";


const axiosClient = axios.create({
    baseURL: 'https://dummyjson.com',
    timeout: 10000
})

export const controler = new Map();

axiosClient.interceptors.request.use(
    (config) => {
        config.headers.Authorization = "lalchand"
        console.log(config.url)
        if (controler.get(config.url)) {
            controler.get(config.url).abort()
        }
        controler.set(config.url, new AbortController())
        return ({ ...config, signal: controler.get(config.url).signal })
    }
)

axiosClient.interceptors.response.use(
    response => response,
    (error) => {
        console.log('lalchand error', error.name)
        if (error.response?.status === 401) {
            console.log('unauthorized! required to login')
        }
        return Promise.reject(error)
    }
)

export default axiosClient


// refresh token consept

// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: "https://api.example.com",
//   withCredentials: true // IMPORTANT: to send cookies automatically
// });

// // Request Interceptor - Add Access Token to all requests
// axiosInstance.interceptors.request.use((config) => {
//   const token = localStorage.getItem("accessToken");
  
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
  
//   return config;
// });

// // Response Interceptor - Refresh token when Access Token expires
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     // Access token expired
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       try {
//         // call refresh token API (refresh token sent via cookie automatically)
//         const res = await axios.post(
//           "https://api.example.com/auth/refresh-token",
//           {},
//           { withCredentials: true }
//         );
        
//         // Get new access token
//         const newAccessToken = res.data.accessToken;
//         localStorage.setItem("accessToken", newAccessToken);

//         // Update request header and retry original API
//         originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
//         return axiosInstance(originalRequest);

//       } catch (refreshErr) {
//         console.log("Refresh token expired, logout user");
//         localStorage.removeItem("accessToken");
//         window.location.href = "/login";
//       }
//     }

//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;
