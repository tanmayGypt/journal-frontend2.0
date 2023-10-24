import React from "react";

import "./form.css";

function FaqForm() {
  return (
    <>
      <div class="login-container31">
        <div class="login-form31">
          <h2>Login</h2>
          <form>
            <div class="input-container31">
              <input
                type="email"
                id="email"
                class="input31"
                placeholder="Email"
              />
            </div>
            <div class="input-container31">
              <input
                type="password"
                id="password"
                class="input31"
                placeholder="Password"
              />
            </div>
            <button type="submit" class="submit-button31">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default FaqForm;
