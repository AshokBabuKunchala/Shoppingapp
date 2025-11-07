import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Reset() {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!newPassword || !confirmPassword) {
      toast.error("Please fill in both fields");
    } else if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
       toast.success("Password has been Reset successful!", { autoClose: 2000 });
       setTimeout(() => {
      navigate("/Login");
    }, 2000);

    }
  };

  return (
    <div className="container1">
      <form onSubmit={handleSubmit}>
        <div className="container2">
          <h2>Reset Password</h2>

          <div>
            <label>New Password</label>
            <br />
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <br />
          </div>

          <div>
            <label>Confirm Password</label>
            <br />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <br />
          </div>

          <button type="submit">Reset Password</button>

          <p>
            Remembered your password? <Link to="/Login">Login</Link>
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

export default Reset;
