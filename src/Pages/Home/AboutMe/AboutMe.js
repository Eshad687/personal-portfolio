import { Container, Grid, Typography } from '@mui/material';

import React from 'react';
import image from '../../../images/ed.jpg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import CustomButton from '../../Styled Components/CustomButton';

const AboutMe = () => {
    return (
        <Container id="aboutMe" sx={{ mt: 10 }}>

            <Grid container spacing={4} style={{ position: 'sticky', background: '#0e0e0f', paddingBottom: '40px' }}>
                <Grid item md={4} sx={{}}>
                    <img style={{ position: 'sticky', border: '2px solid springgreen', padding: '5px' }} width="100%" height="100%" src={image} alt="" />
                </Grid>
                <Grid item md={8}>
                    <Typography variant="h3" sx={{ textAlign: 'center', color: 'white', fontWeight: 600, mb: 2 }}>
                        About <span style={{ color: 'springgreen' }}>Me</span>
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'white' }}>
                        Hello, myself Eshad Dewan, a CSE graduate from Brac University, looking for a career in web development. I was born in Manikganj, a Bangladeshi district under Dhaka division. After passing my Higher Secondary I moved to Dhaka to fulfil my dream and study about computer science.
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'white', mt: 2 }}>
                        So far, I have been doing different projects using different technologies. Starting from plain vanila css and html, then using different css frameworks like bootstrap or tailwind and finally I did some projects with React where I handled the server side with node, express and mongo. Web development has become passion and hobby both. I am ready to give my 100% to make a great carrer in this field.
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'white', my: 2 }}>
                        I love to gather knowledge and learn new things everyday. I think, my greatest stength is determination. If I have a goal in my mind, I do everything in my power to acheive it. I do not ever give up. I make plan, and execute it accordingly. If I fail once, I approch to the situation again and again with stronger determination.
                    </Typography>

                    <CustomButton href="https://www.linkedin.com/in/eshad-dewan-07161121a/" target="_blank" sx={{ mx: 2 }}>
                        <LinkedInIcon />
                    </CustomButton>
                    <CustomButton href="https://github.com/Eshad687" target="_blank" sx={{ mx: 2 }}>
                        <GitHubIcon />
                    </CustomButton >
                    <CustomButton href="https://www.facebook.com/eshad.dewan/" target="_blank" sx={{ mx: 2 }}>
                        <FacebookIcon />
                    </CustomButton>
                </Grid>

            </Grid>
        </Container>
    );
};

export default AboutMe;