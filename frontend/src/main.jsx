import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './routes/HomePage.jsx'
import App from './routes/App.jsx'
import PostPage from './routes/PostPage.jsx'
import WriterPage from './routes/WriterPage.jsx'
import Profile from './routes/Profile.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <HomePage/>
      },
      {
        path:'/post/:id',
        element: <PostPage/>
      },
      {
        path:'profile/writearticle',
        element: <WriterPage/>
      },
      {
      path:'/profile/:id',
      element: <Profile/>
      }
    ],
  }
]);
createRoot(document.getElementById('root')).render(


  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
