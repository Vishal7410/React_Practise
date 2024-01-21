import React from "react";
import Profile from "./Profile";
import { Link, Outlet } from "react-router-dom";
import ProfileClassComponent from "./ProfileClass";

const About = () => {
  return (
    <>
      <h1>Your About Us Page</h1>
     
      {/* <Link to={"/profile"}>Click me <Profile/></Link> */}
      {/* <Outlet/> */}

      <div style={{
        marginTop:"30px",
        marginBottom: "30px"
      }}>
        <h2 style={{color: "darkgreen"}}>See the difference between the Class Component and the Function Component</h2>

      </div>

     
        <Profile name={"AkashyFunctional"} />
        <ProfileClassComponent name={"AkashayClass"} XYZ="abc" />
      
    </>
  );
};
export default About;
