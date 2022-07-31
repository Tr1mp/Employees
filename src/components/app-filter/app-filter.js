import "./app-filter.css";

function AppFilter(props) {
    const buttonsData = [
        {name: "all", label: "All emploees"},
        {name: "like", label: "For promotion"},
        {name: "moreSalary", label: "Salary more than $1000"}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const clazz = (props.filter === name) ? 'btn-light' : "btn-outline-light"
        return (
            <button 
                type="button"
                className={`btn ${clazz}`}
                key={name}
                onClick={() => props.onUpdateSort(name)}>
                {label}
            </button>
        )  
    })
    
    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
}
export default AppFilter;