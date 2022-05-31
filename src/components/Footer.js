import { FaCopyright,FaGithub,FaFacebook, FaInstagram,FaUserNinja, FaSearchLocation, FaGlobe } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className="footer">
            <div className="copyright">
                <FaCopyright className='fa-copyright'/> 
                <h1>Copyright</h1>
                <p>All Right Reserved</p>
                <p>Product of 2022</p>
            </div>
            <div className='follow-me'>
                <h1>Follow me</h1>
                <div className='follow-details'>      
                    <p><FaGithub color='indigo'/> Ronnie_Developer</p>
                    <p><FaFacebook color='blue'/> Ronnie_Developer</p>
                    <p><FaInstagram color='violet' title='Fuck Me'/> Ronnie_Developer</p>
                </div>
            </div>
            <div className="footer-content">
                <article>
                    <h1>Contact Me</h1>
                    <p><FaUserNinja color='black'/>: Ronnie Developer</p>
                    <p><FaSearchLocation color='orange'/>: ronniedeveloper256@gmail.com</p>
                    <p><FaGlobe color='blue'/>: ReactJs</p>
                </article>
            </div>
        </div>
    );
}
 
export default Footer;