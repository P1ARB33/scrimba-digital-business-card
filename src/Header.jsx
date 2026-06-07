import ProfilePhoto from "../images/headshot-photo.jpg"
import GitHubLogo from "../images/github-logo.png"
import LinkedInLogo from "../images/linkedin-app-white-icon.png"

export default function Header() {
    return (
        <header>
            <img src={ProfilePhoto} alt="Patrick's headshot" className="headshot" />
            <h1 className="profile-name">Patrick Arevalo</h1>
            <h2 className="profession-title">Software Developer</h2>
            <div className="button-container">
                <a href="https://github.com/P1ARB33" className="github-button">
                    <img src={GitHubLogo} alt="GitHub Logo" className="button-icon" />
                    <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/patrick-raymond-arevalo-b9a718170" className="linkedin-button">
                    <img src={LinkedInLogo} alt="LinkedIn Logo" className="button-icon" />
                    <span>LinkedIn</span>
                </a>
            </div>
        </header>
    )
}