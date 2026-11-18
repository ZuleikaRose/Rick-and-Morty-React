import HomePage from "../pages/HomePage"
const Outlet = ({children}) => {
    
    console.log(window.location.pathname)

    if (window.location.pathname === '/'){
            return <HomePage/>
    } else {
        null
    }
}

export default HomePage;