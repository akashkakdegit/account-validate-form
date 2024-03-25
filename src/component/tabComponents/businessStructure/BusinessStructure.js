import React from "react";
import { useState, useEffect } from "react";
import "../../../App.css";
import { HiArrowRight } from "react-icons/hi";

const BusinessStructure = ({
  setSelectedTabIndex,
  hide,
  setValidateBusinessStructure,
}) => {
  const [formData, setFormData] = useState({
    businessAddress: "",
    type: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    zip: "",
  });

  const [formErrors, setFormErrors] = useState({
    businessAddress: "",
    type: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    zip: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      localStorage.setItem("businessStructureData", JSON.stringify(formData));
      setSelectedTabIndex(2);
    }
  };

  const validateForm = () => {
    let valid = true;
    const newFormErrors = { ...formErrors };

    // Validate businessAddress
    if (!formData.businessAddress.trim()) {
      newFormErrors.businessAddress = "Please enter a business address";
      valid = false;
    }

    // Validate type
    if (!formData.type.trim()) {
      newFormErrors.type = "Please enter a business type";
      valid = false;
    }

    // Validate addressLine
    if (!formData.addressLine1.trim()) {
      newFormErrors.addressLine1 = "Please enter address";
      valid = false;
    }

    if (!formData.addressLine2.trim()) {
      newFormErrors.addressLine2 = "Please enter address";
      valid = false;
    }

    // Validate city
    if (!formData.city.trim()) {
      newFormErrors.city = "Please enter city";
      valid = false;
    }

    // Validate zip
    if (!formData.zip.trim()) {
      newFormErrors.zip = "Please enter zip code";
      valid = false;
    } else if (!/^\d+$/.test(formData.zip.trim())) {
      newFormErrors.zip = "Zip code should contain only numbers";
      valid = false;
    }

    setFormErrors(newFormErrors);
    setValidateBusinessStructure(valid);
    return valid;
  };

  useEffect(() => {
    const storedFormData = localStorage.getItem("businessStructureData");
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, []);

  return (
    <div>
      <form className="form-container">
        <label className="label-1">Business address</label>
        <input
          name="businessAddress"
          value={formData.businessAddress}
          onChange={handleChange}
          placeholder="Registered business address"
          className="input"
          style={{
            borderColor: formErrors.businessAddress ? "red" : "#E1E3E6",
          }}
        />
        <span className="error-msg">{formErrors.businessAddress}</span>
        <label className="label">Type</label>
        <input
          name="type"
          value={formData.type}
          onChange={handleChange}
          placeholder="Type of business"
          className="input"
          style={{ borderColor: formErrors.type ? "red" : "#E1E3E6" }}
        />
        <span className="error-msg">{formErrors.type}</span>
        <label className="label">Address</label>
        <input
          name="addressLine1"
          value={formData.addressLine1}
          onChange={handleChange}
          placeholder="Address line 1"
          className="input"
          style={{ borderColor: formErrors.addressLine1 ? "red" : "#E1E3E6" }}
        />
        <span className="error-msg">{formErrors.addressLine1}</span>
        <input
          name="addressLine2"
          value={formData.addressLine2}
          onChange={handleChange}
          placeholder="Address line 2"
          className="input"
          style={{ borderColor: formErrors.addressLine2 ? "red" : "#E1E3E6" }}
        />
        <span className="error-msg">{formErrors.addressLine2}</span>
        <input
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="City"
          className="input"
          style={{ borderColor: formErrors.city ? "red" : "#E1E3E6" }}
        />
        <span className="error-msg">{formErrors.city}</span>
        <input
          name="zip"
          value={formData.zip}
          onChange={handleChange}
          placeholder="Zip"
          className="input"
          style={{ borderColor: formErrors.zip ? "red" : "#E1E3E6" }}
        />
        <span className="error-msg">{formErrors.zip}</span>
        <button
          type="submit"
          onClick={handleSubmit}
          className="button"
          style={{ display: hide ? "none" : "" }}
        >
          Continue <HiArrowRight />
        </button>
      </form>
    </div>
  );
};

export default BusinessStructure;
