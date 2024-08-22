import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-sm text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-sm sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">todor</span>👋
      <br />A Software Engineer from Bulgaria
    </h1>
  ),
  2: <InfoBox text="Explore My Journey: Experiences in Software Development" link="/about" btnText="Learn more" />,
  3: <InfoBox text="Dive into my collection of software engineering projects" link="/projects" btnText="View projects" />,
  4: <InfoBox text="Need a project done or looking for a dev? I'm just a few keystrokes away" link="/contact" btnText="Let's talk" />,
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
