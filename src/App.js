import './App.css';
import profileGif from './assets/supipi-animation-gif.gif';
import techLogos from './techLogos';
import myImage from './images/supipi.png';
import joggingIcon from './icons/jogging.png';
import sitarIcon from './icons/sitar.png';
import frenchIcon from './icons/french.png';
import travelIcon from './icons/travel.png';
import photographyIcon from './icons/Photography.png';
import musicIcon from './icons/music.png';
import MyProjectsSection from './MyProjectsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="hero">
        <div className="text-section">
        <h1 className="name">
          {'SUPIPI'.split('').map((char, i) => (
            <span
              className="letter"
              style={{ '--delay': `${i * 0.1}s` }}
              key={`s-${i}`}
            >
              {char}
            </span>
          ))}
          <br />
          {'AMARAJEEVA'.split('').map((char, i) => (
            <span
              className="letter"
              style={{ '--delay': `${(i + 6) * 0.1}s` }}
              key={`a-${i}`}
            >
              {char}
            </span>
          ))}
        </h1>

          <p className="subtitle">
            Hi, I'm Supipi, a passionate tech enthusiast and final-year Master's student in Digital Service Engineering based in France.<br/><br/>
            <em>(Ingénierie de Service Numérique)</em> <br/> <br/>
            <a href="#about" className="cta-button">About Me</a>
          </p>
        </div>

        <div className="image-section">
          <img src={profileGif} alt="Supipi at computer with cat" />
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
            I'm someone who loves turning imagination into digital reality. 
            I work across full-stack development, mobile applications, AI-based tools, web design and content creation. 
            I enjoy bringing ideas to life through clean design and smart development. 
            My journey has been shaped by a love for learning, collaborating across cultures, and building digital experiences that make a difference. 
            I'm constantly expanding my skills and exploring new ways to create impactful work.
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
                <img src={joggingIcon} alt="Jogging" />
                  <span>Jogging</span>
                </div>
                <div className="interest-box">
                <img src={sitarIcon} alt="Sitar" />
                  <span>Playing Sitar</span>
                </div>
                <div className="interest-box">
                <img src={frenchIcon} alt="French" />
                  <span>Learning French</span>
                </div>
                <div className="interest-box">
                <img src={travelIcon} alt="Travel" />
                  <span>Travel</span>
                </div>
                <div className="interest-box">
                <img src={musicIcon} alt="Music" />
                  <span>Music</span>
                </div>
                <div className="interest-box">
                  <img src={photographyIcon} alt="Photography" />
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
      <MyProjectsSection />
      <ContactSection />
      <Footer />

    </div>
  );
}

export default App;
