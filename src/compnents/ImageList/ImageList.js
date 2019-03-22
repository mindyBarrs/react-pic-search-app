/* LIBRARIES */
import React from "react";

/* COMPONENTS */
import ImageCard from "../ImageCard/ImageCard";

/* STYLESHEETS */
import "./ImageList.css";

const ImageList = (props) => {
    const images = props.images.map((images) => {
        return <ImageCard key={images.id} image={images} />
    });

    return(
        <div className="image-list">
            { images }
        </div>
    );
}

export default ImageList;