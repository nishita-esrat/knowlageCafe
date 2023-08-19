import React, { useState } from "react";
import "./Container.css";
import Card from "../Card/Card";
import SideBar from "../SideBar/SideBar";

const Container = () => {
  const [title, setTitle] = useState([]);
  const [count, setCount] = useState(0);
  // search title function
  const searchTitle = (id, value) => {
    const isTitle = title.filter((item) => item.id == id);
    if (isTitle.length !== 0) {
      setTitle([...title]);
    } else {
      const newItem = value.filter((item) => item.id == id);
      setTitle([...title, ...newItem]);
    }
  };
  // counter function
  const markAsRead = (time) => {
    setCount(count + time);
  };

  return (
    <div className="container">
      <Card searchTitle={searchTitle} markAsRead={markAsRead} />
      <SideBar count={count} title={title} />
    </div>
  );
};

export default Container;
