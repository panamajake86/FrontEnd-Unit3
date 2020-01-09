import React from "react";
import { axiosWithAuth } from "../axiosWithAuth";
import { PubContext } from "../contexts/PubStories";

const Admin = props => {
    const story = React.useContext(PubContext);

    // const deleteStory = e => {
    //     axiosWithAuth()
    //         .delete(`/colors/${color.id}`)
    // };

    return (
        <>
            {story.map(stuff => (
                <div>
                    <p>{stuff.name}</p>
                    <p>{stuff.story}</p>
                    <p>{stuff.quote}</p>
                    <button
                        onClick={e=>{
                            e.preventDefault();
                            // deleteStory();
                        }}
                        >Delete</button>
                </div>
            ))}
        </>
    )
};

export default Admin;