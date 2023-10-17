import { Typography, Box, Paper, TextField, Grid, Button, Avatar, FormControlLabel, FormGroup, Checkbox, Link } from '@mui/material'
import React, {useState} from 'react'
import lock from '../static/images/avatars/lock.png'
import traveling from '../static/images/avatars/traveling.png'

const Signin = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     axios.post('', { firstName, lastName, email, password })
    //         .then(result => console.log(result))
    //         .catch(err => console.log(err))
    // }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // logic to send the form data to the server (via API)
        try {
            const response = await fetch('http://localhost:1337/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Login successful:', data);
                console.log('Form Data:', formData);
                // You might redirect the user to another page or show a success message.
            } else {
                console.error('Login failed:', response.statusText);
                // Handle registration failure, show an error message, etc.
            }
        } catch (error) {
            console.error('Error during logging:', error.message);
            // Handle other errors (network issues, etc.)
        }
    };


    return (
        <div id="login">
            <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <Grid item xs={6}>
                    <Avatar src={traveling} variant="square" sx={{ width: 400, height: 500, mt: 10 }} />
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 5 }}>
                        <Paper elevation={0} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', m: 10 }}>
                            <form onSubmit={handleSubmit}>
                                <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
                                    <Grid item>
                                        <Avatar alt='lockImage' src={lock}></Avatar>
                                    </Grid>
                                    <Grid item>
                                        <Typography sx={{ fontSize: 25 }}>Sign in</Typography>
                                    </Grid>
                                    <Grid item>
                                        <TextField sx={{ width: 405 }}
                                            required
                                            id="signinEmail"
                                            label="Email"
                                            name="email"
                                            type="search"
                                            value={formData.email}
                                            onChange={handleChange}>
                                        </TextField>
                                    </Grid>
                                    <Grid item>
                                        <TextField sx={{ width: 405 }}
                                            required
                                            id="signinPassword"
                                            label="Password"
                                            name="password"
                                            type="password"
                                            value={formData.password}
                                            onChange={handleChange}>
                                        </TextField>
                                    </Grid>
                                    <Grid item sx={{ display: 'flex', flexDirection: 'column', alignSelf: 'flex-start' }}>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Remember me" />
                                        </FormGroup>
                                    </Grid>
                                    <Grid item>
                                        <Button type="submit" variant='contained' sx={{ width: 405 }}>SIGN IN</Button>
                                    </Grid>
                                    <Grid item sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 5 }}>
                                        <Grid item>
                                            <Link>Forgot password?</Link>
                                        </Grid>
                                        <Grid item>
                                            <Link>Don't have an account? Sign Up</Link>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </form>
                        </Paper>
                    </Box>
                </Grid>

            </Grid>

        </div>
    )
}

export default Signin