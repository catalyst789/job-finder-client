// JobListings.js

import React from "react";
import { Link } from "react-router-dom";
import "./JobListings.css";

const JobListings = ({ jobs }) => {
  return (
    <div className="job-listings">
      {jobs.map((job) => (
        <div key={job.jobId} className="job-card">
          <h2>{job.title}</h2>
          <p>Company: {job.company}</p>
          <p>Location: {job.location}</p>
          <p>Salary: {job.salary}</p>
          <Link to={`/job/${job.jobId}`}>Details</Link>
        </div>
      ))}
    </div>
  );
};

export default JobListings;
