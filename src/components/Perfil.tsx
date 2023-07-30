import ('../styles/Perfil.css');

const Perfil = ({nameClass}) => {
    return(
        <div className={nameClass}>
            <div className="container-profile__image">   
                <img src="../../src/assets/profile.jpg" alt="" />             
            </div>
            <div className="container-profile__info">
                <div className="information-title">
                    <div className="information-title__left">
                        <h2>Karen Brito</h2>
                        <p>Front-end developer</p>
                    </div>
                    <div className="information-title__right">
                        <div className='information-right'>
                            <img src="../src/assets/mail.svg" alt="mail" />
                            <p>karitinabrito@gmail.com</p>
                        </div>
                        <div className='information-right'>
                            <img src="../../src/assets/phone.svg" alt="phone" />
                            <p>(+603) 546 624 342</p>
                        </div>
                    </div>
                </div>
                <div className='information-paragraph'>
                    <p>Self-motivated developer, who is willing to learn and create outstanding UI applications.</p>                   
                    <p className='parag-invisible'>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. </p>
                </div>
            </div>
        </div>
    )
};

export default Perfil;