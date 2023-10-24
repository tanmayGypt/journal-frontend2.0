import React from "react";

import "./smf.css";

function FaqForm() {
  return (
    <>
      <div className="container">
        <div className="text">Submit Manuscript</div>
        <form>
          <div className="form-row">
            <div className="input-data">
              <input type="text" name="firstName" required />
              <div className="underline"></div>
              <label htmlFor="firstName">Author 1</label>
            </div>
            <div className="input-data">
              <input type="text" name="lastName" required />
              <div className="underline"></div>
              <label htmlFor="lastName">Author 2</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data">
              <input type="text" name="emailAddress" required />
              <div className="underline"></div>
              <label htmlFor="emailAddress">Author 3</label>
            </div>
            <div className="input-data">
              <input type="text" name="websiteName" required />
              <div className="underline"></div>
              <label htmlFor="websiteName">Author 4</label>
            </div>
          </div>

          <div className="form-row">
            <div className="input-data textarea">
              <input type="text" name="firstName" required />
              <br />
              <div className="underline"></div>
              <label htmlFor="message">City with State / Province</label>
              <br />
              <div className="form-row submit-btn"></div>
            </div>
          </div>

          <div className="form-row">
            <div className="input-data textarea">
              <input type="text" name="firstName" required />
              <br />
              <div className="underline"></div>
              <label htmlFor="message">Address</label>
              <br />
            </div>
          </div>

          <div className="form-row">
            <div className="input-data textarea">
              <input type="text" name="firstName" required />
              <br />
              <div className="underline"></div>
              <label htmlFor="message">City with State / Province</label>
              <br />
              <div className="form-row submit-btn"></div>
            </div>
          </div>

          <div className="form-row">
            <div className="input-data textarea">
              <input type="text" name="firstName" required />
              <br />
              <div className="underline"></div>
              <label htmlFor="message">Country</label>
              <br />
            </div>
          </div>

          <div className="form-row">
            <div className="input-data textarea">
              <input type="text" name="firstName" required />
              <br />
              <div className="underline"></div>
              <label htmlFor="message">Title of Manuscript</label>
              <br />
              <div className="form-row submit-btn"></div>
            </div>
          </div>

          <div className="form-row">
            <div className="input-data textarea">
              <input type="text" name="firstName" required />
              <br />
              <div className="underline"></div>
              <label htmlFor="message">Area of Research</label>
              <br />
              <div className="form-row submit-btn">
                <div className="input-data"></div>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="input-data textarea">
              <input type="text" name="firstName" required />
              <br />
              <div className="underline"></div>
              <label htmlFor="message">Abstract</label>
              <br />
            </div>
          </div>

          <div className="form-row">
            <div className="input-data textarea">
              <input type="text" name="firstName" required />
              <br />
              <div className="underline"></div>
              <label htmlFor="message">Keywords (Maximum six)</label>
              <br />
              <div className="form-row submit-btn"></div>
            </div>
          </div>

          <div className="form-row">
            <div className="input-data textarea">
              <input type="text" name="firstName" required />
              <br />
              <div className="underline"></div>
              <label htmlFor="message">Name of First Reviewer</label>
              <br />
            </div>
          </div>

          <div className="form-row">
            <div className="input-data textarea">
              <input type="text" name="firstName" required />
              <br />
              <div className="underline"></div>
              <label htmlFor="message">Email Id of First Reviewer</label>
              <br />
            </div>
          </div>

          <div className="form-row">
            <div className="input-data textarea">
              <input type="text" name="firstName" required />
              <br />
              <div className="underline"></div>
              <label htmlFor="message">Name of Second Reviewer</label>
              <br />
            </div>
          </div>

          <div className="form-row">
            <div className="input-data textarea">
              <input type="text" name="firstName" required />
              <br />
              <div className="underline"></div>
              <label htmlFor="message">Email Id of Second Reviewer</label>
              <br />
            </div>
          </div>

          <div className="form-row">
            <div className="input-data textarea">
              <input type="file" name="firstName" required />
              <br />
              <div className="underline"></div>

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
