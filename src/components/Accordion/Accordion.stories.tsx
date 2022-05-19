import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";
import {useState} from "react";

export default {
    title: 'Accordion',
    component: Accordion
}

const callBack = action('text')

export const CollapsedMode = () => <Accordion title={'Menu'} collapsed={true} setCollapsed={x => x}/>;
export const UnCollapsedMode = () => <Accordion title={'Menu'} collapsed={false} setCollapsed={x => x}/>;

export const ModeChanging = () => {
    const [value, setValue] = useState(true)
    return <Accordion title={'Menu'} collapsed={value} setCollapsed={setValue}/>;
}