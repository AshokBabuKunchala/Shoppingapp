import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!firstName || !lastName || !email || !password) {
      toast.error("Please fill in all fields");
    } else {

       toast.success("SignUp successful!", { autoClose: 2000 });
       setTimeout(() => {
      navigate("/Login");
    }, 2000);
    }
  };

  return (
    <div className="container1">
      <form onSubmit={handleSubmit}>
        <div className="container2">
          <h2>Sign Up</h2>

          <div>
            <label>First Name</label>
            <br />
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <br />
          </div>

          <div>
            <label>Last Name</label>
            <br />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <br />
          </div>

          <div>
            <label>Email</label>
            <br />
            <input
              type="email"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
          </div>

          <button type="submit">Sign Up</button>
          <p>
            Already have an account? <Link to="/Login">Login</Link>
          </p>
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

export default SignUp;
