import React from 'react'
import { FaStar } from "react-icons/fa6";

const Rating = ({rating}) => {


    const wholeRating = rating.toFixed(0)

    const forYellowStar = wholeRating
    const forBlackStar = 10 - wholeRating
     

  return (
    <>
    {
        Array.from({ length: forYellowStar }).map((_, index) => <FaStar style={{color:"black"}}/>)
    }
    {
        Array.from({ length: forBlackStar }).map((_, index) => <FaStar style={{color:"gray"}}/>)
    }
    
    </>
  )
}

export default Rating