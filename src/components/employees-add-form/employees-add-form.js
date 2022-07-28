import { Component } from "react";
import "./employees-add-form.css";

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            salary:''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {salary, name} = this.state;
        return (
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form className="add-form d-flex">
                    <input 
                        type="text" 
                        className="form-control new-post-label"
                        placeholder="Enter the name"
                        name="name"
                        value={name}
                        onChange={this.onValueChange}/>
                    <input 
                        type="number" 
                        className="form-control new-post-label" 
                        placeholder="Salary in USD ($)"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange}/>
                    <button className="btn btn-outline-light btn-style">
                        Add
                    </button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;