import { Link } from 'react-router-dom';
import '../styles/Projects.css';

const Projects = ({typeStyle}) => {
    return(
        <div className={typeStyle}>
            <h2>Projects</h2>
            <div className='container-buttons'>
                <Link to={"/working"} className='btnLink'>React</Link>
                <Link to={"/working"} className='btnLink'>Vue</Link>
                <Link to={"/projectsResponsive"} className='btnLink'>Responsive</Link>
            </div>
        </div>
    )
}

export default Projects;