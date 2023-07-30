import '../styles/Hobbies.css';

const Hobbies= ({typeStyle}) => {

    return(
        <div className={typeStyle}>
            <h2>Hobbies</h2>

            <div className='cards-experiences'>

                <div className='single-experience'>
                    <div className='card-image'>
                        <img src="../../src/assets/cook.jpg" alt="cooking" />
                    </div>
                    <div className='card-text'>
                        <h3>Cooking</h3>
                        <p>Quisque feugiat malesuada molestie.</p>
                    </div>
                </div>

                <div className='single-experience'>
                    <div className='card-image'>
                        <img src="../../src/assets/read.jpg" alt="reading" />
                    </div>
                    <div className='card-text'>
                        <h3>reading</h3>
                        <p>Quisque feugiat malesuada molestie.</p>
                    </div>
                </div>

                <div className='single-experience'>
                    <div className='card-image'>
                        <img src="../../src/assets/walk.jpg" alt="walking" />
                    </div>
                    <div className='card-text'>
                        <h3>Walking</h3>
                        <p>Quisque feugiat malesuada molestie.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hobbies;