export default function Header() {
    return (
        <header>
            <img src="../images/headshot-photo.jpg" alt="Patrick's headshot" className="headshot" />
            <h1 className="profile-name">Patrick Arevalo</h1>
            <h2 className="profession-title">Software Developer</h2>
            <div className="button-container">
                <a href="https://github.com/P1ARB33" className="github-button">
                    <img src="../images/github-logo.png" alt="GitHub Logo" className="button-icon" />
                    <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/patrick-raymond-arevalo-b9a718170" className="linkedin-button">
                    <img src="../images/linkedin-app-white-icon.png" alt="LinkedIn Logo" className="button-icon" />
                    <span>LinkedIn</span>
                </a>
            </div>
        </header>
    )
}