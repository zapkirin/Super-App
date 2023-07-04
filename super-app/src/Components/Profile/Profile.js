import React from 'react'
import './Profile.css'
function Profile() {
    const selectedGenre=JSON.parse(localStorage.getItem('selectedGenres'))
  return (
    <div className='containerPro'>
        <div className="proLeft">
            <div className="profile">
                <div className="proImg">
                    <img src={require("./image 14.png")} alt="" />
                </div>
                <div className="proInfo">
                    <h2>{localStorage.getItem('name')}</h2>
                    <h2>{localStorage.getItem('email')}</h2>
                    <h1>{localStorage.getItem('username')}</h1>
                    <div className="categ">
                    {selectedGenre.map((genre)=>(
                        
                        <div className='categChoices' key={genre}>{genre}</div>
                    ))}
                    </div>

                </div>
            </div>
            <div className="weather">

            </div>
        </div>
        <div className="proright">

        </div>
    </div>
  )
}

export default Profile