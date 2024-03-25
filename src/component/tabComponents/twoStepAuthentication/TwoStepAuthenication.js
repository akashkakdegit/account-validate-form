import React, { useState } from "react";
import "../../../App.css";
import { HiArrowRight } from "react-icons/hi";

const TwoStepAuthentication = ({
  setSelectedTabIndex,
  setValidateTwoStepAuthentication,
}) => {
  const [formData, setFormData] = useState({
    sms: "",
    app: "",
  });
  const [formErrors, setFormErrors] = useState({
    sms: "",
    app: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSelectedTabIndex(6);
    }
  };

  const validateForm = () => {
    let valid = true;
    const newFormErrors = { ...formErrors };
    if (!formData.sms.trim()) {
      newFormErrors.sms = "Enter authenticator option";
      valid = false;
    }
    if (!formData.app.trim()) {
      newFormErrors.app = "Enter authenticator app";
      valid = false;
    }
    setFormErrors(newFormErrors);
    setValidateTwoStepAuthentication(valid);
    return valid;
  };

  return (
    <div>
      <form className="form-container">
        <label className="label-1">Keep your account secure</label>
        <input
          name="sms"
          value={formData.sms}
          onChange={handleChange}
          placeholder="Use SMS"
          className="input"
          style={{ borderColor: formErrors.sms ? "red" : "#E1E3E6" }}
        />
        <span className="error-msg">{formErrors.sms}</span>
        <input
          name="app"
          value={formData.app}
          onChange={handleChange}
          placeholder="Use an authenticator app"
          className="input"
          style={{ borderColor: formErrors.app ? "red" : "#E1E3E6" }}
        />
        <span className="error-msg">{formErrors.app}</span>
        <button className="button" onClick={handleSubmit}>
          Continue <HiArrowRight />
        </button>
      </form>
    </div>
  );
};

export default TwoStepAuthentication;
