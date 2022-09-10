import { FaCopyright,FaGithub,FaFacebook, FaInstagram,FaTwitter,FaLinkedin } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className="footer">
            <div className="copyright">
                <div className='copyright-icon'>
                    <h1>Copyright</h1>
                    <FaCopyright className='fa-copyright'/>
                </div>
                <p>All Right Reserved</p>
                <p>Product of 2022</p>
            </div>
            <div className='follow-me'>
                <h1>Follow me</h1>
                <div className='follow-details'>      
                    <a href='https://github.com/Ronniedeveloper'>
                        <FaGithub color='indigo'className='github'/>
                    </a>
                    <a href='https://www.facebook.com/profile.php?id=100075241205617'>
                        <FaFacebook color='blue' className='fb'/>
                    </a>
                    <a href='https://www.instagram.com/p/ChRwgYtOUHd/?igshid=YmMyMTA2M2Y='>
                        <FaInstagram color='violet' className='instagram'/>
                    </a>
                    <a href='https://twitter.com/RonnieDev256?t=5Hey-xti7SYiCypHh0G3tg&s=09'>
                        <FaTwitter color='blue' className='twitter'/>
                    </a>
                    <a href='https://www.linkedin.com/in/ronnie-developer-7939a1248/'>
                        <FaLinkedin color='blue' className='twitter'/>
                    </a>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;