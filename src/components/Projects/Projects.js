import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';


const Projects = () => {
    return (
        <Box sx={{ mt: 10 }}>
            <Container>
                <Typography variant="h3" sx={{ textAlign: 'center', color: 'white', fontWeight: 600 }}>
                    My <span style={{ color: 'springgreen' }}>Projects</span>
                </Typography>
            </Container>
        </Box>
    );
};

export default Projects;