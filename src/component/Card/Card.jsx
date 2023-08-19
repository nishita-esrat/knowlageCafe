import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as farBookmarkRegular } from "@fortawesome/free-regular-svg-icons";

import "./Card.css";

const Card = ({ searchTitle ,markAsRead }) => {
  // accepting data
  const [value, setValue] = useState([]);
  // fetching data
  useEffect(() => {
    fetch("../../../data/data.json")
      .then((res) => res.json())
      .then((data) => setValue(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="card-container">
      {value &&
        value.map((item) => {
          return (
            <div className="item-container" key={item.id}>
              <img src={item.bannerImg} className="banner-img" />
              <div className="item-info">
                <div className="user-details">
                  <img src={item.avatar} />
                  <div>
                    <h4>{item.userName}</h4>
                    <span>{item.publishedDate}</span>
                  </div>
                </div>
                <span>
                  {item.readTime} min read
                  <FontAwesomeIcon
                    icon={farBookmarkRegular}
                    className="icon-item-info"
                    onClick={() => searchTitle(item.id, value)}
                  />
                </span>
              </div>
              <h2 className="item-title">{item.title}</h2>
              <p className="mark-as" onClick={() => markAsRead(item.readTime)}>
                Mark as read
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default Card;
