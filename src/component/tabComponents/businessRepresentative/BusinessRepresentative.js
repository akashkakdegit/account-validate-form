import React from "react";
import "../../../App.css";
import { HiArrowRight } from "react-icons/hi";
import { useState, useEffect } from "react";

const BusinessRepresentative = ({
  setSelectedTabIndex,
  hide,
  setValidateBusinessRepresentative,
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    zip: "",
    mobile: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    zip: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      localStorage.setItem(
        "BusinessRepresentativeData",
        JSON.stringify(formData)
      );
      setSelectedTabIndex(3);
    }
  };
  const validateForm = () => {
    let valid = true;
    const newFormErrors = { ...formErrors };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const numberRegex = /^\d+$/;

    if (!formData.firstName.trim()) {
      newFormErrors.firstName = "Please enter first name";
      valid = false;
    }
    if (!formData.lastName.trim()) {
      newFormErrors.lastName = "Please enter last name";
      valid = false;
    }
    if (!formData.email.trim()) {
      newFormErrors.email = "Please enter email";
      valid = false;
    } else if (!emailRegex.test(formData.email.trim())) {
      newFormErrors.email = "Please enter a valid email address";
      valid = false;
    }
    if (!formData.addressLine1.trim()) {
      newFormErrors.addressLine1 = "Please enter address";
      valid = false;
    }
    if (!formData.addressLine2.trim()) {
      newFormErrors.addressLine2 = "Please enter address";
      valid = false;
    }
    if (!formData.city.trim()) {
      newFormErrors.city = "Please enter city name";
      valid = false;
    }
    if (!formData.zip.trim()) {
      newFormErrors.zip = "Please enter zip code";
      valid = false;
    } else if (!numberRegex.test(formData.zip.trim())) {
      newFormErrors.zip = "Zip code should contain only numbers";
      valid = false;
    }
    if (!formData.mobile) {
      newFormErrors.mobile = "Please enter mobile number";
      valid = false;
    } else if (!numberRegex.test(formData.mobile.trim())) {
      newFormErrors.mobile = "Mobile number should contain only numbers";
      valid = false;
    }

    setFormErrors(newFormErrors);
    setValidateBusinessRepresentative(valid);
    return valid;
  };

  useEffect(() => {
    const storedFormData = localStorage.getItem("BusinessRepresentativeData");
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, []);

  return (
    <div>
      <form className="form-container">
        <label className="label-1">Name</label>
        <div className="small-input-container">
          <div className="input-container">
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First name"
              className="small-input"
              style={{ borderColor: formErrors.firstName ? "red" : "#E1E3E6" }}
            />
            <span className="error-msg">{formErrors.firstName}</span>
          </div>
          <div className="input-container">
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last name"
              className="small-input"
              style={{ borderColor: formErrors.lastName ? "red" : "#E1E3E6" }}
            />
            <span className="error-msg">{formErrors.lastName}</span>
          </div>
        </div>
        <label className="label">Email</label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your email"
          className="input"
          style={{ borderColor: formErrors.email ? "red" : "#E1E3E6" }}
        />
        <span className="error-msg">{formErrors.email}</span>
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
        <label className="label">Mobile</label>
        <input
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="Enter mobile number"
          className="input"
          style={{ borderColor: formErrors.mobile ? "red" : "#E1E3E6" }}
        />
        <span className="error-msg">{formErrors.mobile}</span>
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

export default BusinessRepresentative;
