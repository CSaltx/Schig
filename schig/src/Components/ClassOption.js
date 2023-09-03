import React from "react";
import Modal from "react-modal";
import { useState } from "react";

const ClassOption = ({ color, title, language, level, percentage }) => {
  const backgroundColorClass = `bg-${color}`;
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const modalStyle = {
    content: {
      backgroundColor: "#D9D9D9",
      overflow: "hidden",
    },
  };

  return (
    <div className="bg-white w-[302px] h-full rounded-[25px] flex justify-center items-center flex-col">
      <div
        className={`class__banner relative flex justify-center items-center rounded-[10px] mt-[25px] h-[5vh] w-[80%] text-center`}
        style={{ backgroundColor: color }}
      >
        <div
          className={`triangle-class rounded-br-[10px] opacity-[20%] absolute bottom-0 right-0`}
          style={{ borderBottom: `4vh solid white` }}
        ></div>
        <h1 className="font-bold text-xl text-white">{language}</h1>
      </div>
      <div className="class__title font-bold text-[#33019B] text-[1.75vw] mt-10 ">
        {title}
      </div>
      <div className="class__level mt-5 font-bold mb-20">{level}</div>
      <div className="relative mb-5 class__progress bg-[#56FFAE] w-[80%] h-[2.5vw] rounded-full flex justify-start items-center stroke-[#59FF56] stroke-[4px]">
        <div
          className="absolute border-black font-bold border-2 rounded-full h-[80%] m-1 flex items-center justify-center"
          style={{ width: percentage + "%" }}
        >
          {percentage}%
        </div>
      </div>
      <button
        onClick={handleOpen}
        className="mb-5 border-black border-2 px-2 rounded-full"
      >
        Continue
      </button>
      <Modal
        isOpen={open}
        onRequestClose={handleClose}
        contentLabel="Modal"
        style={modalStyle}
      >
        <div className="w-full flex justify-end items-center">
          <button
            classname="mt-10 w-2 h-2 p-10 border-black border-2 border-solid"
            style={{
              paddingLeft: "4px",
              paddingRight: "4px",
              border: "2px solid black",
            }}
            onClick={handleClose}
          >
            X
          </button>
        </div>
        <div className="flex h-full justify-center items-center flex-col">
          <h1 className="mb-10">Choose your path.</h1>
          <div className="modal__content w-full h-[80%] grid grid-cols-2 mx-10 gap-5">
            <div className="option__1 border-black border-4 h-full w-full"></div>
            <div className="option__1 border-black border-4 h-full w-full"></div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ClassOption;
