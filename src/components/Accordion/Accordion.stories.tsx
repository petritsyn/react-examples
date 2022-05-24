import {Accordion, AccordionPropsType} from "./Accordion";
import {useState} from "react";
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion',
    component: Accordion
}

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>

const onClick = action('li was clicked')

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
    setCollapsed: (x => x),
    items: [{title: 'Name 1', value: 1}, {title: 'Name 2', value: 2}, {title: 'Name 3', value: 3}],
    onClick: onClick
}

export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState(true)
    return <Accordion {...args} collapsed={value}
                      setCollapsed={setValue}
                      items={[{title: 'Name 1', value: 1}, {title: 'Name 2', value: 2}, {title: 'Name 3', value: 3}]} onClick={onClick}/>;
}

ModeChanging.args = {
    title: 'Menu'
}