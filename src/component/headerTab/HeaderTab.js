import React from "react";
import "./HeaderTab.css";
import { HiArrowLeft } from "react-icons/hi";

const HeaderTab = ({ setBackTabIndex, tabIndex }) => {
  const handleBack = () => {
    if (tabIndex) setBackTabIndex((tabIndex = tabIndex - 1));
  };
  return (
    <>
      <div className="header-tab-container">
        <button className="back-button">
          <HiArrowLeft
            size={"24px"}
            className="black-arrow-icon"
            onClick={handleBack}
          />
        </button>
        <text className="title">Account verification</text>
        <span className="progress-mark-container">
          <text className="progress-mark">In progress</text>
        </span>
      </div>
      <hr className="devider" />
    </>
  );
};

export default HeaderTab;
