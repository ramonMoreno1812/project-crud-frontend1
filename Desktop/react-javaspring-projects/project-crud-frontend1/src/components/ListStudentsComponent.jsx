// this class allows us to display the data in our database as a table in our frontend(html, css).

import React, { Component } from 'react';
import StudentServices from '../services/StudentServices';

class ListStudentsComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            // empty student object to be populated
            students: []  
        }
        // bind this methods 
        this.addStudent = this.addStudent.bind(this);
        this.editStudent = this.editStudent.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);
        
    }

    componentDidMount(){
        // return all students then sets this state to that results data.
        StudentServices.getStudent().then((res) =>{
            this.setState({ students: res.data});
        });
    }

    // Handlers on click events!
    // add student handler
    addStudent(){
        this.props.history.push('/add-student/-1');
    }

    //view student
    viewStudent(id){
        this.props.history.push(`/view-student/${id}`);
    }

    // edit student
    editStudent(id){
        this.props.history.push(`/add-student/${id}`);
    }

    deleteStudent(id) {
        StudentServices.deleteStudent(id).then(res =>{
            this.setState({
                        students: this.state.students.filter(student => student.id !== id)
                    });
        });
    }
    
    render() {
        return (
            <div>
                <h2 className="text-center">Student List</h2>
                <button className="btn btn-primary" onClick={this.addStudent}>Add Student</button>
                <break></break>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Student First Name</th>
                                <th>Student Last Name</th>
                                <th>Student Email Id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.students.map(
                                    student => 
                                    <tr key = {student.id}>
                                        <td>{student.firstName}</td>
                                        <td>{student.lastName}</td>
                                        <td>{student.emailId}</td>
                                        <td>
                                            <button onClick={ () => this.editStudent(student.id)} 
                                            className="btn btn-info">Update</button>
                                            <button style={{marginLeft: "10px"}} onClick={() => this.deleteStudent(student.id)} 
                                            className="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListStudentsComponent;
