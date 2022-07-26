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
                {name: 'Guthor Lefford', salary: 1000, increase: true, like: true, id: 1},
                {name: 'Della Lincoln', salary: 1200, increase: false, like: false, id: 2},
                {name: 'Nashi Temony', salary: 800, increase: false, like: false, id: 3},
            ],
            searchBar: '',
            filter: 'all'
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
                like: false,
                id: this.findMax(data)
            }
            // const newArr = [...data, newItem];
            return {
                data: data.concat(newItem)
                // data: data.concat({
                //     name, 
                //     salary,
                //     increase: false,
                //     star: false
                //     id: this.findMax(data)
                // })
                // data: newArr
            }
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => {
            return {
                data: data.map(item => {
                    if (item.id === id) {
                        return {...item, [prop]: !item[prop]};
                    }
                    return item;
                })
            }
        });
    }

    searchEmp = (data, searchBar) => {
        if (searchBar.length === 0) {
            
            return data;
        }

        return data.filter(item => {
            return item.name.toLowerCase().indexOf(searchBar.toLowerCase()) > -1
        });
    }

    onUpdateSearch = (searchBar) => {
        this.setState({searchBar});
    }

    filterEmploees = (data, filter) => {
        return data.filter(item => {
            switch (filter) {
                case "moreSalary": 
                    return (item.salary >= 1000);
                case "like":
                    return (item.like);
                default:
                    return item;
            }
        });
    }
    onUpdateSort = (filter) => {
        this.setState({filter})
    }

    render() {
        const {data, searchBar, filter} = this.state;
        const visibleSearchedData = this.filterEmploees(this.searchEmp(data, searchBar), filter);
        const employees = data.length;
        const increased = data.filter(item => item.increase).length;
        return (
            <div className='app'>
                <AppInfo 
                    employees={employees}
                    increased={increased}/>
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter onUpdateSort={this.onUpdateSort}
                    filter={filter}/>
                </div>
                <EmployeesList 
                    data={visibleSearchedData}
                    onDelete={(id) => this.deleteItem(id)}
                    onToggleProp={(id, prop) => this.onToggleProp(id, prop)}/>
                <EmployeesAddForm 
                    onAdd={(name, salary) => this.addItem(name, salary)}/>
            </div>
        );
    }
}

export default App;