import { useEffect, useState } from "react";
import jobs from "../../utilities/jobs-services";
import "./Jobs.css"
import {
  Button,
  Collapse,
  Card,
  CardBody,
  CardTitle
} from 'reactstrap';

export default function Jobs() {
  const [jobList, setJobList] = useState(jobs)
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    setJobList(jobList)
  }, [jobList]);

  function handleClick(job) {
    setSelectedJob((prevJob) => (prevJob === job ? null : job));
  }

  return (
    <div className="JobContainer">
    {jobList.map((job, idx) => (
      <div className="JobCard" key={idx}>
        <div onClick={() => handleClick(job)}>
          <div className="JobCardTop">
            <div className="JobTitle">{job.title}</div>
          </div>
          <div className="JobCardBottom">
            <div className="JobCompany">{job.company}</div>
            <div className="JobLocation">{job.location}</div>
            <div className="JobDate">
              {job.date_start} - {job.date_end}
            </div>
          </div>
        </div>

        <Collapse isOpen={selectedJob === job}>
          <ul className="JobDescriptions">
            {job.descriptions.map((description, idx) => (
              <li key={idx}>{description}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    ))}
  </div>
);
}