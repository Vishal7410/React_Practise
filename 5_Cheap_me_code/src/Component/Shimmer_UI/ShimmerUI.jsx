import React from 'react'


const ShimmerUI = () => {
  return (
   
   
    <>
      

    <div className="body_card">

      {Array(10).fill("").map((e, index)=> (

        
         // eslint-disable-next-line react/jsx-key
         <div key={index} className="Cards">
         <div className='Outer_Box'> 
         <div className='first_box'></div>
         <div className='secound_box'></div>
        </div>
        </div>


      ))
      
      }

    </div>
   </>
  
  
  )
}

export default ShimmerUI