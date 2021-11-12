import TabCardComponent from "./tab-card/tab-card.component";
import skills from '../../assets/skills.json'
import SkillsCardComponent from "./skills-card/skills-card.component";

type options = 'professional' | 'personal' | 'skills'

export interface TabContentComponentProps {
    type: options;
    deviceType: string;
}

const TabContentComponent = (props: TabContentComponentProps) => {
    const { type, deviceType } = props;
    if(type === "professional"){
        return(
            <TabCardComponent 
                name={skills.professional.name} 
                description={skills.professional.description}
                responsibilities={skills.professional.responsibilities}
                website={skills.professional.website}
                examples={skills.professional.examples}
                deviceType={deviceType}
            />
        )
    } else if(type === 'personal'){
        return (
            <TabCardComponent 
                name={skills.personal.name} 
                description={skills.personal.description}
                responsibilities={skills.personal.responsibilities}
                website={skills.personal.website}
                deviceType={deviceType}
            />
        )
    }
    return (
        <SkillsCardComponent 
            skills={skills.skills.technology}
            deviceType={deviceType}
        />
    )
}

export default TabContentComponent