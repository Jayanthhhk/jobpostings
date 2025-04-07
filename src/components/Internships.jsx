import React, { useState, useEffect } from 'react';

const Internships = () => {
  const [internships, setInternships] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [durationFilter, setDurationFilter] = useState('All');
  const [filteredInternships, setFilteredInternships] = useState([]);

  const SHEET_URL = 'https://opensheet.elk.sh/1tcvvSRqUSJbpjw07jlui3roa0QGtjHkM2MRfZ8DnRCc/Sheet1';

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const response = await fetch(SHEET_URL);
        const data = await response.json();
        const reversed = data.reverse();
        setInternships(reversed);
        setFilteredInternships(reversed);
      } catch (error) {
        console.error('Error fetching internships:', error);
      }
    };

    fetchInternships();
  }, []);

  useEffect(() => {
    const filtered = internships.filter((intern) => {
      const matchesTitle = intern.Title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDuration =
        durationFilter === 'All' || intern.Duration === durationFilter;
      return matchesTitle && matchesDuration;
    });

    setFilteredInternships(filtered);
  }, [searchTerm, durationFilter, internships]);

  const durationOptions = ['All', ...new Set(internships.map((i) => i.Duration))];

  return (
    <div className="jobs-container">
      <h2>Available Internships</h2>

      <div className="filters">
        <input
          type="text"
          placeholder="Search internships by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <select
          className="filter-select"
          value={durationFilter}
          onChange={(e) => setDurationFilter(e.target.value)}
        >
          {durationOptions.map((duration, index) => (
            <option key={index} value={duration}>
              {duration}
            </option>
          ))}
        </select>
      </div>

      {filteredInternships.length === 0 ? (
        <p>No internships found.</p>
      ) : (
        <ul className="job-list">
          {filteredInternships.map((intern, index) => (
            <li key={index} className="job-item">
              <h3>{intern.Title}</h3>
              <p><strong>Company:</strong> {intern.Company}</p>
              <p><strong>Location:</strong> {intern.Location}</p>
              <p><strong>Duration:</strong> {intern.Duration}</p>
              <p><strong>Stipend:</strong> {intern.Stipend}</p>
              <a href={intern.Link} target="_blank" rel="noopener noreferrer">
                <button className="apply-button">Apply Now</button>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Internships;
