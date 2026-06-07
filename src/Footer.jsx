import InstagramLogo from "../images/instagram-icon-footer.png"
import GitHubLogo from "../images/github-icon-footer.png"

export default function Footer() {
    return (
        <footer className="socials-container">
            <a href="https://www.instagram.com/patrickrba_">
                <img src={InstagramLogo} alt="Instagram link"/>
            </a>
            <a href="https://github.com/P1ARB33">
                <img src={GitHubLogo} alt="GitHub Link"/>
            </a>
        </footer>
    )
}