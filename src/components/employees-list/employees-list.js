import "./employees-list.css";
import EmployeesListItem from "../employees-list-item/employees-list-item"

const EmployeesList = ({data, onDelete, onToggleIncrease, onToggleLike}) => {
    const result = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleIncrease={() => onToggleIncrease(id)}
                onToggleLike={() => onToggleLike(id)}/>
        )
    });

    return (
        <ul className="app-list list-group">
            {result}
        </ul>
    );
}

export default EmployeesList;