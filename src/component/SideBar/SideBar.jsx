import React from "react";
import "./SideBar.css";

const SideBar = ({ count, title }) => {
  return (
    <div className="side-container">
      <div className="side-top">Spent time on read : {count} min</div>
      <div className="side-bottom">
        <h4>Bookmarked Blog : {title.length}</h4>
        <div className="side-bottom-bottom">
          {title &&
            title.map((item) => {
              return <div key={item.id}>{item.title}</div>;
            })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
