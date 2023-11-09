import React from "react";

import { AiOutlineMessage } from "react-icons/ai"
import { BsFillDatabaseFill, BsPersonWorkspace, BsDatabaseCheck, BsPersonBoundingBox } from "react-icons/bs"
import { CgWebsite } from "react-icons/cg"
import { FiRefreshCw } from "react-icons/fi"
import { GiTeamUpgrade } from "react-icons/gi"
import { ImStatsDots } from "react-icons/im"
import { MdStorage, MdTimeline } from "react-icons/md"
import { RiBriefcase4Line } from "react-icons/ri";

const skills = [
  {
    title: "Leadership",
    description: "Experienced in strategic operations management and adept at implementing effective strategies for optimal efficiency and success. I am passionate about leveraging my skills and knowledge to drive organizational growth and excellence.",
    icon: <RiBriefcase4Line size={40} />,
  },
  {
    title: "Teamwork",
    description: "Proficient in teamwork and collaboration, I excel at fostering strong relationships, coordinating efforts, and achieving shared goals.",
    icon: <GiTeamUpgrade size={40} />,
  },
  {
    title: "Web Development",
    description: "Skilled in creating visually appealing and user-friendly websites, I design and develop modern, responsive web applications that provide exceptional user experiences",
    icon: <CgWebsite size={40} />,
  },
  {
    title: "Inventory Management",
    description: "Proficient in inventory management, I have experience in optimizing stock levels and ensuring efficient supply chain operations.",
    icon: <MdStorage size={40} />, // Replace 'YourIconComponent' with the actual icon you want to use.
  },
  {
    title: "Process Improvements",
    description: "Experienced in process improvements, I have a track record of optimizing workflows and enhancing operational efficiency.",
    icon: <FiRefreshCw size={40} />, // Replace 'YourIconComponent' with the actual icon you want to use.
  },
  {
    title: "Front End",
    description: "Experienced in front-end and back-end technologies, I create seamless web solutions that unite user interfaces with robust server-side functionality.",
    icon: <BsPersonWorkspace size={40} />,
  },
  {
    title: "Full Stack",
    description: "Proficient in front-end and back-end technologies, I deliver end-to-end web solutions that seamlessly integrate user interfaces with robust server-side functionality",
    icon: <BsFillDatabaseFill size={40} />,
  },
  {
    title: "Communication",
    description: "Possess excellent written and verbal communication skills, enabling effective collaboration and clear conveyance of ideas and information.",
    icon: <AiOutlineMessage size={40} />,
  },
  {
    title: "Project Management",
    description: "Skilled in project planning, execution, and oversight, ensuring projects are completed on time and within scope.",
    icon: <MdTimeline size={40} />,
  },
  {
    title: "Lifelong Learner",
    description: "Committed to continuous learning and personal development, staying up-to-date with industry trends and acquiring new skills to adapt to changing environments.",
    icon: <BsPersonBoundingBox size={40} />,
  },
  {
    title: "Data Analysis",
    description: "Equipped with strong analytical skills, I uncover valuable insights from complex datasets, enabling data-driven decision-making and process optimization",
    icon: <ImStatsDots size={40} />,
  },
  {
    title: "Data Engineering",
    description: "Experienced in building scalable data pipelines, I design and implement efficient data infrastructure, integration, and transformation processes to maximize the value of data assets",
    icon: <BsDatabaseCheck size={40} />,
  },
];

export default skills;