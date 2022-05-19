import {Accordion, AccordionPropsType} from "./Accordion";
import {useState} from "react";
import {Story} from "@storybook/react";

export default {
    title: 'Accordion',
    component: Accordion
}

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>

export const CollapsedMode = Template.bind({});
CollapsedMode.args = {
    title: 'Menu',
    collapsed: true,
    setCollapsed: (x => x)
}

export const UnCollapsedMode = Template.bind({});
UnCollapsedMode.args = {
    title: 'Menu',
    collapsed: false,
    setCollapsed: (x => x)
}

export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState(true)
    return <Accordion {...args} collapsed={value} setCollapsed={setValue}/>;
}

ModeChanging.args = {
    title: 'Menu'
}