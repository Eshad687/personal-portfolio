import React from 'react';
import Grid from '@mui/material/Grid';
import image from '../../../images/dp.png'
import TypeAnimation from 'react-type-animation';

import { Container, Typography } from '@mui/material';
import CustomButton from '../../Styled Components/CustomButton';
import { Box } from '@mui/system';

const Banner = () => {
    const verticalCenter = {
        display: 'flex',
        alignItems: 'center',
        height: 500
    }

    return (
        <Box>


            <Container sx={{ width: '100%', mt: 10, mr: 5 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={verticalCenter}>
                    <Grid item xs={12} md={6} >
                        <Typography variant="h3" sx={{ color: 'white' }}>
                            Hi, I am <span style={{ color: 'springgreen' }}>Eshad Dewan</span>
                        </Typography>
                        <div style={{ width: '25em', color: 'white' }} >
                            <TypeAnimation

                                cursor={true}
                                sequence={[
                                    'A MERN Stack Developer, Ready to be Hired',
                                    2000,
                                    'A Web Developer Looking for Jobs',
                                    2000,
                                ]}
                                wrapper="h4"
                                repeat={Infinity}
                            />
                        </div>

                        <CustomButton onClick={() => window.location.href = "https://drive.google.com/uc?id=1u6IKmSMgNtC8Y0S81mb-zOBBmENdBh5i&export=download"} sx={{ mt: 2 }} >Download Resume</CustomButton>
                    </Grid>
                    <Grid item xs={12} md={6} style={{ position: 'sticky' }}>
                        <img width="100%" src={image} alt="" />
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;