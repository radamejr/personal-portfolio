import { Card } from "@mui/material"
import './skills-card.css'

export interface SkillsCardComponentProps {
    skills: string[][]
    deviceType: string;
}
const SkillsCardComponent = (props: SkillsCardComponentProps) => {
    const { deviceType, skills } = props;

    return (
        <Card className="tab-content" >
            <ul className={`skill-list ${deviceType}`}>
                {
                    skills.map((skill) => {
                        return(
                            <li className="skill-list-item">
                                <div className="skill-text">
                                    {skill[0]}
                                </div>
                                <div>
                                    <img className="skill-image" src={skill[1]} alt="technology" />
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </Card>
    )
}

export default SkillsCardComponent