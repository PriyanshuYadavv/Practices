import React from 'react'
import './Signup.css';

const Signup = () => {
  return (
    <div>
  <div className="conatainer d-flex justify-content-center align-items-center vh-100">
    <div className=" card w-25">
      <h2
        className="txt"
        style={{
          fontWeight: "bolder",
          fontSize: 40,
          textAlign: "center",
          paddingTop: 70,
          fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
        }}
      >
        Signup
      </h2>
      <form>
        <input
          className=" inp mt-5 w-75 d-flex mx-auto"
          type="text"
          placeholder="Enter your full name"
          required=""
        />
        <input
          className="inp mt-4 w-75 d-flex mx-auto"
          type="email"
          placeholder="Enter your email"
          required=""
        />
        <input
          className="inp mt-4 w-75 d-flex mx-auto"
          type="password"
          placeholder="Create password"
          required=""
        />
        <input
          className="inp mt-4 w-75 d-flex mx-auto"
          type="password"
          placeholder="Confirm password"
          required=""
        />
        <button className="mt-4 mb-3 btn btn-warning d-flex mx-auto">
          Signup
        </button>
        <p style={{ textAlign: "center", marginTop: 10 }}>
          Already have an account?
          <a href="#" className="Login-link">
            {" "}
            Login{" "}
          </a>
        </p>
      </form>
    </div>
  </div>
</div>

  )
}

export default Signup