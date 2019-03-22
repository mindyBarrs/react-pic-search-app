/* LIBRARIES */
import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID 9e8aba9658b5b1a7d0bebb71354091ba4aa9f20d1ccb6132951d22b1ef30e1dc' 
    }
});