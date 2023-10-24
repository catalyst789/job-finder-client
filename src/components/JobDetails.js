// JobDetails.js

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./JobDetails.css";
import JobApplicationForm from "./JobApplicationForm";
import { JobInstance } from "../axios/JobInstance";
import loader from "../assets/Wedges-3s-200px.svg";

const JobDetails = () => {
  const { jobId } = useParams();
  // const job = jobs.find((job) => job.jobId === jobId);

  const [isLoading, setIsLoading] = useState(false);

  const [job, setJob] = useState({});

  const [showApplicationForm, setShowApplicationForm] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    JobInstance.get(`/get/${jobId}`)
      .then((res) => {
        setIsLoading(false);
        if (res.status === 200) {
          setJob(res.data);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        setJob(null);
        console.log(error);
        alert("Some Error Occured at Finding Jobs...");
      });
  }, [jobId]);

  if (!job) {
    return <div>Job not found.</div>;
  }

  return (
    <>
      {isLoading ? (
        <img src={loader} alt="getting jobs..."></img>
      ) : (
        job.title && (
          <div className="job-details">
            <h2>{job.title}</h2>
            <p>Company: {job.company}</p>
            <p>Location: {job.location}</p>
            <p>Salary: {job.salary}</p>
            <p>Deadline: {job.deadline}</p>
            <p>Skills: {job.skills.join(", ")}</p>
            <p>Description: {job.jobDescription}</p>
            <button
              onClick={() => setShowApplicationForm(true)}
              className="apply-button"
            >
              Apply
            </button>
            {showApplicationForm && <JobApplicationForm jobId={job.jobId} />}
          </div>
        )
      )}
    </>
  );
};

export default JobDetails;
