/* LIBRARIES */
import React from "react";

/* COMPONENTS */
import SearchBar from "./SearchBar/SearchBar";

class App extends React.Component {
    //CALLBACK FUNCTION
    onSearchSubmit(term){
        console.log(term);
    }


    render(){
        return(
            <div className="ui container" style={{marginTop: "10px"}}>
                <SearchBar onSubmit={ this.onSearchSubmit }></SearchBar>
            </div>
        );
    }
}

export default App;