import { Typography, Box, Paper, TextField, Grid, Button, Avatar, Link } from '@mui/material'
import React, { useState } from 'react'
import lock from '../static/images/avatars/lock.png'
import axios from 'axios'
import traveling from '../static/images/avatars/traveling.png'


const Signup = () => {

    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('', { firstName, lastName, email, password })
            .then(result => console.log(result))
            .catch(err => console.log(err))
    }

    return (
        <div id='signup'>
            <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <Grid Item xs={6}>
                    <Avatar src={traveling} variant="square" sx={{ width: 400, height: 500, mt: 10 }} />
                </Grid>
                <Grid Item xs={6}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Paper elevation={0} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', m: 10 }}>
                            <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
                                <Grid Item>
                                    <Avatar alt='lockImage' src={lock}></Avatar>
                                </Grid>
                                <Grid Item>
                                    <Typography sx={{ fontSize: 25 }}>Sign up</Typography>
                                </Grid>
                                <Grid Item sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 2 }}>
                                    <Grid Item>
                                        <TextField
                                            required
                                            id="signupFirstName"
                                            label="First Name"
                                            name="firstName"
                                            type="search"
                                            onChange={(e) => setFirstName(e.target.value)}
                                        >
                                        </TextField>
                                    </Grid>
                                    <Grid Item>
                                        <TextField
                                            required
                                            id="signupLastName"
                                            label="Last Name"
                                            name="lastName"
                                            type="search"
                                            onChange={(e) => setLastName(e.target.value)}
                                        >
                                        </TextField>
                                    </Grid>
                                </Grid>
                                <Grid Item>
                                    <TextField sx={{ width: 405 }}
                                        required
                                        id="signupEmail"
                                        label="Email"
                                        name="email"
                                        type="search"
                                        onChange={(e) => setEmail(e.target.value)}
                                    >
                                    </TextField>
                                </Grid>
                                <Grid Item>
                                    <TextField sx={{ width: 405 }}
                                        required
                                        id="signupPassword"
                                        label="Password"
                                        name="password"
                                        type="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    >
                                    </TextField>
                                </Grid>
                                <Grid Item>
                                    <TextField sx={{ width: 405 }}
                                        required
                                        id="signupConfirmPassword"
                                        label="Confirm Password"
                                        name="confirmPassword"
                                        type="password">
                                    </TextField>
                                </Grid>
                                <Grid Item>
                                    <Button variant='contained' sx={{ width: 405 }} onSubmit={handleSubmit}>SIGN UP</Button>
                                </Grid>
                                <Grid Item sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignSelf: 'flex-end' }}>
                                    <Grid Item>
                                        <Link>Already have an account? Sign in</Link>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Signup