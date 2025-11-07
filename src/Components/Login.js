import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check for empty fields
    if (!email || !password) {
      toast.error("Please enter both email and password");
      return;
    }

    // Email validation
    if (!email.includes("@") || !email.includes(".")) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Password validation
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return;
    }

    // All validations pass
    toast.success("Login successful!", { autoClose: 2000 });

    // Navigate after a small delay to show toast
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="container1">
      <form onSubmit={handleSubmit}>
        <div className="container2">
          <h2>Login</h2>

          <div>
            <label>Email</label>
            <br />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
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
              placeholder="Enter your password"
            />
            <br />
          </div>

          <button type="submit">Login</button>

          <p>
            Forgot your password? <Link to="/ForgotPass">Reset here</Link>
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

export default Login;
