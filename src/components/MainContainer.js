import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="absolute left-40 ml-20">
      <ButtonList /> <VideoContainer />
    </div>
  );
};

export default MainContainer;
