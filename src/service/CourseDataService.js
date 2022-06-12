import axios from "axios"

const INSTRUCTOR = 'in28munites'
const COURSE_API_URL = 'http://localhost:8081'
const INSTRUCTOR_API_URL = `${COURSE_API_URL}`
class CourseDataService{

    retrieveAllCourses(name){
        return axios.get(`${INSTRUCTOR_API_URL}/courses`);

    }

}

export default CourseDataService;