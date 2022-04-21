import React, {useState} from "react";

type AccordionPropsType = {
    title: string
}

function Accordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false);

    return <div onClick={() => setCollapsed(!collapsed)}>
        <AccordionTitle title={props.title}/>
        {!collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3>{props.title}</h3>
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

export default Accordion;