// import  { useEffect, useState } from 'react'

// const useOnline = () => {
//   const [isOnline, setIsOnline] = useState(true);

//   useEffect(()=>{
//     window.addEventListener("online", ()=>{
//         setIsOnline(true)
//     });
//     window.addEventListener("offline", ()=>{
//         setIsOnline(false)
//     });
//   },[]);
//   return isOnline
// }

// export default useOnline

/***
 *These Type of code look write by the newbiew here you can write code like pro

 here what happen when we create the eventlistener it catch some memory here what you do you have 
 to do the clear or remove these eventlistener the catch and how you do These follow as given below.
 here first created handle a toggle 

 */

 
 import React, { useEffect, useState } from 'react'
 
 const useOnline = () => {
  const[isOnline, setIsOnline] = useState(true);

  useEffect(()=> {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);


 
   return ()=> {
    // eslint-disable-next-line no-undef
    window.removeEventListener("online", handleOnline)
    // eslint-disable-next-line no-undef
    window.removeEventListener("offline", handleOffline)
   }
  },[]);

  return isOnline;
 }
 
 export default useOnline