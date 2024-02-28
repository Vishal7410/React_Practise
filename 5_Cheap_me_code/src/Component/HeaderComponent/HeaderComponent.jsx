import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline";


const Logo = () => (
    <>
      <img
        src="https://foodtech-files.s3-eu-west-2.amazonaws.com/f666015f4d4a2ae28b3ab5d0b0fa9d445a9f65e864f77334fb561f771ca59592"
        className="w-45 h-20"
        alt=""
      />
    
    </>
  );

export const HeaderComponent = () => {
  // const [title, setitle] = useState("FoodZilla")  

  const [isloggedIn, setIsLoggin] = useState(false)

  const isOnline = useOnline();

  useEffect(() => {
    // console.log("useEffect called");
  },[]);
  console.log("render");

  return (
    <>
      <div className= "flex justify-between bg-slate-300 ">
        <Logo />
        
        {/* <h1>{title}</h1> */}

        {/* <button onClick={()=> setitle("food Villa")}>change title</button> */}
        <div className="">
          <ul className=" m-5 flex gap-5 text-xl ">
            
          <li><Link to ={`/`} >Home</Link></li>
           
           <li><Link to ={`/about`} >About</Link></li>
           
           <li><Link to ={`/contactUs`} >ContactUs</Link></li>

           <li><Link to ={`/cart`} >Cart</Link></li>

           <li><Link to ={`/lazyLoad`} >LazyLoad</Link></li>

           <div className=" bg-red-400  rounded-lg  ">
        {isloggedIn?
           <button
           
           onClick={()=>  setIsLoggin(false)}
           >LogOut
           </button>:

           <button
           
           onClick={()=> setIsLoggin(true)}
           
           >Login</button>
            }
        </div>

           <li><h1 >{isOnline ? <p className="bg-green-500">Online</p>: <p className="bg-red-500">Offline</p>}</h1></li>


          </ul>        
        </div>
           {/* use conditional rendering for login and logOut */}
           
        
      </div>
    </>
  );
};
