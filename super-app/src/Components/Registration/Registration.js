import React, { useState } from 'react'
import './Registration.css'
function Registration() {
    const[error,setError]=useState(true)
const[name,setName]=useState('')
const[username,setUsername]=useState('')
const[email,setEmail]=useState('')
const[mobile,setMobile]=useState('')
const[checkbox,setCheckbox]=useState(false)

    


const handleClick=(e)=>{
e.preventDefault()
if(name.length===0 || username.length===0 || email.length===0 || mobile.length===0 ){
    setError(true)
}
else{
    setError(false)
    
}
localStorage.setItem('name',name)
localStorage.setItem('username',username)
localStorage.setItem('email',email)
localStorage.setItem('mobile',mobile)
localStorage.removeItem('form')
}

const handleCheck=(e)=>{
e.preventDefault()
    setCheckbox(!checkbox)
}

  return (
    <div className='container'>
        <div className="box1">
        <img src={require("./1.png")} alt="" srcset="" />
        <div className='desc'>
            <h1>Discover new things on Superapp</h1>
        </div>
        </div>
        <div className="box2">
            <h1>Super App</h1>
            <span className='span1'>Create your new account</span>

            <div className="details">

                <div className="item">
            <input className='detail' type="text" placeholder='Name' onChange={e=>setName(e.target.value)}/>
            {error&&name.length<=0?<label htmlFor=''>Field is required</label>:''}
                </div>

                <div className="item">
            <input className='detail' type="text" placeholder='Username' onChange={e=>setUsername(e.target.value)}/>
            {error&&username.length<=0?<label htmlFor=''>Field is required</label>:''}
                </div>

                <div className="item">
                <input className='detail' type="text" placeholder='Email' onChange={e=>setEmail(e.target.value)}/>
                {error&&email.length<=0?<label htmlFor=''>Field is required</label>:''}
                </div>

                <div className="item">
                <input className='detail' type="text" placeholder='Mobile' onChange={e=>setMobile(e.target.value)}/>
                {error&&mobile.length<=0?<label htmlFor=''>Field is required</label>:''}
                </div>
            </div>

            <div className='consent'>
                <div className="check">
            <input className='pointer' type="checkbox" required  onClick={handleCheck}/>
            <span className='span2'>Share my registration data with Superapp</span>
                </div>
            {checkbox?'':<label htmlFor=''>Check this box if you want to proceed</label>}
            </div>


            <div className="button">
            <button onClick={handleClick}>SIGN UP</button>
            </div>

            <span className='span3'>By clicking on Sign up. you agree to Superapp <strong>Terms and Conditions of Use</strong></span>
            <div className="tnc">
            <span className='span3'>To learn more about how Superapp collects, uses, 
            shares and protects your personal data please head Superapp <strong>Privacy Policy</strong></span>
            </div>

            
        </div>
    </div>
  )
}

export default Registration