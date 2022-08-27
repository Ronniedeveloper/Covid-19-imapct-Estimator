import { useHistory } from 'react-router-dom';
import Service from "./Service";
import { FaHandshake } from 'react-icons/fa';
import LatestWork from './LatestWork';


const Home = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push('/contact');
    }
    
    return (
        <div className='main-container'>
            <div className="home-content">
                <div className="about-me-content">
                    <p className="greet">
                        <span>H</span>
                        <span>e</span>
                        <span>l</span>
                        <span>l</span>
                        <span>o</span>
                        <span className="g">G</span>
                        <span>u</span>
                        <span>y</span>
                        <span>s</span>
                        <span>!</span>
                    </p>
                    <h2>This is Gamulisa Ronald</h2>
                    <p className="about">
                        I'm a Full-stack Javascript developer but mainly focusing<br></br>
                        on React as Front-End developer for building interactive<br></br>
                        websites.
                    </p>
                    <button onClick={ handleClick }>
                        Hire Me<FaHandshake className='fa-handshake'/>
                    </button>
                </div>
                <div className="statistics">
                    <div className="projects">
                        <h1>10+</h1>
                        <p>Projects Completed</p>
                    </div>
                    <div className="clients">
                        <h1>10+</h1>
                        <p>Happy Clients</p>
                    </div>
                    <div className="awards">
                        <h1>10+</h1>
                        <p>Awards Archived</p>
                    </div>
                </div>
        </div>
        <Service />
        <LatestWork />
        </div>
    );
}
 
export default Home;