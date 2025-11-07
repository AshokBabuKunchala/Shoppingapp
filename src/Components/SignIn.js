import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "./Authenticate";

function SignIn() {
  const navigate = useNavigate();
  const { handleLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      toast.error("Please enter email and password");
    } else {
      toast.success("Signin successful!", { autoClose: 2000 });
        setTimeout(() => {
      handleLogin();
    }, 2000);

    }
  };

  return (
    <div className="container1">
      <form onSubmit={handleSubmit}>
        <div className="container2">
          <h2>SignIn</h2>

          <div>
            <label>Email</label>
            <br />
            <input
              type="email"
              placeHolder= "Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
          </div>

          <div>
            <label>Password</label>
            <br />
            <input
              type="password"
              placeHolder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
          </div>

          <button type="submit">Login</button>
          <p>
            Forgot Password?<Link to="/Forgotpass">click here</Link>
          </p>
          
           <button  style={{backgroundcolor: "green"}} type="submit"> Don't have an account? <Link to="/SignUp">Sign up</Link></button>
           <button type="submit">Sign in with google</button>
          
        </div>
      </form>
       {/* Toast Container */}
            <ToastContainer
              position="top-center"
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
    </div>
  );
}

export default SignIn;
