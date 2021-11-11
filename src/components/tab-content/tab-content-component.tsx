
type options = 'professional' | 'personal' | 'skills'

export interface TabContentComponentProps {
    type: options;
}

const TabContentComponent = (props: TabContentComponentProps) => {
    const { type } = props;
    //TODO: Setup skills json, return tabs based on input
    if(type === "professional"){
        return(
           null 
        )
    } else if(type === 'personal'){
        return (null)
    }
    return (
        null
    )
}

export default TabContentComponent