import '../styles/Skills.css';

const Skills = ({typeStyle}) => {

    return(
        <div className={typeStyle}>

            <div className='container-title'>
                <h2>FRONT END</h2>
            </div>
            <div className='container-body'>

                <div className='body-skills'>

                    <div className='skill-single'>
                        <p>React</p>
                        <div className='advance-bar'>
                            <div id='react'></div>
                        </div>
                    </div>

                    <div className='skill-single'>
                        <p>Javascript</p>
                        <div className='advance-bar'>
                            <div id='javascript'></div>
                        </div>
                    </div>

                    <div className='skill-single'>
                        <p>CSS</p>
                        <div className='advance-bar'>
                            <div id='css'></div>
                        </div>
                    </div>
                </div>
                <div className='body-skills'>
                    <div className='skill-single'>
                        <p>Vue</p>
                        <div className='advance-bar'>
                            <div id='vue'></div>
                        </div>
                    </div>
                    <div className='skill-single'>
                        <p>Redux</p>
                        <div className="advance-bar">
                            <div id='redux'></div>
                        </div>
                    </div>
                    <div className='skill-single'>
                        <p>React Native</p>
                        <div className='advance-bar'>
                            <div id='react-native'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Skills;