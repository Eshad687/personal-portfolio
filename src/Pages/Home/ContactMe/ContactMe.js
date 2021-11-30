import { Container, Grid, Paper, Typography } from '@mui/material';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import CustomButton from '../../Styled Components/CustomButton';

const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_d4x2hbf', 'template_4tm9spl', form.current, 'user_PgxVVulAdFh9gRofv9P5p')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <Container sx={{ mt: 10, mr: '10px' }}>
            <Typography variant="h3" sx={{ textAlign: 'center', color: 'white', fontWeight: 600, mb: 5 }}>
                Contact <span style={{ color: 'springgreen' }}>Me</span>
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5} >
                    <Paper style={{ position: 'sticky' }} sx={{ background: '#0e0e0f', textAlign: 'center', padding: 4, mt: 2 }}>
                        <Typography variant="h5" sx={{ color: 'springgreen' }}>
                            Email
                        </Typography>
                        <Typography variant="h5" sx={{ color: 'white' }}>
                            Eshaddewan571@gmail.com
                        </Typography>
                    </Paper>
                    <Paper style={{ position: 'sticky' }} sx={{ background: '#0e0e0f', textAlign: 'center', padding: 4, mt: 4 }}>
                        <Typography variant="h5" sx={{ color: 'springgreen' }}>
                            Phone
                        </Typography>
                        <Typography variant="h5" sx={{ color: 'white' }}>
                            (+88) 01745586186
                        </Typography>
                    </Paper>
                    <Paper style={{ position: 'sticky' }} sx={{ background: '#0e0e0f', textAlign: 'center', padding: 4, mt: 4 }}>
                        <Typography variant="h5" sx={{ color: 'springgreen' }}>
                            Address
                        </Typography>
                        <Typography variant="h5" sx={{ color: 'white' }}>
                            13/A, West Agargaon, Dhaka
                        </Typography>
                    </Paper>


                </Grid>
                <Grid item xs={12} md={7}>
                    <form ref={form} onSubmit={sendEmail}>
                        <Typography variant="h5" sx={{ color: 'springgreen' }}>
                            Name
                        </Typography>
                        <input style={{ width: '80%', height: '40px' }} type="text" name="user_name" />
                        <Typography variant="h5" sx={{ color: 'springgreen' }}>
                            Email
                        </Typography>
                        <input style={{ width: '80%', height: '40px' }} type="email" name="user_email" />
                        <Typography variant="h5" sx={{ color: 'springgreen' }}>
                            Message
                        </Typography>
                        <textarea rows="15" style={{ width: '80%' }} name="message" />
                        <br />

                        <CustomButton style={{ width: '80%', height: '40px' }} type="submit">Send</CustomButton>

                    </form>

                </Grid>
            </Grid>
        </Container >
    );
};

export default ContactMe;