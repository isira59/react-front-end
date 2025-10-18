import React, { useState, useEffect } from "react";
import "../styles/Login.css";
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [currentImg, setCurrentImg] = useState(0);
  const images = [img1, img2, img3];

  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImg((prev) => (prev + 1) % images.length);
  }, 3000);
  return () => clearInterval(interval);
}, [images.length]);


  return (
    <div className="login-page">
      <div className="login-container">
        {/* Left: Form */}
        <div className="form-side">
          {isLogin ? (
            <div className="form-box">
              <h2>Login</h2>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <button>Login</button>
              <p>
                Don’t have an account?{" "}
                <span onClick={() => setIsLogin(false)}>Sign Up</span>
              </p>
            </div>
          ) : (
            <div className="form-box">
              <h2>Sign Up</h2>
              <input type="text" placeholder="Username" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Sign Up</button>
              <p>
                Already have an account?{" "}
                <span onClick={() => setIsLogin(true)}>Login</span>
              </p>
            </div>
          )}
        </div>

        {/* Right: Image slideshow */}
        <div className="image-side">
          <img src={images[currentImg]} alt="Animals" className="slide-img" />
        </div>
      </div>
    </div>
  );
};

export default Login;
