import { useState } from "react";
import {FaBars} from "react-icons/fa"
const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen((open) => !open);
    };
    return(
        <nav className="dvs_header">
            <ul className="nav_wrapper d-flex wrap justify-between align-center">
                <li>
                    <h4>RONNIE TECH</h4>
                </li>
                <li className="dvs_header_trigger" onClick={toggleMenu}>
                    <FaBars className="fa-bars"/>
                </li>
                <li className={`dvs_header_menuItems ${isOpen ? "is-open" : ""}`}>
                    <ul>
                        <li className="nav_links d-flex justify-center wrap">
                            <a href="/">Home</a>
                            <a href="/about">About</a>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar;