import React from "react"
import Profile from "./Profile";
import ProfileClassComponent from "./ProfileClass";
class About extends React.Component{
 
  constructor(props){
    super(props);
    console.log("About-constructor");
  }

  componentDidMount(){
    console.log("parent-About ComponentDidMount call");
  }
  

  render(){
    console.log("About-render");

    return(
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
    )

  }
}

export default About