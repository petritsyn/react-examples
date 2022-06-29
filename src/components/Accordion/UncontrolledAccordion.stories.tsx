import {action} from "@storybook/addon-actions";
import UncontrolledAccordion from "./UncontrolledAccordion";

export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion
}

const callBack = action('text')

export const ModeChanging = () => {
    return <UncontrolledAccordion title={'Uncontrolled menu'}/>;
}