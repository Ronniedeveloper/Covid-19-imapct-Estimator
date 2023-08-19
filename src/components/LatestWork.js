import work from '../images/latestwork.jpg'
import forms from '../images/login_forms.jpg'
import landing from '../images/Landing.jpg'
import animation from '../images/animation.jpg'
import { Zoom } from 'react-reveal'

import { Link } from 'react-router-dom';

const MyLatestWork = () => {
    return (
        <div className="latest-work">
            <h1>My Latest Work</h1>
            <div className="image">
                <div className='about-work'>
                    <h3>Personal Portifolio</h3>
                    <Link to='https://github.com/Ronniedeveloper'>
                        <button className='source-code'>Source Code</button>
                    </Link>
                </div>
                <div className='images'>
                    <Zoom>
                        <img src={work} width={300} height={150} alt=""/>
                    </Zoom>
                    <Zoom>
                        <img src={forms} width={300} height={150} alt=""/>
                    </Zoom>
                    <Zoom>
                        <img src={landing} width={300} height={150} alt=""/>
                    </Zoom>
                    <Zoom>
                        <img src={animation} width={300} height={150} alt=""/>
                    </Zoom>
                </div>
            </div>
        </div>
    );
}
 
export default MyLatestWork;