// eslint-disable-next-line no-unused-vars
import React from "react";

function Education() {
  return (
    <div className="education-details">
      <div className="edu-container">
        <input type="radio" name="slider" id="tab-1" />
        <input type="radio" name="slider" id="tab-2" defaultChecked />
        <input type="radio" name="slider" id="tab-3" />
        <div className="labels">
          <label htmlFor="tab-1" className="tab-1">
            School
          </label>
          <label htmlFor="tab-2" className="tab-2">
            Graduation
          </label>
          <label htmlFor="tab-3" className="tab-3">
            High School
          </label>
          <div className="slider"></div>
        </div>
        <div className="cards-container">
          <div className="cards">
            <div className="card card-1">
              <p className="institute">Paramount Academy</p>
              <p className="board">(CBSE)</p>
              <p className="year">2017-2018</p>
              <p className="grade">
                82.6 <span>%</span>
              </p>
            </div>

            <div className="card">
              <p className="institute">
                Marri Laxman Reddy Institute of Technology and Management
              </p>
              <p className="board">(JNTU Hyderabad)</p>
              <p className="year">2020-2024 (Pursuing)</p>
              <p className="grade">8.44 CGPA (till 5th sem)</p>
            </div>

            <div className="card">
              <p className="institute">Sri Chaitanya Junior Kalashala</p>
              <p className="board">(Telangana State Board)</p>
              <p className="year">2018-2020</p>
              <p className="grade">
                93.6 <span>%</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="big-page-education"></div>
    </div>
  );
}

export default Education;
