import React from "react";
import "./ab.css";

export default function AboutJournal() {
  return (
    <>
      <h3
        style={{
          textAlign: "center",
          fontSize: "40px",
          textDecoration: "underline",
          color: "blueviolet",
          marginBottom: "0",
        }}
      >
        About Journal
      </h3>
      <section class="about-us">
        <div class="about">
          <img
            src="https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg"
            class="pic"
            alt=""
          />
          <div class="text">
            <p>
              BODH: BPIT International Journal of Technology and Management
              (BBIJTM), is a Biannual International peer reviewed, scholarly
              research journal, conceptualized in 2015 and indexed in National
              Science library. BBIJTM is the official publication of Bhagwan
              Parshuram Institute of Technology (BPIT) Delhi. It contributes to
              the enhancement of generating the new ideas and perspectives on
              existing research. BBIJTM journal aim to disseminate original
              scientific research and knowledge in the field of all
              interdisciplinary streams of Technology, and Management. It
              provides a platform for students, academicians, industry, and
              research scholars from all over the world to contribute towards
              the enhancement of Technology, and Management research.
            </p>

            <p>
              Authors are invited to submit their research papers for
              publication in the forthcoming issues. A peer review process is
              performed on all the manuscripts submitted. The publication of a
              manuscript is available for free. Through this journal, Bhagwan
              Parshuram Institute of Technology (BPIT) Delhi is determined to
              improve the overall research impact.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
