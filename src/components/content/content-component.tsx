
import Drawer from '@mui/material/Drawer';
import React from 'react';
import DrawerContentComponent from '../drawer-content/drawer-content';
import SkillsContentComponent from '../skills-content/skills-content-component';
import TopBarComponent from '../top-bar/top-bar.component';
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
            <TopBarComponent openDrawer={toggleDrawer(true)}/>
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
                <DrawerContentComponent closeDrawer={toggleDrawer(false)}/>
            </Drawer>
            <div className="details">
                <SkillsContentComponent />
            </div>            
        </div>
          
        
    )
};

export default ContentComponent