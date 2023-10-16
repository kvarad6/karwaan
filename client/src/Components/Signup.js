import { Typography, Box, Paper, TextField, Grid, Button, Avatar, Link } from '@mui/material'
import React, { useState } from 'react'
import lock from '../static/images/avatars/lock.png'
import axios from 'axios'
import traveling from '../static/images/avatars/traveling.png'


const Signup = () => {

    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement the logic to send the form data to the server (via API)
        console.log('Form Data:', formData);
    };

    // const registerUser = (event) => {
    //     event.preventDefault()
    //     const response = fetch('http://localhost:1337/api/register', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             firstName,
    //             lastName,
    //             email,
    //             password
    //         }),
    //     })
    //     const data = response.json()
    //     console.log(data)
    // }


    return (
        <div id='signup'>
            <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <Grid item xs={6}>
                    <Avatar src={traveling} variant="square" sx={{ width: 400, height: 500, mt: 10 }} />
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Paper elevation={0} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', m: 10 }}>
                            <form onSubmit={handleSubmit}>
                                <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
                                        <Avatar alt='lockImage' src={lock}></Avatar>
                                        <Typography sx={{ fontSize: 25 }}>Sign up</Typography>

                                    <Grid item sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 2 }}>
                                        <Grid item>
                                            <TextField
                                                required
                                                id="signupFirstName"
                                                label="First Name"
                                                name="firstName"
                                                type="search"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                            >
                                            </TextField>
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                required
                                                id="signupLastName"
                                                label="Last Name"
                                                name="lastName"
                                                type="search"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                            >
                                            </TextField>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <TextField sx={{ width: 405 }}
                                            required
                                            id="signupEmail"
                                            label="Email"
                                            name="email"
                                            type="search"
                                            value={formData.email}
                                            onChange={handleChange}
                                        >
                                        </TextField>
                                    </Grid>
                                    <Grid item>
                                        <TextField sx={{ width: 405 }}
                                            required
                                            id="signupPassword"
                                            label="Password"
                                            name="password"
                                            type="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                        >
                                        </TextField>
                                    </Grid>
                                    {/* <Grid item>
                                        <TextField sx={{ width: 405 }}
                                            required
                                            id="signupConfirmPassword"
                                            label="Confirm Password"
                                            name="confirmPassword"
                                            type="password">
                                        </TextField>
                                    </Grid> */}
                                    <Grid item>
                                        <Button type="submit" variant='contained' sx={{ width: 405 }}>SIGN UP</Button>
                                    </Grid>
                                    <Grid item sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignSelf: 'flex-end' }}>
                                        <Grid item>
                                            <Link>Already have an account? Sign in</Link>
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

export default Signup