import React from "react";
import "./preparation.css";

function Members() {
  return (
    <div class="container13">
      <h4 id="mp13">References</h4>
      <ul class="responsive-table13">
        <li class="table-header13">
          <div class="col13 col-113">Serial No.</div>
          <div class="col13 col-213">Topic</div>
          <div class="col13 col-313">Description</div>
        </li>
        <li class="table-row13">
          <div class="col13 col-113" data-label="Serial No.">
            1
          </div>
          <div class="col13 col-213" data-label="Topic">
            Citation in text
          </div>
          <div class="col13 col-313" data-label="Description">
            Please ensure that every reference cited in the text is also present
            in the reference list (and vice versa). The style of reference
            should be as follow:
          </div>
        </li>

        <li class="table-row13">
          <div class="col13 col-113" data-label="Serial No.">
            2
          </div>
          <div class="col13 col-213" data-label="Topic">
            Journal’s Reference
          </div>
          <div class="col13 col-313" data-label="Description">
            Schott, D. H., Collins, R. N. & Bretscher, A. Secretory vesicle
            transport velocity in living cells depends on the myosin V lever arm
            length. J. Cell Biol. 156, 35-39 (2002).
          </div>
        </li>

        <li class="table-row13">
          <div class="col13 col-113" data-label="Serial No.">
            3
          </div>
          <div class="col13 col-213" data-label="Topic">
            Books
          </div>
          <div class="col13 col-313" data-label="Description">
            Smith, J. Syntax of referencing in How to reference books (ed.
            Smith, S.) 180-181 (Macmillan, 2013).
          </div>
        </li>

        <li class="table-row13">
          <div class="col13 col-113" data-label="Serial No.">
            4
          </div>
          <div class="col13 col-213" data-label="Topic">
            Online material
          </div>
          <div class="col13 col-313" data-label="Description">
            Manaster, J. Sloth squeak. Scientific American Blog Network
            http://blogs.scientificamerican.com/psi-vid/2014/04/09/sloth-squeak
            (2014). Conference Smith, A. K., Title of the paper, Conference’s
            name, Year In addition to the manuscript cover letter should be
            included.
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Members;
