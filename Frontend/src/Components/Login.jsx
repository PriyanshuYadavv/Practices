import React from 'react'
import './Login.css';
const Login = () => {
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
        paddingTop: 50,
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
      }}
    >
      Login
    </h2>
    <form>
      <input
        className=" inp mt-4 w-75 d-flex mx-auto"
        type="text"
        placeholder="Name"
        required=""
      />
      <input
        className="inp mt-4 w-75 d-flex mx-auto"
        type="email"
        placeholder="Email"
        required=""
      />
      <input
        className="inp mt-4 w-75 d-flex mx-auto"
        type="password"
        placeholder="Password"
        required=""
      />
      <button className="mt-3 mb-3 btn btn-warning d-flex mx-auto">
        Login
      </button>
      <p style={{ textAlign: "center", marginTop: 10 }}>
        Don't have an account?
        <a href="#" className="Signup-link">
          {" "}
          Signup{" "}
        </a>
      </p>
    </form>
  </div>
</div>

      </div>
  )
}

export default Login