//import { useState } from "react";

import { Outlet, createBrowserRouter } from "react-router-dom";
import "./App.css";
import  Body  from "./Component/Body/Body.jsx";
import Footer from "./Component/Footer/Footer.jsx"
import  {HeaderComponent}  from "./Component/HeaderComponent/HeaderComponent.jsx";
import About from "./Component/NavPages/About.jsx";
import ContactUs from "./Component/NavPages/ContactUs.jsx";
import Cart from "./Component/NavPages/Cart.jsx";
import ErrorPage from "./Component/NavPages/ErrorPage.jsx";
import RestaurantMenu from "./Component/RestaurantMenu.jsx";


function App() {         //you can also called these component AppLayout because it is also called the layout component
  return (
    <>
      <HeaderComponent />
      <Outlet/>
      <Footer/>
    </>
  );
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contactUs",
        element: <ContactUs />
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "restaurantMenu/:Id",
        element: <RestaurantMenu />
      },
    ]
    

    }

])

export default appRouter;

