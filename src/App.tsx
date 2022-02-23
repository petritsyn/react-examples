import React from 'react';
import './App.css';
import {log} from "util";

function App() {
    return (
        <div>
            <Rating/>
            <Accordion/>
        </div>
    );
}

function Rating() {
    return <div>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
    </div>

}

function Star() {
    return <div>star</div>
}

function Accordion() {
    return <div>
        <AccordionTitle/>
        <AccordionBody/>
    </div>
}

function AccordionTitle() {
    return <h3>Menu</h3>
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

export default App;
