import '../styles/Article.css';

const Article = ({typeStyle}) => {
    return(
        <div className={typeStyle}>
                <div className='container-text'>
                    <h3>Blog</h3>
                    <h2>How to organize your CSS</h2>
                    <div className='text-p'>
                        <p>In this article I tell the story about Proin eu justo sit amet lacus bibendum       tincidunt. Vivamus non volutpat nisl, a luctus mi.</p>
                        <p>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p>
                    </div>
                    
                </div>
                <div className='container-image'>
                    <img src="../../src/assets/office.jpg" alt="Office" />
                </div>
                <div className='contaienr-link'>
                    <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Organizing">dev.to</a>
                </div>
        </div>
    )
};

export default Article;