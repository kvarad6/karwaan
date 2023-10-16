import React from 'react'
import { AppBar, Toolbar, Typography, Tab, Tabs, useMediaQuery, useTheme, Button } from '@mui/material'
import DrawerComponent from './DrawerComponent';
import { Link } from 'react-router-dom';



const Header = () => {
    const pages = ['Home', 'AboutUs', 'Destinations', 'Contact', 'Signup', 'Login']

    const [value, setValue] = React.useState();

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    // function autoScroll() {
    //     setTimeout(() => {
    //         window.scrollBy(0, -140);
    //     }, [0])
    // }

    return (
        <>
            <AppBar elevation={0} position='fixed' sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                <Toolbar>
                    <Button href="#" sx={{ textTransform: 'none' }}>
                        <Typography sx={{ color: 'black', fontWeight: 500, fontSize: 20 }}>Karwaan<span style={{ color: 'white' }}></span></Typography>
                    </Button>
                    {
                        isMatch ? (
                            <DrawerComponent />
                        ) : (
                            <Tabs sx={{ marginLeft: 'auto' }} value={value}
                                onChange={(e, value) => {
                                    setValue(value);

                                }} TabIndicatorProps={{
                                    style: {
                                        backgroundColor: "#97FEED"
                                    }
                                }} textColor='white'>
                                {
                                    pages.map((page) => (
                                        <Link to={`/${page}`}>
                                            <Tab sx={{
                                                fontSize: 15,
                                                transition: '0.4s',
                                                color: 'black',
                                                textTransform: 'none',
                                                ':hover': {
                                                    color: 'white'
                                                }
                                            }} key={page} label={page}>
                                                {/* <Link to={`/${page}`}>
                                                {page}
                                            </Link> */}

                                            </Tab>
                                        </Link>

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