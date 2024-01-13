import { useState } from "react";


const Logo = () => (
    <>
      <img
        src="https://foodtech-files.s3-eu-west-2.amazonaws.com/f666015f4d4a2ae28b3ab5d0b0fa9d445a9f65e864f77334fb561f771ca59592"
        className="Logo"
        alt=""
      />
    
    </>
  );

export const HeaderComponent = () => {
  const [title, setitle] = useState("FoodZilla")
  const [isloggedIn, setIsLoggin] = useState(false)
  return (
    <>
      <div className="Header">

        <Logo />
        
        <h1>{title}</h1>

        <button onClick={()=> setitle("food Villa")}>change title</button>
        <div className="nav-items">
          <ul>
            <li>
              <a href="#Home"></a>Home
            </li>
            <li>
              <a href="#About"></a>About
            </li>
            <li>
              <a href="#Contact"></a>Contact Us
            </li>
            <li>
              <a href="#Cart"></a>Cart
            </li>
          </ul>

          
        </div>
           {/* use conditional rendering for login and logOut */}

           {isloggedIn?
           <button
           className="Logout_btn"
           onClick={()=>  setIsLoggin(false)}
           >LogOut
           </button>:

           <button
           className="login_btn"
           onClick={()=> setIsLoggin(true)}
           
           >Login</button>
}
      </div>
    </>
  );
};
