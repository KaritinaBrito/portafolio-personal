import '../styles/Responsive.css';

const Responsive = ({typeStyle, image, demo, code}) => {
    return (
        <div className={typeStyle}>

            <div className='container-image'>
                <img src={image} alt="Project" />
            </div>

            <div className='container-text'>
                <div className='text__subtitle'>
                    <h3>#HTML   #CSS  #responsive</h3>
                    <h2>Recipe Blog</h2>
                </div>
                <div className='text_paragraph'>
                    <p>In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. </p>
                </div>
                <div className='buttons-links'>
                    <a href={demo} className='btn-demo'>Demo</a>
                    <a href={code} className='btn-code'>Code</a>
                </div>
            </div>

        </div>
    )
}

export default Responsive;