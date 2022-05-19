import {UncontrolledRating} from "./UncontrolledRating";
import {action} from "@storybook/addon-actions";

export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating
}

export const EmptyRating = () => <UncontrolledRating defaultValue={1}/>;
export const Rating1 = () => <UncontrolledRating defaultValue={1}/>;
export const Rating2 = () => <UncontrolledRating defaultValue={2}/>;
export const Rating3 = () => <UncontrolledRating defaultValue={3}/>;
export const Rating4 = () => <UncontrolledRating defaultValue={4}/>;
export const Rating5 = () => <UncontrolledRating defaultValue={5}/>;
