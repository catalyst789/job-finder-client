// JobListings.js

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./JobListings.css";
import { JobInstance } from "../axios/JobInstance";
import loader from "../assets/Wedges-3s-200px.svg";

const JobListings = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [alljobs, setAlJobs] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    JobInstance.get("/getAll")
      .then((res) => {
        setIsLoading(false);
        if (res.status === 200) {
          setAlJobs(res.data);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
        alert("Some Error Occured at Finding Jobs...");
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <img src={loader} alt="getting jobs..."></img>
      ) : (
        <div className="job-listings">
          {alljobs.map((job) => (
            <div onClick={() => navigate(`/job/${job.jobId}`)} key={job.jobId} className="job-card">
              <h2>{job.title}</h2>
              <p>Company: {job.company}</p>
              <p>Location: {job.location}</p>
              <p>Salary: {job.salary}</p>
              <Link to={`/job/${job.jobId}`}>Details</Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default JobListings;
