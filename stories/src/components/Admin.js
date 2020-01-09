import React from "react";
import axiosWithAuth from "../axiosWithAuth";
import { PubContext } from "../contexts/PubStories";

const Admin = props => {
    const stories = React.createContext(PubContext);

    const deleteStory = e => {
        axiosWithAuth()
            .delete(`/colors/${color.id}`)
    };

    return (
        <>
            {stories.map(story => (
                <div>
                    <p>{story.color}</p>
                    <h1>{story.code.hex}</h1>
                </div>
            ))}
        </> 
    )
};

export default Admin;