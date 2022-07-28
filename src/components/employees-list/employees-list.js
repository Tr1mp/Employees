import "./employees-list.css";
import EmployeesListItem from "../employees-list-item/employees-list-item"

const EmployeesList = ({data}) => {
    const result = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem key={id} {...itemProps}/>
        )
    });


    return (
        <ul className="app-list list-group">
            {result}
        </ul>
    );
}

export default EmployeesList;