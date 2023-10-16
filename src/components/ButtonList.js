import React from "react";
import Button from "./Button";

const mapButtons = [
  "All",
  "JavaScript",
  "Music",
  "Sports",
  "News",
  "Comedy",
  "Live",
  " Vlogs",
  "Game Shows",
  "DataBase",
  "Algorithms",
  "cooking",
  "movies",
  "webseries",
];
const ButtonList = () => {
  return (
    <div className="flex  ">
      {mapButtons.map((buttonName, index) => (
        <Button key={index} name={buttonName} />
      ))}
    </div>
  );
};

export default ButtonList;
