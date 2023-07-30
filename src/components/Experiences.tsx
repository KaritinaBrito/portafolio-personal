import '../styles/Experiences.css';

const Experiences= ({typeStyle}) => {

    return(
        <div className={typeStyle}>
            
            <h2 className='title-main'>Experiences</h2>
            
            <div className='cards-container'>
                
                <div className='single-card'>
                    <div className='logo'>
                        <img src="../../src/assets/adidas.png" alt="adidas" />
                    </div>
                    <div className='text-card'>
                        <div className='text-card__title'>
                            <p>Feb 2017 - Current</p>
                            <h2>Front-end developer</h2>
                        </div>
                        <div className='text-card__body'>
                            <p>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p>
                        </div>
                    </div>
                </div>

                <div className='single-card'>
                    <div className='logo'>
                        <img src="../../src/assets/h&m.png" alt="h&m" />
                    </div>
                    <div className='text-card'>
                        <div className='text-card__title'>
                            <p>Aug 2016 - Feb 2018</p>
                            <h2>Full-stack developer</h2>
                        </div>
                        <div className='text-card__body'>
                            <p>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p>
                        </div>
                    </div>
                </div>

                <div className='single-card'>
                    <div className='logo'>
                        <img src="../../src/assets/nivea.png" alt="adidas" />
                    </div>
                    <div className='text-card'>
                        <div className='text-card__title'>
                            <p>Jun 2015 - Aug 2016</p>
                            <h2>Junior front-end developer</h2>
                        </div>
                        <div className='text-card__body'>
                            <p>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p>
                        </div>
                    </div>
                </div>


            </div>            
        </div>
    )
}

export default Experiences;