import dayjs from "dayjs";
import React from "react";

function JobCard(props) {
  const date1 = dayjs(Date.now());
  const diffInDays = date1.diff(props.postedOn, "day");

  // Function to handle resume upload (this would typically be connected to Firebase storage)
  const handleResumeUpload = (event) => {
    const file = event.target.files[0];
    console.log("Resume uploaded:", file);
    // Firebase logic for storing the file would go here
  };

  return (
    <div className="mx-4 md:mx-40 mb-4">
      <div
        className="flex flex-col md:flex-row justify-between items-center px-4 py-4 bg-zinc-200 rounded-md
       border border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-103 transition-all duration-300"
      >
        {/* Job Info Section */}
        <div className="flex flex-col items-center gap-3 text-center md:text-left md:items-start">
          <h1 className="text-lg font-semibold">
            {props.title} - {props.company}
          </h1>
          <p>
            {props.type} &#x2022; {props.experience} &#x2022; {props.location}
          </p>
          <div className="flex items-center gap-2">
            {props.skills.map((skill) => (
              <p
                key={skill}
                className="text-gray-500 py-1 px-2 rounded-md border border-black"
              >
                {skill}
              </p>
            ))}
          </div>
        </div>

        {/* Action Section (Resume upload and Apply button) */}
        <div className="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0">
          <p className="text-gray-500">
            Posted {Math.abs(diffInDays)} days ago
          </p>
          <div className="mt-2 md:mt-0">
            {/* Resume Upload */}
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              className="mb-2"
              onChange={handleResumeUpload}
            />
            <a href={props.job_link}>
              <button className="text-blue-500 border border-blue-500 px-6 md:px-10 py-2 rounded-md">
                Apply
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
