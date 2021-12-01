import { Box } from '@mui/system';
import React from 'react';
import { Container, Typography } from '@mui/material';
import Navigation from '../Home/Navigation/Navigation';
const Blogs = () => {
    return (
        <Box>
            <Navigation></Navigation>
            <Container sx={{ mt: 10 }}>
                <Typography variant="h2" sx={{ color: "springgreen", textAlign: "center" }}>
                    Coming Soon!!!
                </Typography>
            </Container>
        </Box>
    );
};

export default Blogs;