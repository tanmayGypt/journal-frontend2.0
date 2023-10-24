import React, { useState } from "react";
import "./contact.css";
import Form1 from "./contactform";
export default function Contact() {
  const [Truth, SetTruth] = useState(false);
  return (
    <>
      <div class="mycardcontainer">
        <h3 id="contactheading">Contact Us</h3>
        <button class="button-25" onClick={() => SetTruth(!Truth)}>
          Add Contact
        </button>
        {!Truth ? (
          <div class="cards">
            <div class="card-container">
              <img
                class="round"
                src="https://randomuser.me/api/portraits/women/79.jpg"
                alt="user"
              />
              <h3 class="h3">
                <div className="ContactHead">Name:</div> Payal Pahwa
              </h3>
              <h3 class="h3">
                <div className="ContactHead">Position:</div> Editor in Chief
              </h3>
              <h3 class="h3">
                <div className="ContactHead">BODH:</div> BPIT International
                Journal of Technology and Management
              </h3>
              <h3 class="h3">
                <div className="ContactHead">Designation:</div>Principal
              </h3>
              <h3 class="h3">
                <div className="ContactHead">Institute:</div>Bhagwan Parshuram
                Institute of Technology PSP-4, Dr KN Katju Marg, Sector 17,
                Rohini, New Delhi, Delhi 110089
              </h3>
              <h3 class="h3">
                <div className="ContactHead">Email:</div>{" "}
                principal@bpitindia.com
              </h3>
              <h3 class="h3">
                <div className="ContactHead">Phone:</div>(011) 2757 2900
              </h3>
            </div>
          </div>
        ) : null}

        {Truth ? <Form1 /> : null}
      </div>
    </>
  );
}
