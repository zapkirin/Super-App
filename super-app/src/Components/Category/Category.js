import React, { useEffect, useState } from 'react'
import './Category.css'
import { Link } from 'react-router-dom';
function Category() {
    const [count, setCount] = useState(0)
    const [selectedGenres, setSelectedGenres] = useState([]);


    useEffect(() => {
        const storedGenres = localStorage.getItem('selectedGenres');
        if (storedGenres) {
          setSelectedGenres(JSON.parse(storedGenres));
        }
      }, []);
    
      useEffect(() => {
        localStorage.setItem('selectedGenres', JSON.stringify(selectedGenres));
      }, [selectedGenres]);

    const handleClick = (e) => {
        const genre = e.target.id;
  if (selectedGenres.includes(genre)) {
    setCount((prevCount) => prevCount - 1);
    setSelectedGenres((prevGenres) =>
        prevGenres.filter((g) => g !== genre)
      );
  } 
  else {
    if (count < 9) {
      setCount((prevCount) => prevCount + 1);
      setSelectedGenres((prevGenres) => [...prevGenres, genre]);
    }
}
    }

    const handleRemoveGenre = (genre) => {
        setCount((prevCount) => prevCount - 1);
        setSelectedGenres((prevGenres) => prevGenres.filter((g) => g !== genre));
      };
  return (
    <div className='container'>
        <div className="box1c">
            <h2>Super App</h2>
            <div className="choice">
            <h1>Choose your entertainment category</h1>
            </div>
            <div className="choices">
          {selectedGenres.map((genre) => (
            <button onClick={()=>handleRemoveGenre(genre)} className='genres' key={genre}>{`${genre}`}   X</button>
          ))}
        </div>
          {count < 3 && <label>⚠️ Minimum 3 categories required</label>}
        </div>
        <div className="box2c">
        
            <div className="choice1 items">
                <div id='Action' onClick={handleClick} className="grid-item action">
                    <h3>Action</h3>
                    <img className='images' src={require("./action.jpg")} alt="" />
                </div>
                <div id='Drama' onClick={handleClick} className="grid-item drama">
                    <h3>Drama</h3>
                    <img className='images' src={require("./image 3.jpg")} alt="" />
                </div>
                <div id='Romance' onClick={handleClick} className="grid-item romance">
                    <h3>Romance</h3>
                    <img className='images' src={require("./image 4.png")} alt="" />
                </div>
            </div>
        
        <div className="choice2 items">
            <div id='Thriller' onClick={handleClick} className="grid-item thriller">
                <h3>Thriller</h3>
                <img className='images' src={require("./image 6.png")} alt="" />
            </div>
            <div id='Western' onClick={handleClick} className="grid-item western">
            <h3>Western</h3>    
            <img className='images' src={require("./image 7.png")} alt="" />
            </div>
            <div id='Horror' onClick={handleClick} className="grid-item horror">
                <h3>Horror</h3>
                <img className='images' src={require("./image 8.png")} alt="" />
            </div>
        </div>

        <div className="choice3 items">
            <div id='Fantasy' onClick={handleClick} className="grid-item fantasy">
                <h3>Fantasy</h3>
                <img className='images' src={require("./image 9.png")} alt="" />
            </div>
            <div id='Music' onClick={handleClick} className="grid-item music">
                <h3>Music</h3>
                <img className='images' src={require("./lala2.jpg")} alt="" />
            </div>
            <div id='Fiction' onClick={handleClick} className="grid-item fiction">
                <h3>Fiction</h3>
                <img className='images' src={require("./image 11.png")} alt="" />
            </div>
            
        </div>
        <Link to='/profile'>
        <button className='categButton'>Next Page </button>

        </Link>
        </div>
    </div>
  )
}

export default Category