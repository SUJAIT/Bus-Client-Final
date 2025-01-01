import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import AllBus from "../Pages/AllBus/AllBus";
import BusCard from "../Pages/AllBus/BusCard";
import Register from "../Authentication/Register";
import Login from "../Authentication/Login";
import PaySuccess from "../Payment/PaySuccess";
import PayCancel from "../Payment/PayCancel";
import Ticket from "../Pages/Ticket/Ticket";
import BusTicket from "../test";
import SearchResult from "../Pages/Search/SearchResult";
// import CheckOutPage from "../Payment/CheckOutPage";
// import PayCart from "../Payment/PayCart";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "allbus",
                element: <AllBus></AllBus>
            },
            {
                path: "/order/:id",
                element: <BusCard></BusCard>
            },
            {
                path: "register",
                element: <Register></Register>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "/success",
                element: <PaySuccess></PaySuccess>
            },
            {
                path: "/cancel",
                element: <PayCancel></PayCancel>
            },
            {
                path: "/ticket",
                element: <Ticket></Ticket>
            },
            {
                path: "/test",
                element: <BusTicket></BusTicket>
            },
            {
                path: "/search-results",
                element: <SearchResult></SearchResult>
            }
        ]
    }
])