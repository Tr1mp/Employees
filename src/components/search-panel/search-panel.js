import { Component } from "react";

import "./search-panel.css";

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchBar: ''
        }
    }
    onUpdateSearch = (e) => {
        const newStr = e.target.value;
        return this.props.onUpdateSearch(newStr);
    }
    render() {
        const {searchBar} = this.props;
        return (
            <input 
                type="text"
                className="form-control search-input"
                placeholder="Who do you want to find?"
                value={searchBar}
                onChange={this.onUpdateSearch}/>
        );
    }
}
export default SearchPanel;