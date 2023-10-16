import { Typography, Box, Paper, TextField, Grid, Button, Avatar, FormControlLabel, FormGroup, Checkbox, Link } from '@mui/material'
import React from 'react'
import lock from '../static/images/avatars/lock.png'
import traveling from '../static/images/avatars/traveling.png'

const Signin = () => {
    return (
        <div id="login">
            <Grid sx={{display: 'flex', flexDirection: 'row', justifyContent:'space-evenly'}}>
                <Grid Item xs={6}>
                    <Avatar src={traveling} variant="square" sx={{ width: 400, height: 500, mt: 10 }} />
                </Grid>
                <Grid Item xs={6}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 5 }}>
                        <Paper elevation={0} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', m: 10 }}>
                            <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
                                <Grid Item>
                                    <Avatar alt='lockImage' src={lock}></Avatar>
                                </Grid>
                                <Grid Item>
                                    <Typography sx={{ fontSize: 25 }}>Sign in</Typography>
                                </Grid>
                                <Grid Item>
                                    <TextField sx={{ width: 405 }}
                                        required
                                        id="signinEmail"
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
                                        type="password">
                                    </TextField>
                                </Grid>
                                <Grid Item sx={{ display: 'flex', flexDirection: 'column', alignSelf: 'flex-start' }}>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Remember me" />
                                    </FormGroup>
                                </Grid>
                                <Grid Item>
                                    <Button variant='contained' sx={{ width: 405 }}>SIGN IN</Button>
                                </Grid>
                                <Grid Item sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 5 }}>
                                    <Grid Item>
                                        <Link>Forgot password?</Link>
                                    </Grid>
                                    <Grid Item>
                                        <Link>Don't have an account? Sign Up</Link>
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

export default Signin