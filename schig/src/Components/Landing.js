import React, { useState, useEffect } from "react";
import profileImg from "../images/profileImg.png";
import ClassOption from "./ClassOption";

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

  return (
    <div className="bg-[#DBDBDB]">
      <div className="h-screen w-screen">
        <nav className="w-full bg-[#5200FF] h-[10%] rounded-b-[1rem] grid grid-cols-2 items-center">
          <div className="nav__left grid grid-cols-5 mx-[2rem] text-white">
            <div className="nav__logo col-span-1 font-bold">LEARN</div>
            <div className="nav__logo col-span-1">Courses</div>
            <div className="nav__logo col-span-1">About</div>
          </div>
          <div className="nav__right flex flex-row gap-7 text-center justify-end items-center mr-20">
            <div className="nav__user_img">
              <img
                src={profileImg}
                alt="user icon"
                width="40px"
                height="40px"
              />
            </div>
            <div className="nav__user_name text-white">{user_name}</div>
          </div>
        </nav>
        <div className="landing__main h-full w-full flex">
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
          <div className="landing__hero w-full">
            <div className="hero__section h-full grid grid-rows-5 m-10 gap-5">
              <div className="hero__welcome_banner bg-[#7A3CFF] row-span-1 rounded-[25px] relative">
                <div className="triangle-intro rounded-br-[25px] absolute bottom-0 right-0"></div>
                <h1 className="text-white">Hey {user_name}</h1>
              </div>
              <div className="hero__level_banner bg-[#000] row-span-1 rounded-[25px] relative">
                <div className="triangle-levels rounded-br-[25px] absolute bottom-0 right-0"></div>
              </div>
              <div className="current_courses row-span-3 ml-5">
                <h1 className="font-bold text-[24px]">Current Courses</h1>
                <div className="class__scroller overflow-scroll flex flex-row gap-5 mt-10">
                  <ClassOption
                    title="Introduction to Python"
                    color="#FF7E07"
                    language="Python3"
                    level="Advanced"
                    percentage="56"
                  />
                  <ClassOption
                    title="Interactive Design"
                    color="#7A3CFF"
                    language="UI/UX"
                    level="Beginner-Intermediate"
                    percentage="85"
                  />
                  <ClassOption
                    title="Cloud Computing"
                    color="#41BBFF"
                    language="AWS"
                    level="Intermediate"
                    percentage="22"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
