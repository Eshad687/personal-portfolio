import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useParams } from 'react-router';
import Navigation from '../../Home/Navigation/Navigation';
import CustomButton from '../../Styled Components/CustomButton';

const ProjectDetails = () => {
    const details = [
        { id: 0, title: "Sneakerz Freakz", img1: "https://i.ibb.co/qFw3XnS/screencapture-sneakerz-freakz-web-app-2021-11-29-21-22-31.png", img2: "https://i.ibb.co/6bJbL8k/screencapture-sneakerz-freakz-web-app-explore-2021-11-30-20-38-38.png", img3: "https://i.ibb.co/ncc7n7P/screencapture-sneakerz-freakz-web-app-dashboard-manage-Orders-2021-11-30-20-39-54.png", d1: "Home page has 6 sections. Header,Banner,Products,Reviews,Best Deal,Footer", d2: "Explore Page shows more products", d3: "Dashboard is different for Normal Users and Admins", d4: "Normal Users dashboard consists of My Order, Payment and Add Reviews", d5: "Admins dashboard consists of Manage Orders, Manage Products, Add Products and Make someone Admin", Tech: "HTML, CSS, Material UI, React JS, Node JS, Express JS, MongoDB, React Router, React Hook Form, Axios, Firebase, Heroku", web: "https://sneakerz-freakz.web.app/", gitc: "https://github.com/Eshad687/niche-website-client-side", gits: "https://github.com/Eshad687/niche-website-server-side" },
        { id: 1, title: "Into The Wild Travel Agency", img1: "https://i.ibb.co/6BXD94L/screencapture-travel-agency-9c0f2-web-app-2021-11-29-21-23-47.png", img2: "https://i.ibb.co/zNHhJVT/screencapture-travel-agency-9c0f2-web-app-managebookings-2021-11-30-22-52-04.png", img3: "https://i.ibb.co/4S92TKr/screencapture-travel-agency-9c0f2-web-app-mybookings-2021-11-30-22-51-36.png", d1: "Non-users (user without account) can only visit the home page and go to the login page", d2: "Users after login, will see different routes in the navbar. These routes will be accessible to them", d3: "Users can book their trip by clicking on the book now button on the offerings section, which will take them to the details page. There will be a form to book a trip. User will have to fill up the form and book the trip", d4: "users can also access to his bookings page where he will see all of his bookings. He can also remove any trip", d5: "Users can also add more offering package by going on the add sites page", Tech: "HTML, CSS, React Bootstrap, React JS, Node JS, Express JS, MongoDB, React Router, React Hook Form, Axios, Firebase, Heroku", web: "https://travel-agency-9c0f2.web.app/", gitc: "https://github.com/Eshad687/travel-agency-client-side", gits: "https://github.com/Eshad687/travel-agency-server-side" },
        { id: 2, title: "House General Hospital", img1: "https://i.ibb.co/0XDTrdv/screencapture-house-general-hospital-web-app-2021-11-29-21-24-39.png", img2: "https://i.ibb.co/5vfTY8S/screencapture-house-general-hospital-web-app-getappointment-2021-11-30-22-57-16.png", img3: "https://i.ibb.co/W5C6nN8/screencapture-house-general-hospital-web-app-doctors-2021-11-30-22-57-53.png", d1: "Firebase Authentication system with Google and email/password login system", d2: "Multiple routes including some private routes and a not found page", d3: "Homepage contains a banner, services, departmens and faq sections. Clicking on service button will take you to the Details page", d4: "Login and sign up page is toggled, the other two page is doctors and appointment", d5: "Header and Footer is shared to every page", Tech: "HTML, CSS, React Bootstrap, React JS, React Router, React Hook Form, Firebase", web: "https://house-general-hospital.web.app/", gitc: "https://github.com/Eshad687/health-care-website-client-side", gits: "" }
    ]

    const { id } = useParams();
    const index = parseInt(id);
    return (
        <Box>
            <Navigation></Navigation>
            <Container sx={{ mt: 10 }}>
                <Typography variant="h2" sx={{ color: "springgreen", textAlign: "center" }}>
                    {details[index].title}
                </Typography>
                <Box sx={{ textAlign: 'center' }}>
                    <CustomButton href={details[index].web} target="_blank" sx={{ m: 2 }}>
                        Live Website
                    </CustomButton>
                    <CustomButton href={details[index].gitc} target="_blank" sx={{ m: 2 }}>
                        Github Client Side
                    </CustomButton>
                    <CustomButton href={details[index].gits} target="_blank" sx={{ m: 2 }}>
                        Github Server Side
                    </CustomButton>
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4} style={{ position: 'sticky' }}>
                        <img width="100%" height="400px" src={details[index].img1} alt="" />
                    </Grid>
                    <Grid item xs={12} md={4} style={{ position: 'sticky' }}>
                        <img width="100%" height="400px" src={details[index].img2} alt="" />
                    </Grid>
                    <Grid item xs={12} md={4} style={{ position: 'sticky' }}>
                        <img width="100%" height="400px" src={details[index].img3} alt="" />
                    </Grid>

                </Grid>
                <Typography variant="h4" sx={{ color: "springgreen" }}>
                    Key Features:
                </Typography>
                <ul style={{ color: "white" }}>
                    <li>{details[index].d1}</li>
                    <li>{details[index].d2}</li>
                    <li>{details[index].d3}</li>
                    <li>{details[index].d4}</li>
                    <li>{details[index].d5}</li>
                </ul>
                <Typography variant="h4" sx={{ color: "springgreen" }}>
                    Technology Used:
                </Typography>
                <Typography variant="h6" sx={{ color: "white" }}>
                    {details[index].Tech}
                </Typography>
            </Container>
        </Box>
    );
};

export default ProjectDetails;