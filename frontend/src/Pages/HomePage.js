import homevideo from '../assets/homevideo.mp4'
import {useNavigate } from 'react-router-dom';
const HomePage = () => {
    const navigate = useNavigate();
    return (
        <div className="home-page" >
            <div className='background-video'>
                <video src={homevideo} autoPlay loop>
                </video>    
            </div>
            <div className='home-text'>
                {/* Hero Section */}
                <div className="hero-section">
                    <div className="hero-content">
                        <h1>Hello, I'm Gilber Chen</h1>
                        <p>Life’s journey has taken me through diverse travels, software engineering challenges, and project management successes. Each step has shaped my adaptability, problem-solving skills, and leadership abilities. Join me as I share stories, insights, and lessons from this path. Feel free to engage, leave comments, and like my articles!</p> 
                        <button  onClick={()=>navigate('/articles')}>Explore My Blog</button>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default HomePage;
