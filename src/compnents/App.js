/* LIBRARIES */
import React from "react";

/* MIDDLEWARE */
import unsplash from "../api/unsplash";

/* COMPONENTS */
import SearchBar from "./SearchBar/SearchBar";
import ImageList from "./ImageList/ImageList"

class App extends React.Component {
    //INISTALIZING STATE
    state = {
        images: []
    };

    //CALLBACK ASYNC ARROW FUNCTION
    onSearchSubmit = async (term) => {
        // Asyncrous Event
        const response = await unsplash.get("/search/photos", {
            params: { query: term }
        });

        this.setState({ images: response.data.results });
    }

    render(){
        return(
            <div className="ui container" style={{marginTop: "10px"}}>
                <SearchBar onSubmit={ this.onSearchSubmit }></SearchBar>

                <ImageList images={ this.state.images }></ImageList>
            </div>
        );
    }
}

export default App;