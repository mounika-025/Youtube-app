import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsCard from "./CommentsCard";
const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  });
  return (
    <div>
      <div className="flex flex-col w-full ">
        <div className=" flex px-5 w-full">
          <div>
            <iframe
              width="1000"
              height="500"
              src={"https://www.youtube.com/embed/" + searchParams.get("v")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <div>
              {" "}
              <CommentsCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
