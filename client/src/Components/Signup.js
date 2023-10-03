import { Typography, Box, Paper, TextField, Grid, Button, Avatar, Link } from '@mui/material'
import React from 'react'
import lock from '../static/images/avatars/lock.png'

const Signup = () => {
    return (
        <div id='signup'>
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
                                    type="search">
                                </TextField>
                            </Grid>
                            <Grid Item>
                                <TextField
                                    required
                                    id="signupLastName"
                                    label="Last Name"
                                    name="lastName"
                                    type="search">
                                </TextField>
                            </Grid>
                        </Grid>
                        <Grid Item>
                            <TextField sx={{ width: 405 }}
                                required
                                id="signupEmail"
                                label="Email"
                                name="email"
                                type="search">
                            </TextField>
                        </Grid>
                        <Grid Item>
                            <TextField sx={{ width: 405 }}
                                required
                                id="signupPassword"
                                label="Password"
                                name="password"
                                type="search">
                            </TextField>
                        </Grid>
                        <Grid Item>
                            <TextField sx={{ width: 405 }}
                                required
                                id="signupConfirmPassword"
                                label="Confirm Password"
                                name="confirmPassword"
                                type="search">
                            </TextField>
                        </Grid>
                        <Grid Item>
                            <Button variant='contained' sx={{ width: 405 }}>SIGN UP</Button>
                        </Grid>
                        <Grid Item sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignSelf:'flex-end' }}>
                            <Grid Item>
                                <Link>Already have an account? Sign in</Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </div>
    )
}

export default Signup