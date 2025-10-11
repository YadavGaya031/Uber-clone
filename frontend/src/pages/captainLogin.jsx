import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");


  const [captainData, setcaptainData] = useState({})


  const submitHandler = async (e)=>{
    e.preventDefault();
    // console.log(email, password);
    setcaptainData({
      email: email,
      password: password
    })
    // console.log(captainData)
    setEmail('');
    setpassword('');
  }
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
      <img
          className="w-20 mb-3"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt=""
        />
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
          <h3 className="text-lg font-medium mb-2">What's your Email</h3>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            required
            placeholder="Email@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            required
            placeholder="Password"
          />
          <button className="bg-[#111111] text-white rounded-lg font-semibold mb-3 px-4 py-2 border w-full text-lg placeholder:text-base">
            Login
          </button>
        </form>
        <p className="text-center">
          Join a fleet?{" "}
          <Link to="/captain-register" className="text-blue-600">
            Register as a captain
          </Link>
        </p>
      </div>
      <div>
        <Link to='/user-login' className="bg-[#d5622d] flex items-center justify-center text-white rounded-lg font-semibold mb-7 px-4 py-2 border w-full text-lg placeholder:text-base">
          Sign in as User
        </Link>
      </div>
    </div>
  )
}

export default CaptainLogin