import React from 'react'
import { AppBar, Toolbar, Typography, Tab, Tabs, useMediaQuery, useTheme, Button } from '@mui/material'
import DrawerComponent from './DrawerComponent';


const Header = () => {
    const pages = { 'Home': '#home', 'About Us': '#aboutus', 'Destinations': '#destinations', 'Contact': '#contact', 'Signup': '#signup', 'Login': '#login' }
    const [value, setValue] = React.useState();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    function autoScroll() {
        setTimeout(() => {
            window.scrollBy(0, -140);
        }, [0])


    }

    return (
        <>
            <AppBar elevation={0} position='fixed' sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                <Toolbar>
                    <Button href="#" sx={{ textTransform: 'none' }}>
                        <Typography sx={{ color: 'black', fontWeight: 500, fontSize: 20 }}>Travel Diary<span style={{ color: 'white' }}>/</span></Typography>
                    </Button>
                    {
                        isMatch ? (
                            <DrawerComponent />
                        ) : (
                            <Tabs sx={{ marginLeft: 'auto' }} value={value}
                                onChange={(e, value) => {
                                    autoScroll();
                                    setValue(value);

                                }} TabIndicatorProps={{
                                    style: {
                                        backgroundColor: "#97FEED"
                                    }
                                }} textColor='white'>
                                {
                                    Object.entries(pages).map(([key, value]) => (
                                        <Tab
                                            sx={{
                                                fontSize: 15,
                                                transition: '0.4s',
                                                color: 'black',
                                                textTransform: 'none',
                                                ':hover': {
                                                    color: 'white'
                                                }
                                            }}
                                            key={key}
                                            label={key}
                                            href={value}
                                        >
                                        </Tab>
                                    ))
                                }
                            </Tabs>
                        )
                    }
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header