import React from 'react';
import './login.css';

export default function LogIn() {

    // onClick(e) {
    //     e.preventDefault()
    // };

    return (
      <div className="full-screen-container">
        <div className="login-container">
          <h3 className="login-title">Welcome</h3>
          <form>
            <div className="input-group">
              <label>Email</label>
              <input type="email" />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input type="password" />
            </div>
            {/* <button type="submit" className="login-button">Sign In</button> */}
            <button>
              <span>Sign In</span>
              <svg xmlns="http://www.w3.org/2000/svg"
              width="24"
              height='24'
              viewBox="0 0 24 24"
              >
                  <path d="M0 11c2.761.575 6.312 1.688 9 3.438 3.157-4.23 8.288-8.187 15-11.438-5.861 5.775-10.711 12.328-14 18.917-2.651-3.766-5.547-7.271-10-10.917z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    );
}
