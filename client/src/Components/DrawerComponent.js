import React from 'react'
import { IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, SwipeableDrawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';

const DrawerComponent = () => {
    const [openDrawer, setOpenDrawer] = React.useState(false);
    const pages = { 'Home': '#home', 'About Us': '#aboutus', 'Destinations': '#destinations', 'Contact': '#contact', 'Signup': '#signup', 'Login': '#login' }
    function autoScroll() {
        setTimeout(() => {
            window.scrollBy(0, -100);
        }, [0])
    }
    return (
        <>
            <SwipeableDrawer anchor={"right"} open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <List sx={{ backgroundColor: 'white', width: 300, height: '100%' }}>
                    <ListItem sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        <IconButton onClick={() => setOpenDrawer(false)} sx={{
                            color: 'black', alignSelf: 'flex-end', ':hover': {
                                color: 'white'
                            }
                        }}>
                            <CancelIcon />
                        </IconButton>
                        {
                            Object.entries(pages).map(([key, value]) => (
                                <ListItemButton
                                    onClick={() => { autoScroll(); setOpenDrawer(false) }}
                                    key={key}
                                    label={key}
                                    href={value}>
                                    <ListItemIcon>
                                        <ListItemText
                                            sx={{
                                                color: 'black',
                                                ':hover': {
                                                    color: 'white'
                                                }
                                            }}>
                                            {key}
                                        </ListItemText>
                                    </ListItemIcon>
                                </ListItemButton>
                            ))
                        }
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)} sx={{ ml: 'auto' }}>
                <MenuIcon sx={{ color: "black" }} />
            </IconButton>
        </>
    )
}

export default DrawerComponent