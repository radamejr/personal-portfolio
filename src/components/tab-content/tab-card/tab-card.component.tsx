import { Card } from "@mui/material";
import './tab-card.css'

export interface TabCardComponentProps {
    name: string;
    description: string;
    responsibilities: string[];
    website: string;
    deviceType: string;
    examples?: string[];
}

const TabCardComponent = (props: TabCardComponentProps) => {
    const { name, description, responsibilities, website, examples, deviceType } = props;
    return (
        <Card className={`tab-content ${deviceType}`} >
            <div className="tab-name">
                {name}
            </div>
            <div className="tab-description">
                {description}
            </div>
            <br />
            <div className="responsibilities">
                Responsibilities:
            </div>
            <ul className="tab-list">
                {responsibilities.map((task, index) => {
                    return (
                        <li key={index}>
                            {task}
                        </li>
                    )
                })}
            </ul>
            <div className="tab-visit">
                Visit some of the following link(s) to see the work in action:
                <br />
                <a href={website} rel="noreferrer" target="_blank">{name}</a> 
                <br />
                {examples?.map((example, index) => {
                    return (
                        <div key={index}>
                            <a href={example} rel="noreferrer" target="_blank">Viewer Example {index + 1}</a>
                            <br />
                        </div>
                    )
                })}
            </div>
        </Card>
    )
}

export default TabCardComponent