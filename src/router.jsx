import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import About from "./Pages/About"
import Home from "./Pages/Home"
import Academics from "./Pages/Academics"
import Admission from "./Pages/Admission"
import Research from "./Pages/Research"
import Jobs from "./Pages/Jobs"
import Contact from "./Pages/Contact"
import Apply from "./Pages/Apply"
import Business from "./Pages/Business"
import Engineering from "./Pages/Engineering"
import Agriculture from "./Pages/Agriculture"
import Events from "./components/Home/UpcomingEvents/Events"
import Allteachers from "./Pages/Allteachers"


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/academics",
                element: <Academics />
            },
            {
                path: "/admission",
                element: <Admission />
            },
            {
                path: "/research",
                element: <Research />
            },
            {
                path: "/job",
                element: <Jobs />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/apply",
                element: <Apply/>
            },
            {
                path: "/business",
                element: <Business />
            },
            {
                path: "/engineering",
                element: <Engineering />
            },
            {
                path: "/agriculture",
                element: <Agriculture />
            },
            {
                path: "/events",
                element: <Events />
            },
            {
                path: "/allteachers",
                element: <Allteachers />
            },
        ]

    },

])