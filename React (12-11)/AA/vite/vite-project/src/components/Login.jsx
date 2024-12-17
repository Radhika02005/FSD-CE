import React from 'react'

const Login = () => {
  return (
    <div>
      <div>Login</div>
      <h1>Register</h1>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="form-check">
          {/* Additional elements like checkbox can go here */}
        </div>
      </form>
    </div>
  )
}

export default Login