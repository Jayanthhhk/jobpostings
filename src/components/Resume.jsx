import React, { useState } from 'react';

const Resume = () => {
  const [resume, setResume] = useState('');
  const [loading, setLoading] = useState(false);

  const generateResume = async () => {
    setLoading(true);
    setResume('');

    const prompt = `Generate a professional resume for a software engineer with experience in React, Node.js, and PostgreSQL.`;

    try {
      const response = await fetch('/api/generateResume', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      setResume(data.output); // ✅ assuming you return { output: resumeText }
    } catch (err) {
      setResume('Error generating resume.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="resume-container">
      <h2>AI Resume Builder</h2>
      <button onClick={generateResume} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Resume'}
      </button>
      <pre className="resume-output">{resume}</pre>
    </div>
  );
};

export default Resume;

