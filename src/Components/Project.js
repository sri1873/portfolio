import React from "react";
import 'O:/Portfolio/portfolio/src/assets/styles/project.css';
const Project = () => {
    return (
        <div className="project">
            <h2>Projects</h2>
            <div className="project-cards">

                <div className="project-card card1">
                    <h3>Inverted</h3>
                    <div className="stack">
                        <span className="stack-item">Java</span>
                        <span className="stack-item">Information Retrieval</span>
                        <span className="stack-item">Lucene</span>
                    </div>
                    <p>A custom Information retrieval system implemented in Java to understand how search engines like Lucene and elastic search work internally.  This project focuses on core IR concepts: Inverted indexing, positional postings, BM-25 & TF-IDF ranking, boolean and phrase search - also explores segmentation and index persistence similar to Lucene.</p>
                    <a href="https://github.com/sri1873/Inverted" target="_blank" rel="noopener noreferrer"><button type="button" className="project-link">View Project</button></a>
                </div>
                <div className="project-card card2">
                    <h3>League</h3>
                    <div className="stack">
                        <span className="stack-item">React</span>
                        <span className="stack-item">Redux</span>

                    </div>
                    <p>The League is a user-friendly platform developed to streamline the process of booking sports facilities at Woxsen University.  It is equipped to handle race conditions and bottlenecks during peak booking hours.</p>
                    <a href="https://github.com/sri1873/League" target="_blank" rel="noopener noreferrer"><button type="button" className="project-link">View Project</button></a>
                </div>
                <div className="project-card card3">
                    <h3>Open Source Contributions</h3>
                    <ul>
                        <li><a href="https://github.com/spring-io/start.spring.io/pull/2010" target="_blank" rel="noopener noreferrer" className="pr-link">PR#2010</a> - Spring starter Website layout change</li>
                        <li><a href="https://github.com/spring-io/start.spring.io/pull/2020" target="_blank" rel="noopener noreferrer" className="pr-link">PR#2020</a> - Fixed SASS warnings</li>
                        <li><a href="https://github.com/spring-io/start.spring.io/pull/2009" target="_blank" rel="noopener noreferrer" className="pr-link">PR#2009</a> - Distributed tracing dependency change</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Project;