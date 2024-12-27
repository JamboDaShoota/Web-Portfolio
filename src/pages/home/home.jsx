import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <div className="home f-wh-per flex">
      <div className="center fl-c-c-r">
        <div className="left-center">
          <div className="greeting">
            <p>
              Hey!
              <br />
              <span id="level2">
                {" "}
                I&#39;m <span id="name">Jamario</span>
              </span>
              .<br />
              <span id="bigger">And I&#39;m a</span>
              <span id="job"> Software Engineer</span>
              <span id="exclaim">!</span>
            </p>
          </div>
          <div className="buttons">
            <a href="" className="btn btn-1">
              Resume
            </a>
            <a href="" className="btn btn-2">
              Message
            </a>
          </div>
          <div className="info">
            <div className="socials">
              <a href="" className="icon">
                <FontAwesomeIcon icon={faDiscord} />
              </a>
              <a href="" className="icon">
              <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="" className="icon">
              <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="" className="icon">
              <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
            <div className="email">Email : Jamariow11@gmail.com </div>
          </div>
        </div>
        <div className="right-center">
          <div className="top">
            <img src="me.png" alt="Picture of me" />
          </div>
          <div className="bottom"></div>
        </div>
      </div>
      <footer className="fl-c-c">
        <h1>
          “Great things come from hard work and perseverance. No excuses. - Kobe
          Bryant“
        </h1>
      </footer>
    </div>
  );
}

export default Home;
