import React from "react";
import "../../../App.css";
import { HiArrowRight } from "react-icons/hi";
import { useState, useEffect } from "react";

const BusinessDetails = ({
  setSelectedTabIndex,
  hide,
  setValidateBusinessDetails,
}) => {
  const [formData, setFormData] = useState({
    vatNumber: "",
    industry: "",
    website: "",
  });

  const [formErrors, setFormErrors] = useState({
    vatNumber: "",
    industry: "",
    website: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      localStorage.setItem("businessDetailsData", JSON.stringify(formData));
      setSelectedTabIndex(4);
    }
  };

  const validateForm = () => {
    let valid = true;
    const newFormErrors = { ...formErrors };
    const numberRegex = /^\d+$/;
    const websiteRegex =
      /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+)(\.[a-zA-Z]{2,})+(\.[a-zA-Z]{2,})?([^\s]*)?$/;

    if (!formData.vatNumber.trim()) {
      newFormErrors.vatNumber = "Please enter VAT number";
      valid = false;
    } else if (!numberRegex.test(formData.vatNumber)) {
      newFormErrors.vatNumber = "VAT number should be a number";
      valid = false;
    }
    if (!formData.industry.trim()) {
      newFormErrors.industry = "Please enter industry name";
      valid = false;
    }
    if (!formData.website.trim()) {
      newFormErrors.website = "Please enter website";
      valid = false;
    } else if (!websiteRegex.test(formData.website.trim())) {
      newFormErrors.website = "Please enter a valid website URL";
      valid = false;
    }
    setFormErrors(newFormErrors);
    setValidateBusinessDetails(valid);
    return valid;
  };

  useEffect(() => {
    const storedFormData = localStorage.getItem("businessDetailsData");
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, []);

  return (
    <div>
      <form className="form-container">
        <label className="label-1">VAT</label>
        <input
          name="vatNumber"
          value={formData.vatNumber}
          onChange={handleChange}
          placeholder="VAT number"
          className="input"
          style={{ borderColor: formErrors.vatNumber ? "red" : "#E1E3E6" }}
        />
        <span className="error-msg">{formErrors.vatNumber}</span>
        <label className="label">Industry</label>
        <input
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          placeholder="Please select your industry..."
          className="input"
          style={{ borderColor: formErrors.industry ? "red" : "#E1E3E6" }}
        />
        <span className="error-msg">{formErrors.industry}</span>
        <label className="label">Organization website</label>
        <input
          name="website"
          value={formData.website}
          onChange={handleChange}
          placeholder="www.example.com"
          className="input"
          style={{ borderColor: formErrors.website ? "red" : "#E1E3E6" }}
        />
        <span className="error-msg">{formErrors.website}</span>
        <button
          className="button"
          onClick={handleSubmit}
          style={{ display: hide ? "none" : "" }}
        >
          Continue <HiArrowRight />
        </button>
      </form>
    </div>
  );
};

export default BusinessDetails;
