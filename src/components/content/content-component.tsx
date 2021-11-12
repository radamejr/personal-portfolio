
import Drawer from '@mui/material/Drawer';
import React from 'react';
import DrawerContentComponent from '../drawer-content/drawer-content';
import SkillsContentComponent from '../skills-content/skills-content-component';
import TopBarComponent from '../top-bar/top-bar.component';
import './content.css'

export interface ContentComponentProps {
    deviceType: string;
}

const ContentComponent = (props: ContentComponentProps) => {
    const { deviceType } = props;
    const [state, setState] = React.useState({
        enabled: true,
      });
    const width = (deviceType === 'mobile') ? '75%' : (deviceType === 'tablet') ? '50%': '30%';
    const toggleDrawer =
        (open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
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
                    width: width,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: width,
                        boxSizing: 'border-box',
                    },
                }}
                anchor="left"
                open={state.enabled}
                onClose={toggleDrawer(false)}
                className="drawer-content"
            >
                <DrawerContentComponent deviceType={deviceType} closeDrawer={toggleDrawer(false)}/>
            </Drawer>
            <div className="details">
                <SkillsContentComponent deviceType={deviceType}/>
            </div>            
        </div>
          
        
    )
};

export default ContentComponent