import "./app-info.css"

const AppInfo = (props) => {
    const {employees, increased} = props;
    return (
    <div className='app-info'>
        <h1>Accounting of company employees Guthorle</h1>
        <h2>{`Total number of employees: ${employees}`}</h2>
        <h2>{`The award will be received: ${increased}`}</h2>
    </div>
    );
}

export default AppInfo;