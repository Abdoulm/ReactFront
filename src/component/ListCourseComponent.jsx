import { Component } from "react";

class ListCourseComponent extends Component{
    render(){
        return(

            <div className="container">
                <h3>All Courses</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>1</tr>
                            <td>Learn Full stack with Spring boot and React js</td>
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default ListCourseComponent;