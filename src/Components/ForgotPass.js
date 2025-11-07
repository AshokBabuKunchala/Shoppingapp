import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ForgotPass() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email) {
      toast.error("Please enter your email address");
    } else {
      toast.success(`Password reset link sent to: ${email}`,{ autoClose: 2000 });
       setTimeout(() => {
      navigate("/Reset");
    }, 2000);
      
    }
  };

  return (
    <div className="container1">
      <form onSubmit={handleSubmit}>
        <div className="container2">
          <h2>Forgot Password</h2>

          <div>
            <label>Email</label>
            <br />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your registered email"
            />
            <br />
          </div>

          <button type="submit">Send Reset Link</button>

          <p>
            Remembered your password? <Link to="/Reset">Login</Link>
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

export default ForgotPass;
