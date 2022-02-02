import React, { Component } from 'react'
import StudentServices from '../services/StudentServices';

class CreateStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,// get id from route
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateStudent = this.saveOrUpdateStudent.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id == -1){
            
            return

        }else{

            StudentServices.getStudentById(this.state.id).then( (res) =>{
                let student = res.data;
                this.setState({firstName: student.firstName,
                    lastName: student.lastName,
                    emailId : student.emailId
                });
            });
        }        
    }

    saveOrUpdateStudent = (e) => {
        e.preventDefault();
        let student = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('student => ' + JSON.stringify(student));

        // step 5
        if(this.state.id == -1){
            StudentServices.createStudent(student).then(res =>{
                this.props.history.push('/students');
            });
        }else{
            StudentServices.updateStudent(student, this.state.id).then( res => {
                this.props.history.push('/students');
            });
        }
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }

    cancel(){
        this.props.history.push('/students');
    }

    getTitle(){
        if(this.state.id == -1){
            return <h3 className="text-center">Add Student</h3>
        }else{
            return <h3 className="text-center">Update Student</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateStudent}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateStudentComponent;





















// import React, { Component } from 'react';
// import StudentServices from '../services/StudentServices';

// class CreateStudentComponent extends Component {

//     constructor(props) {
//         super(props)
    
//         this.state = {
//              id: this.props.match.params.id,
//              firstName: "",
//              lastName: "",
//              emailId: ""
//         }
//         // bind handler methods to this instance of the object.
//         this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
//         this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
//         // this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
//         this.saveStudent = this.saveStudent.bind(this);
//     }

//     componentDidMount(){
//         if(this.state.id === '_add'){
//             return
//         } else{
//             StudentServices.getStudentById(this.state.id).then( (res) =>{
//                 let student = res.data;
//                 this.setState({
//                     firstName: student.firstName,
//                     lastName: student.lastName,
//                     emailId: student.emailId
//                 });
//             });
//         }
//     }

//     // save student
//     saveStudent = (e) => {
//         e.preventDefault();

//         let student = {
//             firstName: this.state.firstName, 
//             lastName: this.state.lastName, 
//             emailId: this.state.emailId
//         };
//         console.log('student => ' + JSON.stringify(student));

//         if(this.state.id === '_add'){
//             StudentServices.createStudent(student).then(res =>{
//                 this.props.history.push('/students');
//             });
//         } else{
//             StudentServices.updateStudent(student, this.state.id).then(res =>{
//                 this.props.history.push('/students');
//         });
//     }
// }

//     //handler methods
//     changeFirstNameHandler = (event) =>{
//         //get the first name from my form and set this state to it, this is an event method
//         this.setState({firstName: event.target.value});
//     }

//     changeLastNameHandler = (event) => {
//         this.setState({lastName: event.target.value});
//     }

//     changeEmailIdHandler = (event) => {
//         this.setState({emailId: event.target.value});
//     }

//     // go back
//     goBack(){
//         this.props.history.push('/students');
//     }

//     getTitle(){
//         if(this.state.id === '_add'){
//             return <h3 className="text-center">Add Student</h3>
//         } else{
//             return <h3 className="text-center">update Student</h3>
//         }
//     }
    
//     render() {
//         return (
//             <div>
//                 <br></br>
//                 <div className="container">
//                     <div className="row">
//                         <div className="card col-md-6 offset-md-3 offset-md-3">
//                             {
//                                 this.getTitle()
//                             }
//                             <div className="card-body">
//                                 <form>
//                                     <div className="form-group">
//                                         <label>First Name</label>
//                                         <input placeholder="First Name" name="firstName" className="form-control"
//                                             value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
//                                     </div>
//                                     <div className="form-group">
//                                         <label>Last Name</label>
//                                         <input placeholder="Last Name" name="lastName" className="form-control"
//                                             value={this.state.lastName} onChange={this.changeLastNameHandler}/>
//                                     </div>
//                                     <div className="form-group">
//                                         <label>Email</label>
//                                         <input placeholder="email" name="emailId" className="form-control"
//                                             value={this.state.emailId} onChange={this.changeEmailIdHandler}/>
//                                     </div>

//                                     <button className="btn btn-success" onClick={this.saveStudent}>Save</button>
//                                     <button className="btn btn-danger" onClick={this.goBack.bind(this)} style={{marginLeft: "10px"}}>Back</button>
//                                 </form>
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default CreateStudentComponent;