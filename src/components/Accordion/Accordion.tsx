import React from "react";

type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (value: boolean) => void
    items: ItemType[]
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {

    return <div>
        <AccordionTitle title={props.title} collapsed={props.collapsed} setCollapsed={props.setCollapsed}/>
        {!props.collapsed && <AccordionBody items={props.items}  onClick={props.onClick}/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (value: boolean) => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={() => props.setCollapsed(!props.collapsed)}>{props.title}</h3>
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return <div>
        <ul>
            {
                props.items.map( (el, index) => <li key={index} onClick={ () => props.onClick(el.value) }>{el.title}</li>)
            }
        </ul>
    </div>
}

export default Accordion;