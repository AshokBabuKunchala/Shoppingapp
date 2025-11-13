import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "./Authenticate";
import imp from "../Assets/imp.jpg";
function SignInInline() {
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
    <div style={{
  backgroundImage: `url(${imp})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <form onSubmit={handleSubmit} style={{
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        width: '400px',
        minHeight: '400px'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>SignIn</h2>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: '100%',
              padding: '20px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '20px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <button type="submit" style={{
          width: '100%',
          height: '50px',
          padding: '10px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginBottom: '10px'
        }}> Login </button>
        <p style={{ textAlign: 'center', marginBottom: '10px' }}>
          Forgot Password?<Link to="/Forgotpass" style={{ color: '#007bff' }}>click here</Link>
        </p>

        <button style={{
          width: '100%',
          height: '50px',
          padding: '10px',
          backgroundColor: 'green',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginBottom: '10px'
        }} type="submit"> Don't have an account? <Link to="/SignUp" style={{ color: 'white' }}>Sign up</Link></button>
        <button type="submit" style={{
          width: '100%',
          height: '50px',
          padding: '10px',
          backgroundColor: '#dc3545',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>Sign in with google</button>
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

export default SignInInline;
