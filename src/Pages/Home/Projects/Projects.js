import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import img1 from '../../../images/Capture.PNG'
import img2 from '../../../images/Capture2.PNG'
import img3 from '../../../images/Capture3.PNG'
import CustomButton from '../../Styled Components/CustomButton';
import { useNavigate } from "react-router-dom";

const Projects = () => {
    const navigate = useNavigate();
    const handleBookNow = (id) => {
        navigate(`/${id}`);
    }
    return (
        <Box sx={{ mt: 10 }}>
            <Container>
                <Typography variant="h3" sx={{ textAlign: 'center', color: 'white', fontWeight: 600 }}>
                    Featured <span style={{ color: 'springgreen' }}>Projects</span>
                </Typography>

                <Grid container spacing={2} sx={{ mt: 8 }} style={{ position: 'sticky', background: '#0e0e0f', height: '415px' }}  >
                    <Grid item xs={6}>
                        <img style={{ position: 'sticky' }} width="90%" height="380px" src={img1} alt="" />
                    </Grid>
                    <Grid item xs={6} sx={{ pr: 3 }}>
                        <Typography variant="h4" sx={{ color: 'white' }} >
                            <span style={{ color: 'springgreen' }}>Sneakerz Freakz</span> Niche Website
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'white', my: 3 }} >
                            It is a MERN Stack project, where There ae two kinds of users. One is Admins and Another is Normal Users. Both have different kinds of access.
                        </Typography>
                        <CustomButton onClick={() => handleBookNow(0)}>View Details</CustomButton>
                    </Grid>
                </Grid>

                <Grid container spacing={2} style={{ position: 'sticky', background: '#0e0e0f', height: '415px', marginTop: '30px' }} >

                    <Grid item xs={6}>
                        <Typography variant="h4" sx={{ color: 'white' }} >
                            <span style={{ color: 'springgreen' }}>Into The Wild</span> Tavel Agency
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'white', my: 3 }} >
                            A MERN Stack website, where non-users can only see the Homepage. Users must have to login to get more access
                        </Typography>
                        <CustomButton onClick={() => handleBookNow(1)}>View Details</CustomButton>
                    </Grid>
                    <Grid item xs={6}>
                        <img style={{ position: 'sticky' }} width="90%" height="380px" src={img2} alt="" />
                    </Grid>
                </Grid>
                <Grid container spacing={2} style={{ position: 'sticky', background: '#0e0e0f', height: '415px', marginTop: '30px' }}>
                    <Grid item xs={6}>
                        <img style={{ position: 'sticky' }} width="90%" height="380px" src={img3} alt="" />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h4" sx={{ color: 'white' }} >
                            <span style={{ color: 'springgreen' }}>House General Hospital</span> Website
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'white' }} >
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam placeat repudiandae eaque reiciendis eius, suscipit facere deleniti, ad ut, unde est. Esse ad architecto quae, sequi optio non atque fugit.
                        </Typography>
                        <CustomButton onClick={() => handleBookNow(2)}>View Details</CustomButton>
                    </Grid>
                </Grid>

            </Container>
        </Box >
    );
};

export default Projects;