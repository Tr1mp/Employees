import { Component } from "react";

import "./app.css";
import AppInfo from "../app-info/app-info";
import AppFilter from "../app-filter/app-filter";
import SearchPanel from "../search-panel/search-panel";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Guthor Lefford', salary: 1000, cake: true, id: 1},
                {name: 'Della Lincoln', salary: 1200, cake: false, id: 2},
                {name: 'Nashi Temony', salary: 800, cake: false, id: 3},
            ]
        }
    }
    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter((item => item.id !== id))
            }
                
        });
    }
    findMax = (data) => {
        let max = data[0].id;
        data.forEach(obj => {
            if (max < obj.id) {
                max = obj.id;
            }
        });
        return max + 1;
    }
    addItem = (name, salary) => {
        this.setState(({data}) => {
            const newItem = {
                name, 
                salary,
                increase: false,
                id: this.findMax(data)
            }
            // const newArr = [...data, newItem];
            return {
                data: data.concat(newItem)
                // data: data.concat({
                //     name, 
                //     salary,
                //     increase: false,
                //     id: this.findMax(data)
                // })
                // data: newArr
            }
        });
    }
    render() {
        const {data} = this.state;
        // const {deleteItem, addItem} = this.props;
        return (
            <div className='app'>
                <AppInfo/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList 
                    data={data}
                    onDelete={(id) => this.deleteItem(id)}/>
                <EmployeesAddForm 
                    onAdd={(name, salary) => this.addItem(name, salary)}/>
            </div>
        );
    }
}

export default App;