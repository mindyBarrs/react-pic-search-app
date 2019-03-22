import React from "react";

/* STYLESHEETS */
import "./SearchBar";

class SearchBar extends React.Component {
    state = {
        term: ""
    }

    render(){
        return(
            <div className="ui segment">
                <form className="ui form">
                    <div className="feild">
                        <label>Image Search</label>

                        <input type="text" value={this.state.term} onChange={ (e) => this.setState({ term: e.target.value }) } ></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;