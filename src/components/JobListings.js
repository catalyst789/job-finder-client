// JobListings.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./JobListings.css";
import { JobInstance } from "../axios/JobInstance";

const JobListings = () => {
  const [alljobs, setAlJobs] = useState([]);

  useEffect(() => {
    JobInstance.get("/getAll")
      .then((res) => {
        if (res.status === 200) {
          setAlJobs(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Some Error Occured at Finding Jobs...");
      });
  }, []);

  return (
    <div className="job-listings">
      {alljobs.map((job) => (
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
