// App.js

import React from "react";
import "./App.css";
import JobListings from "./components/JobListings";
// import { mockJobsData } from "./mockData";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import JobDetails from "./components/JobDetails";
// import { Routes } from "react-router-dom/dist/umd/react-router-dom.development";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/"><h1>Job Listings</h1></Link>
        {/* <Switch> */}
        <Routes>
          <Route
            exact
            path="/"
            element={<JobListings />}
          />
          <Route
            path="/job/:jobId"
            element={<JobDetails />}
          />
        </Routes>
        {/* </Switch> */}
      </div>
    </Router>
  );
}

export default App;
