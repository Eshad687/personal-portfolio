import { Box } from '@mui/system';
import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import ContactMe from '../ContactMe/ContactMe';
import Navigation from '../Navigation/Navigation';
import Projects from '../Projects/Projects';


const Home = () => {
    return (
        <Box>
            <Navigation></Navigation>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Projects></Projects>
            <ContactMe></ContactMe>
        </Box>
    );
};

export default Home;