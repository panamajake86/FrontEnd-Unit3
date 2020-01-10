import React from "react";
import Navigation from './Navigation';
import Stories from './Stories';
import Carousel from './StoriesCarousel';
// import SubmitForm from './SubmitForm';
import { PubContext } from '../contexts/PubStories';
import axios from 'axios';

import data from '../data';


const Home = () => {
    const [pub, setPub] = React.useState([]);

    React.useEffect(() => {
        // axiosWithAuth()
        //   .get('/colors')
        //   .then(res => 
        //     console.log("getting data", res)
        //     // setPub(res.data)
        //     )
        //   .catch(err => console.log(err.message));

        setPub([...data]);
    }, []);


    return (
        <PubContext.Provider value={pub}>
            <Navigation />
            <Carousel />
            <Stories />
            {/* <SubmitForm /> */}
        </PubContext.Provider>
    )
}

export default Home;