import githubLogo from '../assets/icons/github.svg';
import linkedinLogo from '../assets/icons/linkedin.svg'
import leetcodelogo from '../assets/icons/leetcode.png';
import hackerranklogo from '../assets/icons/hackerrank.png';
import '../assets/styles/footprint.css';

const socialInfo = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ks-srikumar/', logo: linkedinLogo, id: '@ks-srikumar' },
    { name: 'GitHub', url: 'https://github.com/sri1873', logo: githubLogo, id: '@sri1873' },
    { name: 'Leetcode', url: 'https://leetcode.com/u/kssrikumar180703/', logo: leetcodelogo, id: '@kssrikumar180703' },
    { name: 'Hackerrank', url: 'https://www.hackerrank.com/profile/kssrikumar180703', logo: hackerranklogo, id: '@kssrikumar180703' },
]


const Footprint = () => {
    return (
        <div className="footprint-container">
            <div className="footprint">
                <h1>My Digital Footprint</h1>
                <div className="socials">
                    {socialInfo.map((social) => (
                        <a href={social.url} className="social-link" key={social.name} target="_blank" rel="noopener noreferrer">
                            <img src={social.logo} alt={social.name} />
                            <div className="details">
                                <span>{social.name}</span>
                                <span>{social.id}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footprint;