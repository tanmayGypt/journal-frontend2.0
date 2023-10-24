import React from "react";

import "./faq.css";

function FaqForm() {
  return (
    <>
      <div className="container">
        <div className="text">Contact us Form</div>
        <form>
          <div className="form-row">
            <div className="input-data">
              <input type="text" name="firstName" required />
              <div className="underline"></div>
              <label htmlFor="firstName">First Name</label>
            </div>
            <div className="input-data">
              <input type="text" name="lastName" required />
              <div className="underline"></div>
              <label htmlFor="lastName">Last Name</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data">
              <input type="text" name="emailAddress" required />
              <div className="underline"></div>
              <label htmlFor="emailAddress">Email Address</label>
            </div>
            <div className="input-data">
              <input type="text" name="websiteName" required />
              <div className="underline"></div>
              <label htmlFor="websiteName">Website Name</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data textarea">
              <textarea rows="8" cols="80" name="message" required></textarea>
              <br />
              <div className="underline"></div>
              <label htmlFor="message">Write your message</label>
              <br />
              <div className="form-row submit-btn">
                <div className="input-data">
                  <div className="inner"></div>
                  <input type="submit" value="Submit" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default FaqForm;
