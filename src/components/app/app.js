import "./app.css";
import AppInfo from "../app-info/app-info";
import AppFilter from "../app-filter/app-filter";
import SearchPanel from "../search-panel/search-panel";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

function App() {
    const data = [
        {name: 'Guthor Lefford', salary: 1000, cake: true, id: 1},
        {name: 'Della Lincoln', salary: 1200, cake: false, id: 2},
        {name: 'Nashi Temony', salary: 800, cake: false, id: 3},
    ];

    return (
        <div className='app'>
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    );
}

export default App;