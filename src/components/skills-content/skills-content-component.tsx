import { AppBar, Box, Tab, Tabs, Typography, useTheme } from "@mui/material";
import SwipeableViews from 'react-swipeable-views';
import React from "react";
import './skills-content.css'
import TabContentComponent from "../tab-content/tab-content-component";

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
  }

const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;
    return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`full-width-tabpanel-${index}`}
          aria-labelledby={`full-width-tab-${index}`}
          {...other}
        >
          {value === index && (
            <Box sx={{ p: 3 }}>
              <Typography>{children}</Typography>
            </Box>
          )}
        </div>
      );
}

const a11yProps =(index: number) => {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

export interface SkillsContentComponentProps {
  deviceType: string;
}
const SkillsContentComponent = (props: SkillsContentComponentProps) => {
    const { deviceType } = props;
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };

    return (
        <Box className={`skills-container ${deviceType}`} sx={{ bgcolor: 'background.paper' }}>
            <AppBar position="static" sx={{ 
                  backgroundColor: 'black'
                }}>
                <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="inherit"
                variant="fullWidth"
                aria-label="skills tabs"
                >
                  <Tab label="Professional" {...a11yProps(0)} />
                  <Tab label="Personal" {...a11yProps(1)} />
                  <Tab label="Skills" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                  <TabContentComponent deviceType={deviceType} type="professional" />
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                  <TabContentComponent deviceType={deviceType} type="personal" />
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                  <TabContentComponent deviceType={deviceType} type="skills" />
                </TabPanel>
            </SwipeableViews>
            </Box>
    )
}

export default SkillsContentComponent