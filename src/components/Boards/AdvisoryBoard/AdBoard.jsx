import React from "react";
import "./AdBoard.css";

function AdBoard() {
  return (
    <div class="container8">
      <h2 id="tableheading8"> Advisory Board</h2>
      <button className="button-44">Add Members</button>
      <ul class="responsive-table8">
        <li class="table-header8">
          <div class="col8 col-18">Name</div>
          <div class="col8 col-28">Designation</div>
          <div class="col8 col-38"> Institute</div>
        </li>
        <li class="table-row8">
          <div class="col8 col-18" data-label="Job Id8">
            Tanmay
          </div>
          <div class="col8 col-28" data-label="Customer Name8">
            CR-CSE.B
          </div>
          <div class="col8 col-38" data-label="Amount">
            Bhagwan Parshuram Institute Of Technology
          </div>
        </li>

        <li class="table-row8">
          <div class="col8 col-18" data-label="Job Id">
            Sahil Chauhan
          </div>
          <div class="col8 col-28" data-label="Customer Name">
            CR-CSE.B
          </div>
          <div class="col8 col-38" data-label="Amount">
            Bhagwan Parshuram Institute Of Technology
          </div>
        </li>
      </ul>
    </div>
  );
}

export default AdBoard;
