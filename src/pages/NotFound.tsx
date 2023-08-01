import { Link } from 'react-router-dom';
import  '../styles/NotFound.css';

const NotFound = () => {

    return(
        <div className='notFound'>        
            <div className="back">
            <Link to={"/"}><img src="../../src/assets/back.svg" alt="back" /></Link>
            </div>
        </div>
    )
};

export default NotFound;