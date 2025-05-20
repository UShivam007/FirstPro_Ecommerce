import { Outlet, useLocation } from "react-router";
import Navbar from "../components/Navbar";
import Home from "../components/Homepage";
import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";


const Layout = ()=>{

    const {theme,themes} = useContext(ThemeContext);
    const Location= useLocation();
    return (
        <div className={`${theme === "dark" ? `${themes.dark.background} ${themes.dark.color}` :
         `${themes.light.background} ${themes.light.color}`}`}>
        <ToastContainer/>
        <Navbar/>
        {
            Location.pathname==="/" ? <Home/> : <Outlet/> 
        }
        </div>
    )
}

export default Layout;