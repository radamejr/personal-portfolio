import { Card } from '@mui/material'
import pictureOfMePath from '../../assets/radame.jpg'
import './drawer-content.css'
import details from '../../assets/details.json'

const DrawerContentComponent = () => {
    return (
        <Card sx={{ backgroundColor: "grey"}}className="about" variant="outlined" >
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