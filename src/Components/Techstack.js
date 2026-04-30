import React from "react";
import 'O:/Portfolio/portfolio/src/assets/styles/techstack.css';
import StackIcon from "tech-stack-icons";



const Techstack = () => {

    const [activeTab, setActiveTab] = React.useState('current');
    return (
        <div className="techstack">
            <h2>Tech Stack</h2>
            <div className="tabs-container">

                <div className="tab">
                    <span>Technologies I work with</span>
                    <div className="tab-buttons">
                        <button className={`tab-links ${activeTab === 'frontend' ? 'active' : ''}`} onClick={() => setActiveTab('frontend')}>Frontend</button>
                        <button className={`tab-links ${activeTab === 'backend' ? 'active' : ''}`} onClick={() => setActiveTab('backend')}>Backend</button>
                        <button className={`tab-links ${activeTab === 'tools' ? 'active' : ''}`} onClick={() => setActiveTab('tools')}>Tools</button>
                        <button className={`tab-links ${activeTab === 'current' ? 'active' : ''}`} onClick={() => setActiveTab('current')}>Currently Learning</button>
                    </div>
                </div>
                <div className={`tab-content ${activeTab === 'frontend' ? 'active' : ''}`}>
                    <div style={{ width: 60, height: 60 }}>
                    </div>
                    <div className="stack-item">
                        <StackIcon name="react" />
                        <p>React</p>
                    </div>
                    <div className="stack-item">
                        <StackIcon name="redux" />
                        <p>Redux</p>
                    </div>
                    <div className="stack-item">
                        <StackIcon name="js" />
                        <p>JavaScript</p>
                    </div>
                    <div className="stack-item">
                        <StackIcon name="typescript" />
                        <p>TypeScript</p>
                    </div>
                    <div className="stack-item">
                        <StackIcon name="css3" />
                        <p>CSS</p>
                    </div>
                    <div className="stack-item">
                        <StackIcon name="sass" />
                        <p>Sass</p>
                    </div>
                </div>

                <div className={`tab-content ${activeTab === 'backend' ? 'active' : ''}`}>
                    <div className="stack-item">
                        <StackIcon name="java" />
                        <p>Java</p>
                    </div>
                    <div className="stack-item">
                        <StackIcon name="spring" />
                        <p>Spring</p>
                    </div>
                    <div className="stack-item">
                        <StackIcon name="flask" />
                        <p>Flask</p>
                    </div>
                    <div className="stack-item">
                        <StackIcon name="mongodb" />
                        <p>MongoDB</p>
                    </div>
                    <div className="stack-item">
                        <StackIcon name="postgresql" />
                        <p>PostgreSQL</p>
                    </div>

                </div>

                <div className={`tab-content ${activeTab === 'tools' ? 'active' : ''}`}>
                    <div className="stack-item">
                        <StackIcon name="grafana" />
                        <p>Grafana</p>
                    </div>
                    <div className="stack-item">
                        <StackIcon name="postman" />
                        <p>Postman</p>
                    </div>
                    <div className="stack-item">
                        <StackIcon name="git" />
                        <p>Git</p>
                    </div>
                    <div className="stack-item">
                        <StackIcon name="docker" />
                        <p>Docker</p>
                    </div>
                    <div className="stack-item">
                        <StackIcon name="oauth" />
                        <p>OAuth</p>
                    </div>
                </div>
                <div className={`tab-content ${activeTab === 'current' ? 'active' : ''}`}>

                    <div className="stack-item">
                        <StackIcon name="redis" />
                        <p>Redis</p>
                    </div>
                    <div className="stack-item">
                        <StackIcon name="n8n" />
                        <p>n8n</p>
                    </div>
                    <div className="stack-item">
                        <StackIcon name="swift" />
                        <p>Swift</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Techstack;