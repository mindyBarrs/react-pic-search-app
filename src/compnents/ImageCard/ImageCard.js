/* LIBRARIES */
import React from "react";

class ImageCard extends React.Component {

    render(){
        const { decsription, urls } = this.props.image;

        return(
            <div>
                <img alt={decsription} src={urls.regular} />
            </div>
        );
    }
}

export default ImageCard;