import { Link } from 'react-router-dom';
import Perfil from "../components/Perfil";
import Responsive from "../components/Responsive";
import '../styles/AllResponsive.css';
import Footer from '../components/Footer';

const AllResponsive = () => {
    return (
        <div className="allResponsive">
            <Perfil nameClass={'container-profile-hor'}/>
            <div className="container-responsive-all">
                <Responsive 
                    typeStyle={'container-main__ver'}
                    image={"../../src/assets/checkoutDesktop.png"}
                    demo={'https://karitinabrito.github.io/Checkout-page/'}
                    code={'https://github.com/KaritinaBrito/Checkout-page'}
                />
                <Responsive 
                    typeStyle={'container-main__ver'} 
                    image={"../../src/assets/project1.png"}
                    demo={'https://karitinabrito.github.io/Recipe-page/'}
                    code={'https://github.com/KaritinaBrito/Recipe-page'}
                />
                <Responsive 
                    typeStyle={'container-main__ver'} 
                    image={"../../src/assets/projectEdie.png"}
                    demo={'https://karitinabrito.github.io/edie-homepage/'}
                    code={'https://github.com/KaritinaBrito/edie-homepage'}
                />
            </div>
            <Footer />

            <div className="back">
                <Link to={"/"}><img src="../../src/assets/back.svg" alt="back" /></Link>
            </div>
        </div>
    )
}

export default AllResponsive;