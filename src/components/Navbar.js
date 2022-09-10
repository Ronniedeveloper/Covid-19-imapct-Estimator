import { Link } from "react-router-dom";
import { FaHome,
         FaLaptopCode, 
         FaUserNinja, 
         FaSearchLocation
        } from "react-icons/fa"
const Navbar = () => {
    return (
        <div className="nav-bar">
            <div className="title">
                <Link to="/">
                <h3>GR</h3>
                <h2>Gamulisa Ronald</h2>
                </Link>
            </div>
            
            <nav className="nav-links">
                <Link to="/">
                    <FaHome className="fa-home"/>
                    <span>Home</span>
                </Link>
                <Link to="/service">
                    <FaLaptopCode className="fa-service"/>
                    <span>Service</span>
                </Link>
                <Link to="/about">
                    <FaUserNinja className="fa-about"/>
                    <span>About Me</span>
                </Link>
                <Link to="/contact" className="contact">
                    <FaSearchLocation className="fa-contact"/>
                    <span>Contact</span>
                </Link>
            </nav>
        </div>
    );
}
 
export default Navbar;