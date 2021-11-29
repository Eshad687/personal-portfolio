import React from 'react';
import Grid from '@mui/material/Grid';
import image from '../../images/dp.png'
import Particles from "react-tsparticles";

import { Container, Typography } from '@mui/material';
import CustomButton from '../Styled Components/CustomButton';
import { Box } from '@mui/system';
const Banner = () => {
    const verticalCenter = {
        display: 'flex',
        alignItems: 'center',
        height: 500
    }

    return (
        <Box>
            <Particles
                id="tsparticles"

                options={{

                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 10,
                                opacity: 0.8,
                                size: 40,
                            },
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 6,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                            value: 60,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: 5,
                        },
                    },
                    detectRetina: true,
                }}
            />

            <Container sx={{ width: '100%', mt: 10, mr: 5 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={verticalCenter}>
                    <Grid item xs={12} md={6} >
                        <Typography variant="h3" sx={{ color: 'white' }}>
                            Hi, I am <span style={{ color: 'springgreen' }}>Eshad Dewan</span>
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'white' }}>
                            I am a <span style={{ color: 'springgreen' }}>MERN Stack</span> Developer, Ready to be Hired
                        </Typography>
                        <CustomButton onClick={() => window.location.href = "https://drive.google.com/uc?id=1u6IKmSMgNtC8Y0S81mb-zOBBmENdBh5i&export=download"} sx={{ mt: 2 }} >Download Resume</CustomButton>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img width="100%" src={image} alt="" />
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;