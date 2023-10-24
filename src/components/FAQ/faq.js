import "./faq.css";
import FaqForm from "../faq form/faq";
import { useState } from "react";
function Faq() {
  const [Faqs, SetFaq] = useState(false);
  const items = document.querySelectorAll(".accordion button");

  function toggleAccordion() {
    const itemToggle = this.getAttribute("aria-expanded");

    for (let i = 0; i < items.length; i++) {
      items[i].setAttribute("aria-expanded", "false");
    }

    if (itemToggle === "false") {
      this.setAttribute("aria-expanded", "true");
    }
  }

  items.forEach((item) => item.addEventListener("click", toggleAccordion));
  return (
    <>
      <button class="button-15" onClick={() => SetFaq(!Faqs)}>
        Ask a Question
      </button>
      <br />
      {Faqs ? <FaqForm /> : null}
      <br />

      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="accordion">
          <div className="accordion-item">
            <button id="accordion-button-1" aria-expanded="false">
              <span className="accordion-title">
                Why is the moon sometimes out during the day?
              </span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            <div className="accordion-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Elementum sagittis vitae et leo duis ut. Ut tortor pretium
                viverra suspendisse potenti.
              </p>
            </div>
          </div>
          <div className="accordion-item">
            <button id="accordion-button-2" aria-expanded="false">
              <span className="accordion-title">Why is the sky blue?</span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            <div className="accordion-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Elementum sagittis vitae et leo duis ut. Ut tortor pretium
                viverra suspendisse potenti.
              </p>
            </div>
          </div>
          <div className="accordion-item">
            <button id="accordion-button-3" aria-expanded="false">
              <span className="accordion-title">
                Will we ever discover aliens?
              </span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            <div className="accordion-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Elementum sagittis vitae et leo duis ut. Ut tortor pretium
                viverra suspendisse potenti.
              </p>
            </div>
          </div>
          <div className="accordion-item">
            <button id="accordion-button-4" aria-expanded="false">
              <span className="accordion-title">
                How much does the Earth weigh?
              </span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            <div className="accordion-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Elementum sagittis vitae et leo duis ut. Ut tortor pretium
                viverra suspendisse potenti.
              </p>
            </div>
          </div>
          <div className="accordion-item">
            <button id="accordion-button-5" aria-expanded="false">
              <span className="accordion-title">How do airplanes stay up?</span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            <div className="accordion-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Elementum sagittis vitae et leo duis ut. Ut tortor pretium
                viverra suspendisse potenti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq;
