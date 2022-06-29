import React, {useReducer} from "react";

type AccordionPropsType = {
    title: string
}

type StateType = {
    collapsed: boolean
}

type ActionType = {
    type: string
}

const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case 'TOGGLE-COLLAPSED':
            return {
                ...state,
                collapsed: !state.collapsed
            }
        default:
            return state
    }
}

export function UncontrolledAccordion(props: AccordionPropsType) {

    const [collapsed, dispatch] = useReducer(reducer, {collapsed: false})
    return <div>
        <AccordionTitle title={props.title} onClick={() => dispatch({type: 'TOGGLE-COLLAPSED'})}/>
        {!collapsed.collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.onClick}>{props.title}</h3>
}

function AccordionBody() {
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
}

export default UncontrolledAccordion;