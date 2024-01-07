import React from "react"
import "./Account.css";
import acclogo from "../assets/acclogo.png"
function Account() {

  return (
    <div>
      <div className="nav">
      <img src={acclogo}  class="acclogo" />
      </div>
      <div className="content">
        <div className="ligne">
      <div className="ecr">Titre</div>
        <input type="text" placeholder="Post Titre"/>
        <div className="ecr">RH info</div>
        <input type="text" placeholder="RH info"/>
        <div className="ecr">Work location </div>
        <input type="text" placeholder="work location"/>
        </div>
        <div className="area">
          <div className="dec"><div className="ecr">Description</div></div>
          <textarea placeholder="Description"></textarea>
          <div className="selects">
          <div className="ecr">Type</div> 
          <select>
            <option>select interneship type</option>
          </select>
          <div className="ecr">Industries</div>
          <select>
            <option>Industries</option>
          </select>
          <div className="ecr">Skills</div> 
          <select>
            <option>Skills</option>
          </select>
        </div>
        </div>
        <div className="picsub">
          <div className="ecr">picture Link</div>
          <input type="text" placeholder="put the link"/>
        </div>
        
        <button className="but">Submit</button>
        
      </div>
      
    </div>
  );
};

export default Account;