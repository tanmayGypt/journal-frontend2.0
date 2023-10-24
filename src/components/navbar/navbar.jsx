import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <header id="nav16">
      <nav id="nestednav16">
        <ul className="navigation-menu16">
          <li>
            <a href="/">Home</a>
          </li>
          <li className="extends16">
            <a href="google.co.in">Board</a>
            <ul>
              <li className="extends16">
                <a href="/AdvisoryBoard">Advisory Board</a>

                <li className="extends16">
                  <a href="/EditorialBoard">Editorial Board</a>
                </li>
              </li>
            </ul>
          </li>

          <li className="extends16">
            <a href="google.co.in">Author</a>
            <ul>
              <li className="extends16">
                <a href="/AuthorGuidelines">Author Guidelines</a>

                <li className="extends16">
                  <a href="/SubmitMenuscript">Submit Menuscript</a>
                </li>
              </li>
            </ul>
          </li>
          <li>
            <a href="/Aim&Scope">Aim & Scope</a>
          </li>
          <li>
            <a href="/Policy">Policy</a>
          </li>
          <li>
            <a href="/Issues">Issues</a>
          </li>
          <li className="extends16">
            <a href="google.co.in">Services</a>
            <ul>
              <li className="extends16">
                <a href="google.co.in">Papers</a>
                <ul>
                  <li>
                    <a href="/CallForPapers">Call For Paper</a>
                  </li>
                  <li>
                    <a href="google.co.in">Paper Template</a>
                  </li>
                </ul>
              </li>
              <li className="extends16">
                <a>Peer Review</a>
                <ul>
                  <li>
                    <a href="/PeerReview">Peer Review Process</a>
                  </li>
                  <li>
                    <a href="/joinReviewer">Join As Reviewer</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="extends16">
            <a href="google.co.in">About Us</a>
            <ul>
              <li>
                <a href="/Faqs">FAQ's</a>
              </li>
              <li>
                <a href="/addContact">Contact Us</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
