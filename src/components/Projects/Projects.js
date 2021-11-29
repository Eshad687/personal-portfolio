import { Card, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import img1 from '../../images/screencapture-sneakerz-freakz-web-app-2021-11-29-21_22_31.png'
import img2 from '../../images/screencapture-travel-agency-9c0f2-web-app-2021-11-29-21_23_47.png'
import img3 from '../../images/screencapture-house-general-hospital-web-app-2021-11-29-21_24_39.png'
import CustomButton from '../Styled Components/CustomButton';


const Projects = () => {
    return (
        <Box sx={{ mt: 10 }}>
            <Container>
                <Typography variant="h3" sx={{ textAlign: 'center', color: 'white', fontWeight: 600 }}>
                    Featured <span style={{ color: 'springgreen' }}>Projects</span>
                </Typography>

                <Grid container spacing={2} sx={{ mt: 8 }} style={{ height: '800px' }} >
                    <Grid item xs={6}>
                        <img width="80%" height="50%" src={img1} alt="" />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h4" sx={{ color: 'white' }} >
                            <span style={{ color: 'springgreen' }}>Sneakerz Freakz</span> Niche Website
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'white' }} >
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam placeat repudiandae eaque reiciendis eius, suscipit facere deleniti, ad ut, unde est. Esse ad architecto quae, sequi optio non atque fugit.
                        </Typography>
                        <CustomButton>View Details</CustomButton>
                    </Grid>
                </Grid>

                <Grid container spacing={2} style={{ height: '800px' }}>
                    <Grid item xs={6}>
                        <img width="80%" height="50%" src={img2} alt="" />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h4" sx={{ color: 'white' }} >
                            <span style={{ color: 'springgreen' }}>Into The Wild</span> Tavel Agency
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'white' }} >
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam placeat repudiandae eaque reiciendis eius, suscipit facere deleniti, ad ut, unde est. Esse ad architecto quae, sequi optio non atque fugit.
                        </Typography>
                        <CustomButton>View Details</CustomButton>
                    </Grid>
                </Grid>
                <Grid container spacing={2} style={{ height: '800px' }}>
                    <Grid item xs={6}>
                        <img width="80%" height="50%" src={img3} alt="" />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h4" sx={{ color: 'white' }} >
                            <span style={{ color: 'springgreen' }}>House General Hospital</span> Website
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'white' }} >
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam placeat repudiandae eaque reiciendis eius, suscipit facere deleniti, ad ut, unde est. Esse ad architecto quae, sequi optio non atque fugit.
                        </Typography>
                        <CustomButton>View Details</CustomButton>
                    </Grid>
                </Grid>

            </Container>
        </Box >
    );
};

export default Projects;