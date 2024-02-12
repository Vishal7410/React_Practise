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
import Profile from "./Component/NavPages/Profile.jsx";
// import Lazyload from "./Component/NavPages/Lazyload.jsx";
// These is just load by the lazy load


import { Suspense, lazy } from "react";
import ShimmerUI from "./Component/Shimmer_UI/ShimmerUI.jsx";


/**
 * Make code here Fire the lazyLoad
 * It is also Called
 * 
 * Chunking
 * Code Splitting
 * Dynamic Bundling
 * Lazy Loading
 * On Demand Loading
 * Dynamic Import
 * 
 * 
 * These all are the same name these are just jargons words
 * 
 */

//here Imported by the lazy loading
const Lazyload = lazy(() => import("./Component/NavPages/Lazyload.jsx"));
// Upon On Demand Loading -> upon Render -> suspend Loading
// so in first time when we go to the lazyloading component it take much time to load 
// so that why we use suspence tag which is imported from react and in tag we use followback as props
// And In these fallback we use use our shimmerUI because when it take time or we don't know it load or 
// not that time we use fallback to load any component like shimmer.  


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
        path: "/about",
        element: <About />,
        children: [{
          path: "profile",
          element: <Profile />
        }]
      },
      {
        path: "/contactUs",
        element: <ContactUs />
      },
      {
        path: "/cart",
        element: <Cart />
      },

      {
        path: "/lazyLoad",
        element:(
         <Suspense fallback = {<ShimmerUI/>} >
          <Lazyload />
        </Suspense>) 
      },
      {
        path: "/restaurant/:Id",
        element: <RestaurantMenu />
      },
    ]
    

    }

])

export default appRouter;

