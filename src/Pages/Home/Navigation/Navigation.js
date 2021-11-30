import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import { HashLink, NavHashLink } from 'react-router-hash-link';

import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';


import MoreIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';





const Navigation = () => {
    // getting data from authentication context api

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [navbar, setNavbar] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);
    const style1 = {
        position: 'fixed',
        background: 'transparent',
        transition: 'background 0.5s'
    }
    const style2 = {
        position: 'fixed',
        background: 'springgreen',
        transition: 'background 0.5s'
    }
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };



    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };



    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >

            {/* FOR SMALL DEVICES */}
            <MenuItem>
                <Button  > home </Button>


            </MenuItem>
            <MenuItem>
                <Button  > About Me </Button>

            </MenuItem>
            <MenuItem>
                <Button  > Projects </Button>

            </MenuItem>
            <MenuItem>
                <Button  > Contact Me </Button>

            </MenuItem>




        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={navbar ? style2 : style1} sx={{}}>
                <Toolbar>



                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Button  > <NavLink style={{ textDecoration: "none", color: "#fff" }} to="/home">Home</NavLink></Button>
                        <Button > <HashLink style={{ textDecoration: "none", color: "#fff" }} to="/home#aboutMe">About Me</HashLink> </Button>
                        <Button sx={{ color: 'white' }} > Projects </Button>
                        <Button sx={{ color: 'white' }}> Contact Me </Button>




                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}

        </Box>
    );
};

export default Navigation;