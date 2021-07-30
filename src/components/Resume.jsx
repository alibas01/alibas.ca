import React from "react";
//import { Link } from "react-router-dom";
import "../styles/home.scss";

//import Button from "./Button";
import Footer from "./Footer";
import Nav from "./Nav";

export default function Resume(props) {
  return (
    <div className="allpage">
      <Nav title="Resumé" menu="Projects" />
      <section className="yazi">
        <div className="h3">
          <p>
            My transition started in 2017. You can find on my LinkedIn page that
            I have a strong background in different areas. But that is not the
            point. The point is "I want to follow my second big passion in my
            life. "Coding".
          </p>
          &nbsp;
          <br />
          <p>
            If you are looking for my soft-skills; I am a hard-working,
            less-complaint, much-work type of guy. I enjoy problem-solving a
            lot.
            <strong>
              &nbsp;<u>HTML, CSS, JavaScript/ES6, Sass</u>
            </strong>
            &nbsp; and front-end frameworks such as
            <strong>
              &nbsp;
              <u>jQuery, React, EJS, ERB, Django, Rails, Axios</u>
            </strong>
            &nbsp; and so on.
          </p>
          &nbsp;
          <br />
          <p>
            On the back-end, I am competent with technologies like&nbsp;
            <strong>
              <u>Node.js, Ruby, and Express</u>
            </strong>
            &nbsp; and databases such as&nbsp;
            <strong>
              <u>MySQL, MangoDB and Postgres.</u>
            </strong>
          </p>
          <br />
          <p>
            For testing, CMS, CD/CI;&nbsp;
            <strong>
              <u>
                JEST, Storybook, Cypress, Mocha, Chai, Git, GitHub, CircleCI
              </u>
              &nbsp;
            </strong>
            falls in my scope.
          </p>
          &nbsp;
          <br />
          <p>
            Additionally, I am skilled in&nbsp;
            <strong>
              <u>Python</u>
            </strong>
            &nbsp; with DS abilities including ML implementations such as NLP
            and Deep Learning.&nbsp;
            <strong>
              <u>Pandas, Matplotlib, Numpy, Seaborn, Scikit-Learn and Keras</u>
            </strong>
            &nbsp; are some of the libraries I am capable of using. <br />I can
            use&nbsp;
            <strong>
              <u>AWS</u>
            </strong>
            &nbsp; (S3, Lambda, EC2, Comprehend, DynamoDB, API Gateway, and so
            on) and I am also familiar with AWS CLI.
          </p>
          &nbsp;
          <br />
          <p>
            If you still wonder, my first passion is aviation. And my background
            is in general, a former jet pilot, NATO operation planner, data
            interpretation and commenting, analyst, program manager in Aerospace
            manufacturing and Leadership. I have some diplomas in industrial
            engineering, resource planning, management and strategy.
          </p>
          &nbsp;
          <br />
          <p>You can find further details on my resume and LinkedIn page.</p>
        </div>
        {/* <a href={'mailto:alibas01@gmail.com'}>alibas01@gmail.com</a> */}
        <div className="yanyazi">
          <img
            className="gold-tiger"
            alt="gtiger"
            src="https://raw.githubusercontent.com/defsax/fly-fi/master/frontend/public/images/Ali.png"
          />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1E1WAqb3Oz1q0szh1iIyqBLSsp83FUeWI/view?usp=sharing"
          >
            <img
              className="resume-logo"
              alt="home"
              src={
                "https://raw.githubusercontent.com/alibas01/alibas.ca/master/public/images/Resume.png"
                //'https://raw.githubusercontent.com/alibas01/alibas.ca/master/public/images/tigeringlasses.png'
              }
            ></img>
          </a>
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
}
