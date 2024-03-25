import React from "react";
import "../../../App.css";
import { HiArrowRight } from "react-icons/hi";
import { useState, useEffect } from "react";

const BankDetails = ({ setSelectedTabIndex, hide, setValidateBankDetails }) => {
  const [formData, setFormData] = useState({
    currency: "",
    country: "",
    iban: "",
    confirmIban: "",
  });

  const [formErrors, setFormErrors] = useState({
    currency: "",
    country: "",
    iban: "",
    confirmIban: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (formData.iban.trim() !== formData.confirmIban.trim()) {
        setFormErrors({
          ...formErrors,
          iban: "IBAN numbers do not match",
          confirmIban: "IBAN numbers do not match",
        });
        return;
      }
      setValidateBankDetails(true);
      localStorage.setItem("bankDetailsData", JSON.stringify(formData));
      setSelectedTabIndex(5);
    }
  };

  const validateForm = () => {
    let valid = true;
    const newFormErrors = { ...formErrors };
    const numberRegex = /^\d+$/;

    if (!formData.currency.trim()) {
      newFormErrors.currency = "Please enter currency";
      valid = false;
    }
    if (!formData.country.trim()) {
      newFormErrors.country = "Please enter country name";
      valid = false;
    }
    if (!formData.iban.trim()) {
      newFormErrors.iban = "Please enter IBAN number";
      valid = false;
    } else if (!numberRegex.test(formData.iban.trim())) {
      newFormErrors.iban = "IBAN number should be a number";
      valid = false;
    }
    if (!formData.confirmIban.trim()) {
      newFormErrors.confirmIban = "Please enter confirm IBAN number";
      valid = false;
    } else if (!numberRegex.test(formData.confirmIban.trim())) {
      newFormErrors.confirmIban = "Confirm IBAN number should be a number";
      valid = false;
    }

    setFormErrors(newFormErrors);
    return valid;
  };

  useEffect(() => {
    const storedFormData = localStorage.getItem("bankDetailsData");
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, []);

  return (
    <div>
      <form className="form-container">
        <label className="label-1">Currency</label>
        <input
          name="currency"
          value={formData.currency}
          onChange={handleChange}
          placeholder="Select your currency..."
          className="input"
          style={{ borderColor: formErrors.currency ? "red" : "#E1E3E6" }}
        />
        <span className="error-msg">{formErrors.currency}</span>
        <label className="label">Country of bank account</label>
        <input
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="Country"
          className="input"
          style={{ borderColor: formErrors.country ? "red" : "#E1E3E6" }}
        />
        <span className="error-msg">{formErrors.country}</span>
        <label className="label">IBAN</label>
        <input
          name="iban"
          value={formData.iban}
          onChange={handleChange}
          placeholder="Enter your IBAN"
          className="input"
          style={{ borderColor: formErrors.iban ? "red" : "#E1E3E6" }}
        />
        <span className="error-msg">{formErrors.iban}</span>
        <input
          name="confirmIban"
          value={formData.confirmIban}
          onChange={handleChange}
          placeholder="Confirm IBAN"
          className="input"
          style={{ borderColor: formErrors.confirmIban ? "red" : "#E1E3E6" }}
        />
        <span className="error-msg">{formErrors.confirmIban}</span>
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

export default BankDetails;
