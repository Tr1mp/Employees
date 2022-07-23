import "./employees-list.css";
import EmployeesListitem from "../employees-list-item/employees-list-item"

const EmployeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmployeesListitem/>
            <EmployeesListitem/>
            <EmployeesListitem/>
        </ul>
    );
}

export default EmployeesList;