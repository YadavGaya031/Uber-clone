import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserRegister = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})
  const [fullName, setFullName] = useState({})
  const submitHandler = async (e) => {
    e.preventDefault();
    // setFullName(firstName + " " + lastName);
    setUserData({
      // fullName: fullName,
      fullName: {
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password,
    })
    // console.log(userData);
    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
  }
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-6 "
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">What's your name</h3>
          <div className="flex gap-4 mb-5">
          <input
            value={firstName}
            onChange={(e)=>{
              setFirstName(e.target.value)
            }}
            className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
            type="text"
            required
            placeholder="First Name"
          />
          <input
            value={lastName}
            onChange={(e)=>{
              setLastName(e.target.value)
            }}
            className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
            type="text"
            required
            placeholder="Last Name"
          />
          </div>
          <h3 className="text-lg font-medium mb-2">What's your Email</h3>
          <input
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            required
            placeholder="Email@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            required
            placeholder="Password"
          />
          <button className="bg-[#111111] text-white rounded-lg font-semibold mb-3 px-4 py-2 border w-full text-lg placeholder:text-base">
            Login
          </button>
        </form>
        <p className="text-center">
          Already have a account?{" "}
          <Link to="/user-login" className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>
      <div className="text-sm text-zinc-500 leading-tight ">
        <p>By proceeding, you consent to get calls, WhatsApp or SMS
          messages, including by automated means, from UBER and
          its affiliates to the email provided.
        </p>
      </div>
    </div>
  );
};

export default UserRegister;
