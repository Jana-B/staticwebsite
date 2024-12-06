import './App.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function App() {
  return (
    <div className="resume-container">
      <header className="header">
        <img src="/profile.jpg" alt="user" className="profile-img" />
        <h1>Jana Bergmans</h1>
        <h2>Trainee Information Technology at Fielmann group AG</h2>
      </header>

      <div className="content">
        <aside className="sidebar">
          <h3>Skills</h3>
          <ul>
            <li>Cloud: AWS</li>
            <li>Programming Languages: TypeScript, Python</li>
            <li>Frameworks: React, NextJS</li>
            <li>Database: MongoDB</li>
            <li>...</li>
            <li>...</li>
          </ul>
          <h3>Languages</h3>
          <ul>
            <li>Dutch: Native</li>
            <li>German: Fluent</li>
            <li>English: Fluent</li>
            <li>Japanese: Fluent</li>
            <li>French: Intermediate</li>
            <li>Spanish: Intermediate</li>
            <li>Korean: Beginner</li>
          </ul>
        </aside>

        <main className="main">
          <section className="experience">
            <h3>Experience</h3>
            <div>
              <h4>Trainee Information Technology: Software Development</h4>
              <p>Fielmann Group AG, 2023-Present</p>
              <p>Description of your responsibilities and achievements.</p>
            </div>
            <div>
              <h4>Customer Service Agent</h4>
              <p>Hermes Germany GmbH, 2021-2023</p>
              <p>Customer Service Agent for Parcelshop owners and part of the IT Exchange Team.</p>
            </div>
          </section>

          <section className="education">
            <h3>Education</h3>
            <div>
              <h4>Master of Arts: Language- and Areastudies: Japanology</h4>
              <p>KU Leuven, 2018-2020</p>
            </div>
            <div>
              <h4>Bachelor of Arts: Language- and Areastudies: Japanology</h4>
              <p>KU Leuven, 2015-2018</p>
            </div>
            <div>
              <h4>Postgraduate Korean Studies</h4>
              <p>KU Leuven, 2018-2019</p>
            </div>
            <div>
              <h4>Certifications</h4>
              <p>Details about certifications or online courses.</p>
              <p>E.g. JLPT N2, Test DAF, TOEFL IBT</p>
            </div>
          </section>
        </main>
      </div>

      <footer className="footer">
        <p>Contact: jana.bergmans@fielmann.com | +49 178 6569618</p>
        <p>
        <a
            href="https://de.linkedin.com/in/jana-bergmans-46b045200"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/Jana-B"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={30} />
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;