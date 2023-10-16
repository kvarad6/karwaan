import React from 'react'
import { Box, Button, Typography, Grid, CardActionArea, Card, CardMedia, CardContent, Link,  } from '@mui/material'

import carImage from '../static/images/cards/carImage.png'
import cameraImage from '../static/images/cards/cameraImage.png'
import worldMap from '../static/images/cards/worldMap.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';


const Home = () => {

    return (
        <>
            <Box sx={{ width: '100%', height: 600, backgroundImage: 'url("/road.jpg")', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 20, gap: 5 }}>
                    <Grid Item>
                        <Typography sx={{ fontSize: 50, textAlign: 'center' }}>It's a big world. Let's explore it</Typography>
                    </Grid>
                    <Grid Item sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 10 }}>
                        <Grid Item>
                            <Button variant="contained">Read Blog</Button>
                        </Grid>
                        <Grid Item>
                            <Button variant="contained">Destinations</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ width: '100%', height: 600 }}>
                <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', gap: 60 }}>
                    <Grid Item xs={6}>
                        <Typography sx={{ fontSize: 30 }}>Hello Fellow Travelers!!</Typography>
                    </Grid>
                    <Grid Item xs={6}>
                        Image | vertical
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ width: '100%', height: 400 }}>
                <Typography sx={{ fontSize: 25, textAlign: 'center', mb: 10 }}>Featured</Typography>
                <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 10 }}>
                    <Grid Item xs={4}>
                        <Card sx={{ height: 230, width: 250 }}>
                            <CardActionArea />
                            <CardMedia
                                component="img"
                                height="140"
                                image={carImage}
                                alt="green iguana"
                            >
                            </CardMedia>
                            <CardContent>
                                <Typography>Top travel destinations for Summer 2023</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid Item xs={4}>
                        <Card sx={{ height: 230, width: 250 }}>
                            <CardActionArea />
                            <CardMedia
                                component="img"
                                height="140"
                                image={cameraImage}
                                alt="green iguana"
                            >
                            </CardMedia>
                            <CardContent>
                                <Typography>Best Instagram photo spots in London</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid Item xs={4}>
                        <Card sx={{ height: 230, width: 250 }}>
                            <CardActionArea />
                            <CardMedia
                                component="img"
                                height="140"
                                image={worldMap}
                                alt="green iguana"
                            >
                            </CardMedia>
                            <CardContent>
                                <Typography>Complete guide for your first backpacking trip</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ width: '100%', height: 500, backgroundImage: 'url("/globeImage.png")', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                <Typography sx={{ fontSize: 35, color: 'white', textAlign: 'center', pt: 10 }}>Join our community</Typography>
            </Box>
            <Box sx={{ width: '100%', height: 300, bgcolor: 'black', pt: 5 }}>
                <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <Grid Item xs={3}>
                        <Typography sx={{ fontSize: 25, color: 'white' }}>Karwaan</Typography>
                        {/* <Typography sx={{ fontSize: 15, color: 'white' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</Typography> */}
                    </Grid>
                    <Grid Item xs={3}>
                        <Typography sx={{ fontSize: 20, color: 'white' }}>Get in touch</Typography>
                        <Grid sx={{display:'flex', flexDirection:'row', gap:2}}>
                            <Grid Item xs={4}>
                                <Link href="https://www.linkedin.com/in/varad-kulkarni-2001/" target="_blank">
                                    <LinkedInIcon fontSize='large' sx={{
                                        transition: '0.4s',
                                        color: '#5CD2E6', ':hover': {
                                            boxShadow: 20, // theme.shadows[20]
                                            color: 'white'
                                        }
                                    }} />
                                </Link>
                            </Grid>
                            <Grid Item xs={4}>
                                <Grid Item xs={3}>
                                    <Link href="https://www.instagram.com/_varad.kulkarni_/" target="_blank">
                                        <InstagramIcon fontSize='large' sx={{
                                            transition: '0.4s',
                                            color: '#5CD2E6', ':hover': {
                                                boxShadow: 20, // theme.shadows[20]
                                                color: 'white'
                                            }
                                        }} />
                                    </Link>
                                </Grid>
                            </Grid>
                            <Grid Item xs={4}>
                                <Link href="mailto:kvarad6@gmail.com" target="_blank">
                                    <EmailIcon fontSize='large' sx={{
                                        transition: '0.4s',
                                        color: '#5CD2E6', ':hover': {
                                            boxShadow: 20, // theme.shadows[20]
                                            color: 'white'
                                        }
                                    }} />
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid Item xs={3}>
                        <Typography sx={{ fontSize: 20, color: 'white' }}>Quick Links</Typography>
                    </Grid>
                    <Grid Item xs={3}>
                        <Typography sx={{ fontSize: 20, color: 'white' }}>Our Address</Typography>
                    </Grid>
                </Grid>
            </Box>

        </>
    )
}

export default Home