
import { createBrowserRouter, RouterProvider } from "react-router";
import NotFound from "./pages/NotFound";
import Layout from "./pages/layout";
import Courses from "./Course/Courses";
import Events from "./components/Events";
import Contact from "./components/Contact";
import CourseOverview from "./Course/Coursesoverview";
import Register from "./components/Register";
import Login from "./components/Login";
import Content from "./components/Content";


const router = createBrowserRouter([

    {
        path: "/",
        element: <Layout />,
        children:[
            {
                path: "/Content",
                element: <Content/>
            },
            {
                path: "/Courses",
                element: <Courses />
            },
            {
                path: "/CourseDetails/:courseId",
                element: <CourseOverview/>
            },
            {
                path: "/Events",
                element: <Events />
            },
            {
                path: "/Contact",
                element: <Contact />
            },
            {
                path: "/Login",
                element: <Login/>
            },
            {
                path:"/Register",
                element:<Register/>
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    },

    {
        path: "*",
        element: <NotFound />
    }
]);


const Router = () => {
    return (
        <RouterProvider router={router} />
    )
}
export default Router;