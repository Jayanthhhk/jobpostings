import React, { useState, useEffect } from 'react';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [experienceFilter, setExperienceFilter] = useState('All');
  const [filteredJobs, setFilteredJobs] = useState([]);

  const SHEET_URL = 'https://opensheet.elk.sh/1LikMmejycOYc2meRxJOH_8dLHdTdkCtDmQFWkiX98DU/Sheet1';

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(SHEET_URL);
        const data = await response.json();
        const reversed = data.reverse();
        setJobs(reversed);
        setFilteredJobs(reversed);
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };

    fetchJobs();
  }, []);

  useEffect(() => {
    const filtered = jobs.filter((job) => {
      const matchesTitle = job.Title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesExperience = experienceFilter === 'All' || job.Experience === experienceFilter;
      return matchesTitle && matchesExperience;
    });

    setFilteredJobs(filtered);
  }, [searchTerm, experienceFilter, jobs]);

  const experienceOptions = ['All', ...new Set(jobs.map(job => job.Experience))];


  return (
    <div className="jobs-container">
      <h2>Available Jobs</h2>

      <div className="filters">
        <input
          type="text"
          placeholder="Search jobs by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <select
          className="filter-select"
          value={experienceFilter}
          onChange={(e) => setExperienceFilter(e.target.value)}
        >
          {experienceOptions.map((exp, index) => (
            <option key={index} value={exp}>
              {exp}
            </option>
          ))}
        </select>
      </div>

      {filteredJobs.length === 0 ? (
        <p>No jobs found.</p>
      ) : (
        
        <ul className="job-list">
          {filteredJobs.map((job, index) => (
            <li key={index} className="job-item">
              <h3>{job.Title}</h3>
              <p><strong>Company:</strong> {job.Company}</p>
              <p><strong>Location:</strong> {job.Location}</p>
              <p><strong>Package:</strong> {job.Package}</p>
              <p><strong>Experience:</strong> {job.Experience}</p>
              <a href={job.Link} target="_blank" rel="noopener noreferrer">
                <button className="apply-button">Apply Now</button>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Jobs;
