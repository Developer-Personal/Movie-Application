import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import Rating from './Rating';

const Movie = ({setLoader}) => {

    const [movie, setMovie] = useState([])
    const [searchMovie, setSearchMovie] = useState("")
    const [filterMovie, setFilterMovie] = useState([])
  

    useEffect (() => {
        getMovieName()
    },[])

    const getMovieName = async() => {
       try{
        setLoader(true)
        const response = await fetch ("https://freetestapi.com/api/v1/movies")
        const result = await response.json()
        setMovie(result)
        setFilterMovie(result)
       }
       catch (error) {
        console.log("error -", error.message);
       }
       finally{
        setLoader(false)
       }
    }
    

    const handleChange = (e) => {
        setSearchMovie(e.target.value)
        let updatedMovie = [...movie]
        updatedMovie = updatedMovie.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase()))
        setLoader(true)
        setTimeout(() => {
            setFilterMovie(updatedMovie)
            setLoader(false)
        }, 500);
       
    }


  return (
    <>
    <div style={{display:"flex", justifyContent:"center",marginTop:"20px",position:"relative"}}>
        <input type="text" placeholder='Enter Movie Name' value={searchMovie} onChange={handleChange} style={{width:"50%",borderRadius:"20px",padding:"10px"}} /><FaSearch className='search-bar'/>
       
    </div>
    <div className='movie-list' >
        {
           filterMovie.map(item => (
            <div key={item.id} style={{}}>
                <span style={{fontWeight:"900px"}}>{item.title}</span><span><mark>({item.year})</mark></span>
                <img src={item.poster} alt="" style={{width:"100%"}}/>
                <Rating rating={item.rating}/>
                {
                   item.actors.map(actor => (
                        <p key={actor}>{actor}</p>
                    ))
                }
            </div>
           )) 

        }
    </div>
    </>
  )
}

export default Movie