import React from 'react'
import { FOOD_IMG_CDN } from '../Contant/Contant'

const BiryaniCards = ({
    // eslint-disable-next-line react/prop-types
    imageId,
    // eslint-disable-next-line react/prop-types
    accessibility,
    action,
    
    

}) => {
  return (
    <>

    <div className='w-[200px] h-[80px] flex  ' >

        <img src={FOOD_IMG_CDN + imageId} 
        alt="Img" 
        
        
        />
         <h1 className='text-center'>{action?.text}</h1> <br />
        <h1 className='text-center'>{accessibility?.altText}</h1><br />
        <h1 className='text-center'>{accessibility?.altTextCta}</h1>
       
       
    </div>
    
    </>
  )
}

export default BiryaniCards