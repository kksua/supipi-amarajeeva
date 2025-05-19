import './App.css';
import profileImage from './images/me.png';
import techLogos from './techLogos';
import myImage from './images/supipi.png';

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <nav>
          <ul>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <main className="hero">
        <div className="text-section">
          <h1 className="name">SUPIPI<br />AMARAJEEVA</h1>
          <p className="subtitle">
            Hi, I'm Supipi, a passionate tech enthusiast and final-year Master's student in Digital Service Engineering.<br/><br/>
            <em>(Ingénierie de Service Numérique)</em> <br/> <br/>
            <a href="#about" className="cta-button">About Me</a>
          </p>
        </div>

        <div className="image-section">
          <img src={profileImage} alt="Supipi at computer with cat" />
        </div>
      </main>

      <div className="tech-scroll">
        <div className="tech-logos">
          {techLogos.concat(techLogos).map((logo, index) => (
            <img key={index} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>


      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-image">
            <img src={myImage} alt="Supipi" />
          </div>

          <div className="about-content">
            <span className="tag">About Me</span>
            <h2>Hello from My Side</h2>
            <p>
            I’m someone who loves turning imagination into digital reality.
            I enjoy bringing ideas to life through clean, thoughtful design and smart development. 
            My journey has been shaped by a love for learning, collaborating across cultures, and building digital experiences that make a difference.
            </p>

            <div className="about-details">

              <div>
                <strong>Email : </strong>
                <a href="mailto:kanampalla.amarajeeva@groupe-esigelec.org">
                   kanampalla.amarajeeva@groupe-esigelec.org
                </a>
              </div>
              <div>
                <strong>Phone : </strong>
                <a href="tel:+33749149678">+33 7 49 14 96 78</a>
              </div>

              <div>
                <strong>GitHub : </strong>
                <a href="https://github.com/kksua" target="_blank" rel="noopener noreferrer">
                  github.com/kksua
                </a>
              </div>
            </div>

            <div className="interests-section">
              <h3>My Interests</h3>
              <div className="interest-boxes">
                <div className="interest-box">
                  <img src="/icons/jogging.png" alt="Jogging" />
                  <span>Jogging</span>
                </div>
                <div className="interest-box">
                  <img src="/icons/sitar.png" alt="Sitar" />
                  <span>Playing Sitar</span>
                </div>
                <div className="interest-box">
                  <img src="/icons/french.png" alt="French" />
                  <span>Learning French</span>
                </div>
                <div className="interest-box">
                  <img src="/icons/travel.png" alt="Travel" />
                  <span>Traveling</span>
                </div>
                <div className="interest-box">
                  <img src="/icons/music.png" alt="Music" />
                  <span>Music</span>
                </div>
                <div className="interest-box">
                  <img src="/icons/Photography.png" alt="Photography" />
                  <span>Photography</span>
                </div>
              </div>
            </div>

            <div className="about-buttons">
              <a href="#contact" className="about-btn primary">Contact Me</a>
              <a href="/supipi-resume.pdf" className="about-btn secondary" download>Download my resume</a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
