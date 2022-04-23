import {
  FaDiscord,
  FaGithub,
  FaCoffee,
  FaArrowRight,
  FaHeart,
} from "react-icons/fa";
import "../styling/_components/header.css";
import { GetProjects } from "../plugins";
import { useEffect, useState } from "react";
export default function () {
  const [projectCount, setProjectCount] = useState(0);
  useEffect(() => {
    const setToken = async () => {
      const data = await GetProjects();
      setProjectCount(data);
    };
    setToken();
  }, []);
  return (
    <div className="header">
      <div className="leftSide">
        <div className="smallHeader">
          <div className="smallIcon">
            <FaHeart />
          </div>
          <p>
            Building Effective
            <br />
            And Useful Resources
          </p>
        </div>
        <h1 className="title">
          👋 Hey,
          <br />
          I'm Saige
        </h1>
        <p className="about">
          I'm a full stack developer,
          <br />
          currently working on a collection of projects.
        </p>
        <div>
          <a href="https://rubybots.co/community" className="button">
            <p>Contact Me!</p>
            <a href="https://rubybots.co/community" className="btn">
              <FaArrowRight className="icon" />
            </a>
          </a>
        </div>
      </div>
      <div className="rightSide">
        <div className="circle"></div>
        <div className="card first__card">
          <div className="cardT">
            <div className="card__icon first__icon">
              <FaHeart className="i" />
            </div>
            <h1 className="cardTitle">Total Projects</h1>
          </div>
          <div className="cardD">
            <p className="stat">{projectCount}+</p>
          </div>
        </div>
        <div className="card second__card">
          <div className="cardT">
            <div className="card__icon second__icon">
              <FaHeart className="i" />
            </div>
            <h1 className="cardTitle">Commissions</h1>
          </div>
          <div className="cardD">
            <p className="stat">4+</p>
          </div>
        </div>
        <div className="card third__card">
          <div className="cardT">
            <div className="card__icon third__icon">
              <FaHeart className="i" />
            </div>
            <h1 className="cardTitle">Apps Running</h1>
          </div>
          <div className="cardD">
            <p className="stat">5+</p>
          </div>
        </div>
      </div>
    </div>
  );
}
