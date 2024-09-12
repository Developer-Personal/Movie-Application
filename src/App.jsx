import React, { useState } from 'react'
import Movie from './Movie'
import Loader from './Loader'



const App = () => {

  const [loader, setLoader] = useState(false)
  
  return (
    <div>
     <Movie setLoader={setLoader}/>
     {loader && <Loader/>}
    </div>
  )
}

export default App