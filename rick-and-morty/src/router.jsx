import App from './App.jsx'
import HomePage from './pages/HomePage.jsx'
import { createBrowserRouter } from 'react-router'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "about",
                element: <AboutPage />
            }
        ],
    }
])

export default router;