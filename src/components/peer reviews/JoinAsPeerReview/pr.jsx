import React, { useState } from "react";
import "./pr.css";
import Form from "./reviewForm";

export default function Contact() {
  const [Truth, SetTruth] = useState(false);
  return (
    <>
      <h3 id="peerReviewHeading">Join as Peer Review</h3>

      <button class="button-25" onClick={() => SetTruth(!Truth)}>
        Join as Reviewer
      </button>
      {Truth ? <Form /> : null}
      {!Truth ? (
        <div class="container">
          <section>
            <h2 className="PeerHeading">Responsibilities of Reviewers</h2>
            <div>
              <ul className="ul26">
                <li className="li26">
                  Examine in detail the assigned articles for review by Chief
                  Editor or Publisher.
                </li>
                <li className="li26">
                  Review a minimum of 3 articles in a calendar year.
                </li>
                <li className="li26">
                  Examine the manuscript as per author guidelines.
                </li>
                <li className="li26">
                  Examine the aim and objectives of the work carried out.
                </li>
                <li className="li26">
                  Check the correctness of the conclusions, results, and
                  recommendations along with references.
                </li>
                <li className="li26">
                  Perform copyediting and proofreading in accordance with
                  publishing standards of the manuscripts, especially grammar,
                  punctuation, and spelling.
                </li>
                <li className="li26">
                  Ensure the coverage areas of the manuscript are relevant to
                  the scopes of journals. Check for plagiarism-related issues,
                  if any.
                </li>
                <li className="li26">
                  Provide suggestions based on the structure of the manuscript.
                  There is no limit for the maximum inputs in general.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="PeerHeading">Benefits of Reviewers</h2>
            <div>
              <ul className="ul26">
                <li className="li26">
                  Get prestigious professional recognition and a certificate of
                  appointment as a reviewer.
                </li>
                <li className="li26">
                  Receive a 50% waiver for your own manuscripts as the main
                  author/corresponding author in any of our journals.
                </li>
                <li className="li26">
                  Enhance your knowledge and quality through various research
                  work.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="PeerHeading">Agreement</h2>
            <div>
              <ul className="ul26">
                <li className="li26">
                  The position of a Reviewer is honorary, and no remuneration
                  will be provided for the job. However, the publisher can
                  provide special allowances for quality services.
                </li>
                <li className="li26">
                  This agreement may be terminated at any time due to a lack of
                  mutual understanding on common aspects, as per the policies of
                  the publisher, or due to repetitive unsatisfactory performance
                  of the assigned work.
                </li>
                <li className="li26">
                  A Reviewer agrees to display their name, photograph, and other
                  contact details on the website of the site and hardcopy of the
                  journal.
                </li>
                <li className="li26">
                  A Reviewer agrees to maintain publication ethics and will
                  never disclose the author's name or contact details to anyone
                  except the publisher.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="PeerHeading">Eligibility of Reviewer</h2>
            <div>
              <ul className="ul26">
                <li className="li26">
                  Should be an expert with experience in the specialist field
                  related to the journal.
                </li>
                <li className="li26">
                  Should have a minimum of 2 years of professional experience in
                  research and publication with at least 5 publications in
                  peer-reviewed journals.
                </li>
                <li className="li26">
                  Preferences will be given to individuals who have the
                  enthusiasm to undertake the reviewer role, our Fellow members,
                  or Life Members.
                </li>
              </ul>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}
