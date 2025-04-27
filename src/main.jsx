import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layouts/Root.jsx';
import Home from './pages/Home.jsx';
import Register from './pages/Register.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Login from './pages/Login.jsx';
import Gallery from './pages/Gallery.jsx';
import AddArt from './pages/AddArt.jsx';
import MyCreations from './pages/MyCreations.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: '/', element: <Home></Home> },
      { path: '/register', element: <Register></Register> },
      { path: '/login', element: <Login></Login> },
      { path: '/gallery', element: <Gallery></Gallery> },
      { path: '/addArt', element: <AddArt></AddArt> },
      { path: '/myCreations', element: <MyCreations></MyCreations> }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <AuthProvider>
           <RouterProvider router={router} />
        </AuthProvider>
  </StrictMode>,
)
