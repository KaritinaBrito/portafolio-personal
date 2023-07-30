import '../styles/Working.css';
import { Link } from 'react-router-dom';

const Working = () => {
    return(
        <div >
            <h1>Sorry, we are working!</h1>
            <div id="working"></div>
            <div className="back">
            <Link to={"/"}><img src="../../src/assets/back.svg" alt="back" /></Link>
            </div>
        </div>
    )
}

export default Working;