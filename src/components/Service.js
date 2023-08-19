import {  FaGlobe, FaUikit, FaMobileAlt, FaChalkboardTeacher, FaRegArrowAltCircleRight } from 'react-icons/fa';

const Service = () => {
    return (
        <div className="service">
            <div className="service-text">
                <h1>Service Offered</h1>
                <p>
                    I'm a Full-stack Javascript developer but mainly focusing<br></br>
                    on React as Front-End developer for building interactive<br></br>
                    websites and thus i offer the following srevices....<br></br>
                </p>
                <FaRegArrowAltCircleRight size='70'/>
            </div>
            <div className="service-content">
                <div className="column-1">
                    <div className="website">
                        <div className="icon-web"><FaGlobe color='aqua'/></div>
                        <h3>Web Development</h3>
                    </div>                
                    <div className="ux">
                        <div className="icon-ux"><FaUikit color='blue'/></div>
                        <h3>UI/UX Design</h3>
                    </div>
                </div>
                <div className="column-2">
                    <div className="icon-mockup"><FaMobileAlt color='orange'/></div>
                    <div className="mockup">
                        <h3>Mockup Design</h3>
                    </div>
                    <div className="teacher">
                        <div className="icon-teacher"><FaChalkboardTeacher color='indigo'/></div>
                        <h3>Website Teaching</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Service;
