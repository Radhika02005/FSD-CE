import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function Registartion() {
  const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState(""); 
    function getData(e){
        e.preventDefault();
        const data ={name, email, password
        };
    }

  return (
    <div>
      <h1>Register</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
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
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registartion;