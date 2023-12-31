// JobApplicationForm.js

import React, { useState } from "react";
import "./JobApplicationForm.css";
import { JobInstance } from "../axios/JobInstance";

const JobApplicationForm = ({ jobId }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    resumeLink: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // You can handle the form submission here, e.g., send data to a server.
    console.log("Form data submitted:", formData);

    JobInstance.post("/apply", {
      name: formData.name,
      email: formData.email,
      phone: formData.phoneNumber,
      resumeLink: formData.resumeLink,
      jobId: jobId,
    })
      .then((res) => {
        setIsLoading(false);
        if (res.status === 200) {
          alert("Successfully Applied for this Job.");
        } else {
          alert("Failed Applied for this Job.");
        }
        // Clear the form fields
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          resumeLink: "",
        });
      })
      .catch((error) => {
        setIsLoading(false);
        alert("Failed Applied for this Job.");
        // Clear the form fields
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          resumeLink: "",
        });
      });
  };

  return (
    <div className="job-application-form">
      <h2>Apply for Job</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="resumeLink">Resume Link</label>
          <input
            type="url"
            id="resumeLink"
            name="resumeLink"
            value={formData.resumeLink}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" className="apply-button">
          {isLoading ? "Sending Application..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
