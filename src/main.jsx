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
import PrivateRoute from './routes/PrivateRoute.jsx';
import ViewDetails_ItemCard from './pages/ViewDetails_ItemCard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: '/', element: <Home></Home> },
      { path: '/register', element: <Register></Register> },
      { path: '/login', element: <Login></Login> },
      { path: '/gallery', element: <Gallery></Gallery>, loader: () =>  fetch(`http://localhost:5000/arts`) },
      { path: '/addArt', element: <PrivateRoute><AddArt></AddArt></PrivateRoute> },
      { path: '/myCreations', element: <PrivateRoute><MyCreations></MyCreations></PrivateRoute> },
      { path: '/items/:id', element: <PrivateRoute><ViewDetails_ItemCard></ViewDetails_ItemCard></PrivateRoute> }
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
