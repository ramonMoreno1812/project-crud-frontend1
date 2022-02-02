/* using axios as the http request, this class has methods that allow for access to our spring
   backend by using a base_url.
*/

import axios from "axios"; // import axios http request provider

const STUDENT_API_BASE_URL = "http://localhost:8080/api/v1/students";// connect to port where java controller is

class StudentServices{

    // get student http requets
    getStudent(){
        // returns localhost:8080/api/v1/students from spring controller 
        return axios.get(STUDENT_API_BASE_URL);
    }

    createStudent(student){
        // returns base url and passes in student object as an argument.
        return axios.post(STUDENT_API_BASE_URL, student);
    }

    // get student by id
    getStudentById(id){
        // returns http get request with localhost:8080/api/v1/{id} for spring param variable
        return axios.get(STUDENT_API_BASE_URL + '/' + id);
    }

    // update student method takes in student object and his/her id
    updateStudent(student, id){

        return axios.put(STUDENT_API_BASE_URL + '/' + id, student);
    }

    deleteStudent(id){
        return axios.delete(STUDENT_API_BASE_URL + '/' + id);
    }

}

export default new StudentServices();