import { Card } from "react-bootstrap"
import './About.css';

const About = () => {
    return (<div className="about-container">
        <Card className="about-card">
            <Card.Header><h3>About the project</h3></Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p>
                        {' '}
                        Completed Tasks: .{' '}

                    </p>

                </blockquote>
                <ol className="about-list">
                    <li>Listing close apprach objects</li>
                    <li>Adding the two pickers</li>
                    <li>Pagination</li>
                    <li>Add a field blank to be filled by the user</li>
                </ol>
            </Card.Body>
        </Card>
    </div>)
}
export default About