import gilber from "../assets/gilber.png"

const AboutPage = () => {
    return (
        <div className="about-page">
            <div className="about-image">
                <img 
                    src={gilber}
                    alt="Gilber Chen" 
                    style={{
                        width: '100%',
                        maxWidth: '300px', 
                        borderRadius: '15em', 
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}
                />
            </div>
            <div className="about-text">
                <h1>About Me</h1>
                <p>
                    I’m <strong>Gilber Chen</strong>. I was born in Taiwan and later volunteered in Manchester, England, where I dedicated two years to serving others and developing my leadership and communication skills. Following this experience, I moved to the United States to pursue higher education. I graduated from Brigham Young University - Idaho with a Bachelor of Science in Software Engineering, complemented by a minor in Computer Information Technology.
                </p>
                <p>Some highlights of my experience include:</p>
                <ul>
                    <li>
                        <strong>Taiwanese Roots:</strong> Born and raised in Taiwan, bringing a global perspective to my work. Fluent in Mandarin Chinese, allowing me to effectively communicate in both English and Chinese.
                    </li>
                    <li>
                        <strong>Leadership Experience:</strong> Guided teams and enhanced cross-cultural communication skills as a project lead in BYU-I tech support.
                    </li>
                    <li>
                        <strong>Academic Excellence:</strong> Graduated with a strong foundation in software engineering and information technology, equipped to tackle complex challenges.
                    </li>
                    <li>
                        <strong>Technical Proficiency:</strong> Experienced in PHP, JavaScript, networking, ITIL practices, and backend development.
                    </li>
                    <li>
                        <strong>Problem Solver:</strong> Skilled in troubleshooting complex IT issues and resolving unexpected challenges efficiently.
                    </li>
                    <li>
                        <strong>Focus on Quality:</strong> My background in software testing and SQA ensures that I always aim for the best outcomes.
                    </li>
                    <li>
                        <strong>UX Design Advocate:</strong> Passionate about creating accessible and impactful experiences for all users.
                    </li>

                </ul>
                <p>
                    Other than working and studying, I enjoy learning new technologies and building my own apps. I also love playing basketball and traveling, as it allows me to experience different cultures and lifestyles. Lastly, I have a passion for photography, capturing moments to record my life.
                </p>
                <p>
                    Thank you for stopping by! I hope you find value in what I share here and join me in the journey 
                    of learning and growth.
                </p>
            </div>
        </div>
    );
}

export default AboutPage;
