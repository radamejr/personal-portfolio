import { Box, AppBar, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

export interface TopBarComponentProps {
    openDrawer: (event: React.KeyboardEvent | React.MouseEvent) => void
}
const TopBarComponent = (props: TopBarComponentProps) => {
    const { openDrawer } = props;
    return(
        <Box sx={{ flexGrow: 1}}>
            <AppBar position="static">
            <Toolbar variant="regular">
                <IconButton onClick={openDrawer} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>
            </Toolbar>
            </AppBar>
        </Box>
    )
}

export default TopBarComponent