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

    console.log('UncontrolledAccordion rendering')

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

const AccordionTitle = React.memo(function AccordionTitle(props: AccordionTitlePropsType) {

    console.log('AccordionTitle rendering')

    return <h3 onClick={props.onClick}>{props.title}</h3>
})

const AccordionBody = React.memo(function AccordionBody() {

    console.log('AccordionBody rendering')

    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
})

export default UncontrolledAccordion;