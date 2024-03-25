import React, { useState } from "react";
import BusinessStructure from "../businessStructure/BusinessStructure";
import BusinessRepresentative from "../businessRepresentative/BusinessRepresentative";
import BusinessDetails from "../businessDetails/BusinessDetails";
import BankDetails from "../bankDetails/BankDetails";
import "../../../App.css";
import { FaCircleCheck } from "react-icons/fa6";

const Overview = ({
  hide,
  validateBusinessStructure,
  validateBusinessRepresentative,
  validateBusinessDetails,
  validateBankDetails,
  validateTwoStepAuthentication,
  setShowDisplay,
}) => {
  const [success, setSuccess] = useState(false);
  const [newFormHide, setNewFormHide] = useState(false);

  const handleSubmit = () => {
    if (
      validateBusinessStructure &&
      validateBusinessRepresentative &&
      validateBusinessDetails &&
      validateBankDetails &&
      validateTwoStepAuthentication
    ) {
      setSuccess(true);
      setShowDisplay(true);
    }
  };

  const handleNew = () => {
    setShowDisplay(false);
    setNewFormHide(true);
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      {!success ? (
        <div>
          <div className="overview-container">
            <div className="overview-sub-container">
              <BusinessStructure hide={hide} />
              <span className="error-msg">
                {!validateBusinessStructure
                  ? "All field are compulsory in businessStructure,please fill and continue..."
                  : null}
              </span>

              <BankDetails hide={hide} />
              <span className="error-msg">
                {!validateBankDetails
                  ? "All field are compulsory in bankDetails,please fill and continue..."
                  : null}
              </span>
            </div>
            <div className="overview-sub-container">
              <BusinessRepresentative hide={hide} />
              <span className="error-msg">
                {!validateBusinessRepresentative
                  ? "All field are compulsory in businessStructure,please fill and continue..."
                  : null}
              </span>
              <BusinessDetails hide={hide} />
              <span
                className="error-msg"
                style={{
                  display: !validateTwoStepAuthentication ? "none" : "",
                }}
              >
                {!validateBusinessDetails
                  ? "All field are compulsory in businessStructure,please fill and continue..."
                  : null}
              </span>
              <span className="error-msg">
                {!validateTwoStepAuthentication
                  ? "Please complete two step verification and continue..."
                  : null}{" "}
              </span>
            </div>
          </div>
          <div className="submit-button-container">
            <button type="submit" className="button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      ) : (
        <div
          className="form-submitted"
          style={{ display: newFormHide ? "none" : "" }}
        >
          {" "}
          <FaCircleCheck size={"40px"} color="green" />
          <text className="success-text"> Form submitted successfully</text>
          <button className="small-button" onClick={handleNew}>
            New Form
          </button>
        </div>
      )}
    </>
  );
};

export default Overview;
