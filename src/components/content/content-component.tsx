
import { Box, AppBar, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import React from 'react';
import DrawerContentComponent from '../drawer-content/drawer-content';
import './content.css'

const ContentComponent = () => {
    const [state, setState] = React.useState({
        enabled: true,
      });
      
    const toggleDrawer =
        (open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            console.log('toggled')
          if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
              (event as React.KeyboardEvent).key === 'Shift')
          ) {
            return;
          }
          
          setState({ enabled: open });
        };
    return (
        <div className="content-nav-bar">
            <Box sx={{ flexGrow: 1}}>
                <AppBar position="static">
                <Toolbar variant="regular">
                    <IconButton onClick={toggleDrawer(true)} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                    </IconButton>
                </Toolbar>
                </AppBar>
            </Box>
            <Drawer
                sx={{ 
                    width: '30%',
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: '30%',
                        boxSizing: 'border-box',
                    },
                }}
                anchor="left"
                open={state.enabled}
                onClose={toggleDrawer(false)}
                className="drawer-content"
            >
                <DrawerContentComponent />
            </Drawer>
            <div className="details">
                Carousel: AerialSphere, JsFiddles AerialSphere, Languages/Tools, Framehameha
                Centered, large, images/details
            </div>            
        </div>
          
        
    )
};

export default ContentComponent