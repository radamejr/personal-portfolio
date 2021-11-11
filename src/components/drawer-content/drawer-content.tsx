import { Card } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import pictureOfMePath from '../../assets/radame.jpg'
import details from '../../assets/details.json'
import './drawer-content.css'

export interface DrawerComponentProps {
    closeDrawer: (event: React.KeyboardEvent | React.MouseEvent) => void
}
const DrawerContentComponent = (props: DrawerComponentProps) => {
    const { closeDrawer } = props;
    return (
        <Card sx={{ backgroundColor: "grey"}}className="about" variant="outlined" >
            <div className="close">
                <IconButton onClick={closeDrawer} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <CloseIcon />
                </IconButton>
            </div>
            <div className="image">
                <img src={pictureOfMePath} alt="me" className="profile-picture" />
            </div>
            <div className="title name">
                {details.name}
            </div>
            <div className="title">
                {details.title}
            </div>
            <div className="description">
                {details.description}
            </div>
            <div className="description">
                {details.interests}
            </div>
            <div className="contact">
                <ul>
                    <li><a href="mailto:radamejr@gmail.com">Email</a></li>
                    <li><a target="_blank" rel="noreferrer" href={details.linkedIn}>LinkedIn</a></li>
                    <li><a target="_blank" rel="noreferrer" href={details.github}>GitHub</a></li>
                </ul>
            </div>
        </Card>
    )
};

export default DrawerContentComponent