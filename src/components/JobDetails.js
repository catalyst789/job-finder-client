// JobDetails.js

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './JobDetails.css';
import JobApplicationForm from './JobApplicationForm';

const JobDetails = ({ jobs }) => {
  const { jobId } = useParams();
  const job = jobs.find((job) => job.jobId === jobId);

  const [showApplicationForm, setShowApplicationForm] = useState(false);


  if (!job) {
    return <div>Job not found.</div>;
  }

  return (
    <div className="job-details">
      <h2>{job.title}</h2>
      <p>Company: {job.company}</p>
      <p>Location: {job.location}</p>
      <p>Salary: {job.salary}</p>
      <p>Deadline: {job.deadline}</p>
      <p>Skills: {job.skills.join(', ')}</p>
      <p>Description: {job.jobDescription}</p>
      <button onClick={() => setShowApplicationForm(true)} className="apply-button">Apply</button>
      {showApplicationForm && <JobApplicationForm jobId={job.jobId} />}
    </div>
  );
};

export default JobDetails;
