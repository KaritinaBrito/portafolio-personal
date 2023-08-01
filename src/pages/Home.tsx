import Article from '../components/Article';
import Experiences from '../components/Experiences';
import Github from '../components/Github';
import Hobbies from '../components/Hobbies';
import Perfil from '../components/Perfil';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import '../styles/Home.css'

const Home = () =>{
    return(
        <div className='homeMain' >
            <div className='perfil'>
                <Perfil nameClass="container-profile-hor"/>
            </div>
            <div className='projects'>
                <Projects typeStyle="projects-hor"/>
            </div>
            <div className='skills'>
                <Skills typeStyle="container-skills-ver"/>
            </div>
            <div className='hobbies'>
                <Hobbies typeStyle="hobbies-ver"/>
            </div>
            <div className='experiences'>
                <Experiences typeStyle="experiences-ver" />
            </div>
            <div className='github'>
                <Github />
            </div>
            <div className='article'>
                <Article typeStyle="container-article-hor"/>
            </div>
            <div className='footer'>
                <Footer />
            </div>
        
        </div>
    )

}

export default Home