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
        e.target.classList.remove("is-invalid");
        e.target.classList.remove("is-valid");

    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name !== '' && this.state.salary !== '') {
            this.props.onAdd(this.state.name, this.state.salary)
            this.setState({
                name: '',
                salary: ''
            });
        } else {
            this.state.name === '' ? e.target.children[0].classList.add("is-invalid") : e.target.children[0].classList.add("is-valid");
            this.state.salary === '' ? e.target.children[1].classList.add("is-invalid") : e.target.children[1].classList.add("is-valid");
        }
    }

    render() {
        const {salary, name} = this.state;
        return (
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form 
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}
                    >
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
                    <button 
                        type="submit"
                        className="btn btn-outline-light btn-style">
                        Add
                    </button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;