import { useState } from "react";

const Profile = (props) => {

    const [count, setCount] = useState(0); 
    // set count always usese in Button or Onchange event
   // Write Using the CallBack arrow function
   // Also any updation element like setCount and React always track It.

   
    const [count2, setCount2] = useState(0);

  return (
    <>
      <div
        style={{
          backgroundColor: "aquamarine",
          marginBottom: "10px",
        }}
      >
        <h1>This is the function component And it Props</h1>
        <h2> Name: {props.name}</h2>
        <h2>count: {count}</h2>
        <h2>count2: {count2}</h2>
        
        <button onClick={() => {
            setCount(count+1)
            setCount2(2)
            }}>Click Me</button>

      </div>
    </>
  );
};

export default Profile;
