import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFootball,
  faFire,
  faTv,
  faVideo,
  faBell,
  faHistory,
  faPlay,
  faClock,
  faThumbsUp,
  faChevronDown,
  faStream,
  faGamepad,
  faMusic,
  faFilm,
  faNewspaper,
  faTshirt,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

const SideBar = () => {
  const listItems = `flex items-center space-x-4 cursor-pointer  p-3 rounded 
      }`;

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <aside
      className={`fixed top-16  z-50  w-64 p-4 h-screen   left-0 overflow-y-auto
    bg-white text-white" 
  }`}
    >
      <ul className="space-y-2">
        <Link to="/">
          {" "}
          <li className={listItems}>
            <FontAwesomeIcon icon={faHome} />
            <span>Home</span>
          </li>
        </Link>

        <li className={listItems}>
          <FontAwesomeIcon icon={faFire} />
          <span>Trending</span>
        </li>
        <li className={listItems}>
          <FontAwesomeIcon icon={faTv} />
          <span>Subscriptions</span>
        </li>
        <li className={listItems}>
          <FontAwesomeIcon icon={faVideo} />
          <span>Library</span>
        </li>
      </ul>
      <hr className="my-4 border-t border-gray-800" />
      <ul className="space-y-2">
        <li className={listItems}>
          <FontAwesomeIcon icon={faBell} />
          <span>History</span>
        </li>
        <li className={listItems}>
          <FontAwesomeIcon icon={faHistory} />
          <span>Your videos</span>
        </li>
        <li className={listItems}>
          <FontAwesomeIcon icon={faPlay} />
          <span>Watch later</span>
        </li>
        <li className={listItems}>
          <FontAwesomeIcon icon={faClock} />
          <span>History</span>
        </li>
        <li className={listItems}>
          <FontAwesomeIcon icon={faThumbsUp} />
          <span>Liked videos</span>
        </li>
        <li className={listItems}>
          <FontAwesomeIcon icon={faChevronDown} />
          <span>Show more</span>
        </li>
      </ul>
      <hr className="my-4 border-t border-gray-800" />
      <div className="text-gray-500">SUBSCRIPTIONS</div>
      <ul className="space-y-2">
        <li className={listItems}>
          <FontAwesomeIcon icon={faStream} />
          <span>YouTube Premium</span>
        </li>
        <li className={listItems}>
          <FontAwesomeIcon icon={faGamepad} />
          <span>Gaming</span>
        </li>
        <li className={listItems}>
          <FontAwesomeIcon icon={faFootball} />
          <span>Sports</span>
        </li>
        <li className={listItems}>
          <FontAwesomeIcon icon={faMusic} />
          <span>Music</span>
        </li>
        <li className={listItems}>
          <FontAwesomeIcon icon={faFilm} />
          <span>Movies</span>
        </li>
        <li className={listItems}>
          <FontAwesomeIcon icon={faNewspaper} />
          <span>News</span>
        </li>
        <li className={listItems}>
          <FontAwesomeIcon icon={faTshirt} />
          <span>Fashion & Beauty</span>
        </li>
        <li className={listItems}>
          <FontAwesomeIcon icon={faMicrophone} />
          <span>Podcasts</span>
        </li>
        <li className={listItems}>
          <FontAwesomeIcon icon={faChevronDown} />
          <span>Show 38 more</span>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
