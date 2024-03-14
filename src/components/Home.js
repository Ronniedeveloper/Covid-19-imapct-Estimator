import Footer from './Footer.';
import FrpApk from './FrpApk';
import Welcome from './Welcome';

const Home = () => {
    return (
        <div className='main-container'>
            <Welcome />
            <FrpApk />
            <Footer />
        </div>
    );
}
 
export default Home;