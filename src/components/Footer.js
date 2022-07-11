import {
    FaGithubAlt,
    FaLinkedinIn,
    FaEnvelope
  } from "react-icons/fa";

const Footer = () => {
    return (
        // la etiqueta deberia ser footer
        <div className="footer">
            <p> Hecho por Barbara Krzisnik para ADA ITW</p>
            <div>
                {/* faltan aria labels, no olvides accesibilidad! */}
                <a href="https://github.com/barbarakrzisnik"><FaGithubAlt /></a>
                <a href="https://www.linkedin.com/in/barbara-krzisnik/"><FaLinkedinIn /></a>
                <a href="mailto:barbarakrzisnik3@.com"><FaEnvelope /></a>
            </div>
        </div>
    )
}

export default Footer