import React, { useState, useEffect } from "react";
import profileImg from "../images/profileImg.png";

const Landing = () => {
  const user_name = "Tig";
  const [filter, setFilter] = useState("");
  const [names, setNames] = useState([
    "Rayan",
    "Trevor",
    "Michael",
    "Brian",
    "Ryan",
    "Reuben",
    "Hudson :(",
  ]);

  const handleSearch = (event) => {
    setFilter(event.target.value.toUpperCase());
  };

  useEffect(() => {
    // This code runs after the component is mounted and the DOM is ready
    // You can remove this effect since we are not using DOM operations now
  }, []); // Empty dependency array ensures this code only runs once

  return (
    <div className="bg-[#DBDBDB] h-screen w-screen overflow-hidden">
      <nav className="w-full bg-[#5200FF] h-[10%] rounded-b-[1rem] grid grid-cols-2 items-center">
        <div className="nav__left grid grid-cols-5 mx-[2rem] text-white">
          <div className="nav__logo col-span-1 font-bold">LEARN</div>
          <div className="nav__logo col-span-1">Courses</div>
          <div className="nav__logo col-span-1">About</div>
        </div>
        <div className="nav__right flex flex-row gap-7 text-center justify-end items-center mr-20">
          <div className="nav__user_img">
            <img src={profileImg} alt="user icon" width="40px" height="40px" />
          </div>
          <div className="nav__user_name">{user_name}</div>
        </div>
      </nav>
      <div className="landing__main h-full w-full">
        <div className="landing__leaderboard h-full bottom-0 w-[22%] ml-[2vw] mt-[5vh] bg-[#CCCCCC]">
          <div className="leader__search flex items-center justify-center w-full">
            <input
              type="text"
              id="search__input"
              className="mt-5 w-[80%] text[24px] text-center focus:outline-none h-[4vh] rounded-[10px] mb-10"
              placeholder="Search Leaderboard"
              onChange={handleSearch}
            ></input>
          </div>
          <div className="leader__list flex ml-10 gap-[40vh] overflow-scroll">
            <ol id="list__ul" className="flex flex-col gap-5">
              {names.map((name, index) => (
                <li
                  key={index}
                  style={{
                    display:
                      filter === "" || name.toUpperCase().includes(filter)
                        ? "list-item"
                        : "none",
                  }}
                >
                  {index + 1}. {name}
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="landing__hero">
          <div className="hero__section grid grid-rows-5">
            <div className="hero__welcome_banner w-full"></div>
            <div className="hero__levels_banner w-full bg-black">j</div>
            <div className="current_courses"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
