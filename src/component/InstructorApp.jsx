import ListCourseComponent from "./ListCourseComponent";

const { Component } = require("react");

class InstructorApp extends Component{
    render(){
        return(
            <div>

                <h1>Instructor Application</h1>
                <ListCourseComponent/>
            </div>
        );
    }
}

export default InstructorApp;