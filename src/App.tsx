import React, {useState} from 'react';
import './App.css';
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import {Rating} from "./components/Rating/Rating";
import UncontrolledOnOff from "./components/OnOff/UncontrolledOnOff";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import Accordion from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";
import Input from "./components/Select/Select";
import Clock from "./components/Clock/Clock";

function App() {

    let [ratingValue, setRatingValue] = useState<number>(3);
    let [collapsed, setCollapsed] = useState(false);
    let [valueOnOff, setValueOnOff] = useState(false);

    return (
        <div className="appWrapper">
            <PageTitle title={"This is APP component"}/>
            <UncontrolledAccordion title={"Menu uncontrolled"}/>

            <Accordion title={"Menu"} collapsed={collapsed} setCollapsed={setCollapsed} items={[]} onClick={() => {
            }}/>

            <Rating value={ratingValue} onClick={setRatingValue}/>

            <UncontrolledRating/>

            <UncontrolledOnOff/>
            <OnOff valueOnOff={valueOnOff} setValueOnOff={setValueOnOff}/>

            <Input options={['empty', 'Option 1', 'Option 2', 'Option 3']}/>

            <Clock/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;
