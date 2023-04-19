import { FaCopyright,FaGithub,FaFacebook, FaInstagram,FaTwitter,FaLinkedin } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="copyright">
                <div className='copyright-icon'>
                    <FaCopyright className='fa-copyright'/>
                    <h1>Copyright</h1>
                </div>
                <p>All Right Reserved</p>
                <p>Product of 2022</p>
            </div>
            <div className='follow-me'>
                <h1>Follow me</h1>
                <div className='follow-details'>      
                    <Link to='https://github.com/Ronniedeveloper'>
                        <FaGithub color='indigo'className='github'/>
                    </Link>
                    <Link to='https://www.facebook.com/profile.php?id=100075241205617'>
                        <FaFacebook color='blue' className='fb'/>
                    </Link>
                    <Link to='https://www.instagram.com/p/ChRwgYtOUHd/?igshid=YmMyMTA2M2Y='>
                        <FaInstagram color='violet' className='instagram'/>
                    </Link>
                    <Link to='https://twitter.com/RonnieDev256?t=5Hey-xti7SYiCypHh0G3tg&s=09'>
                        <FaTwitter color='blue' className='twitter'/>
                    </Link>
                    <Link to='https://www.linkedin.com/in/ronnie-developer-7939a1248/'>
                        <FaLinkedin color='blue' className='twitter'/>
                    </Link>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;