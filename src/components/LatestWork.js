import work from '../images/latestwork.jpg'
import forms from '../images/login_forms.jpg'
import landing from '../images/Landing.jpg'
import { Link } from 'react-router-dom';

const MyLatestWork = () => {
    return (
        <div className="latest-work">
            <h1>My Latest Work</h1>
            <div className="image">
                <div className='about-work'>
                    <h3>Personal Portifolio</h3>
                    <Link to="https://github.com/Ronniedeveloper">
                        <button className='source-code'>Source Code</button>
                    </Link>
                </div>
                <div className='images'>
                    <img src={work} width={300} height={150} alt=""/>
                    <img src={forms} width={300} height={150} alt=""/>
                    <img src={landing} width={300} height={150} alt=""/>
                </div>
            </div>
        </div>
    );
}
 
export default MyLatestWork;