import React, { useEffect, useState } from "react";
import "./SidebarTabs.css";
import BusinessStructure from "../tabComponents/businessStructure/BusinessStructure";
import BusinessRepresentative from "../tabComponents/businessRepresentative/BusinessRepresentative";
import BusinessDetails from "../tabComponents/businessDetails/BusinessDetails";
import BankDetails from "../tabComponents/bankDetails/BankDetails";
import TwoStepAuthentication from "../tabComponents/twoStepAuthentication/TwoStepAuthenication";
import Overview from "../tabComponents/oveview/Overview";
import { PiNumberCircleOneFill } from "react-icons/pi";
import { PiNumberCircleTwoFill } from "react-icons/pi";
import { PiNumberCircleThreeFill } from "react-icons/pi";
import { PiNumberCircleFourFill } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";
import { FaCircleCheck } from "react-icons/fa6";

const SidebarTabs = ({ setTabIndex, backTabIndex }) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [hide, setHide] = useState(false);
  const [validateBusinessStructure, setValidateBusinessStructure] =
    useState(false);
  const [validateBusinessRepresentative, setValidateBusinessRepresentative] =
    useState(false);
  const [validateBusinessDetails, setValidateBusinessDetails] = useState(false);
  const [validateBankDetails, setValidateBankDetails] = useState(false);
  const [validateTwoStepAuthentication, setValidateTwoStepAuthentication] =
    useState(false);
  const [showDisplay, setShowDisplay] = useState(false);

  const handleTabSelect = (index) => {
    setSelectedTabIndex(index);
    setTabIndex(index);
  };
  useEffect(() => {
    if (selectedTabIndex === 6) {
      setHide(true);
    }
  }, [selectedTabIndex]);

  useEffect(() => {
    setSelectedTabIndex(backTabIndex);
  }, [backTabIndex]);

  return (
    <>
      <div
        className="tab-container"
        style={{ justifyContent: showDisplay ? "center" : null }}
      >
        <div
          className="serial-number"
          style={{ display: showDisplay ? "none" : "" }}
        >
          <div className="business-tabs-serial-num">
            <span>
              {validateBusinessStructure ? (
                <FaCircleCheck size={"28px"} color="#4ADE80" />
              ) : (
                <PiNumberCircleOneFill
                  size={"29px"}
                  color={selectedTabIndex === 1 ? "#4F44E0" : "grey"}
                />
              )}
            </span>
            <span>
              {validateBusinessRepresentative ? (
                <GoDotFill size={"18px"} color={"#4ADE80"} />
              ) : (
                <GoDotFill
                  size={"15px"}
                  color={selectedTabIndex === 2 ? "#4F44E0" : "grey"}
                />
              )}
            </span>
            <span>
              {validateBusinessDetails ? (
                <GoDotFill size={"18px"} color={"#4ADE80"} />
              ) : (
                <GoDotFill
                  size={"15px"}
                  color={selectedTabIndex === 3 ? "#4F44E0" : "grey"}
                />
              )}
            </span>
          </div>
          <span className="numbers">
            {validateBankDetails ? (
              <FaCircleCheck size={"28px"} color="#4ADE80" />
            ) : (
              <PiNumberCircleTwoFill
                size={"29px"}
                color={selectedTabIndex === 4 ? "#4F44E0" : "grey"}
              />
            )}
          </span>
          <span className="numbers">
            {validateTwoStepAuthentication ? (
              <FaCircleCheck size={"28px"} color="#4ADE80" />
            ) : (
              <PiNumberCircleThreeFill
                size={"29px"}
                color={selectedTabIndex === 5 ? "#4F44E0" : "grey"}
              />
            )}
          </span>
          <span className="numbers">
            <PiNumberCircleFourFill
              size={"29px"}
              color={selectedTabIndex === 6 ? "#4F44E0" : "grey"}
            />
          </span>
        </div>
        <div
          className="tab-list"
          style={{ display: showDisplay ? "none" : "" }}
        >
          <div className="business-tabs-list">
            <text onClick={() => handleTabSelect(1)} className="main-tabs">
              Business Structure
            </text>
            <text onClick={() => handleTabSelect(2)} className="sub-tabs">
              Business Representative
            </text>
            <text onClick={() => handleTabSelect(3)} className="sub-tabs">
              Business Details
            </text>
          </div>
          <text onClick={() => handleTabSelect(4)} className="main-tabs">
            Bank Details
          </text>
          <text onClick={() => handleTabSelect(5)} className="main-tabs">
            Two Step Authentication
          </text>
          <text onClick={() => handleTabSelect(6)} className="main-tabs">
            Overview
          </text>
        </div>
        <div>
          {selectedTabIndex === 1 && (
            <BusinessStructure
              setSelectedTabIndex={setSelectedTabIndex}
              setValidateBusinessStructure={setValidateBusinessStructure}
            />
          )}
          {selectedTabIndex === 2 && (
            <BusinessRepresentative
              setSelectedTabIndex={setSelectedTabIndex}
              setValidateBusinessRepresentative={
                setValidateBusinessRepresentative
              }
            />
          )}
          {selectedTabIndex === 3 && (
            <BusinessDetails
              setSelectedTabIndex={setSelectedTabIndex}
              setValidateBusinessDetails={setValidateBusinessDetails}
            />
          )}
          {selectedTabIndex === 4 && (
            <BankDetails
              setSelectedTabIndex={setSelectedTabIndex}
              setValidateBankDetails={setValidateBankDetails}
            />
          )}
          {selectedTabIndex === 5 && (
            <TwoStepAuthentication
              setSelectedTabIndex={setSelectedTabIndex}
              setValidateTwoStepAuthentication={
                setValidateTwoStepAuthentication
              }
            />
          )}
          {selectedTabIndex === 6 && (
            <Overview
              hide={hide}
              validateBusinessStructure={validateBusinessStructure}
              validateBusinessRepresentative={validateBusinessRepresentative}
              validateBusinessDetails={validateBusinessDetails}
              validateBankDetails={validateBankDetails}
              validateTwoStepAuthentication={validateTwoStepAuthentication}
              setShowDisplay={setShowDisplay}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default SidebarTabs;
