import React, {useState} from 'react';
import s from './OnOff.module.css';

const on = s.button + ' ' + s.on;
const off = s.button + ' ' + s.off;
const empty = s.button;
const bulbOn = s.bulb + ' ' + s.on;
const bulbOff = s.bulb + ' ' + s.off;

type OnOffPropsType = {
    valueOnOff: boolean
    setValueOnOff: (value: boolean) => void
}

const OnOff = (props: OnOffPropsType) => {

    return (
        <div className={s.OnOff}>
            <div className={props.valueOnOff ? on : empty} onClick={ () => props.setValueOnOff(true)}>ON</div>
            <div className={props.valueOnOff ? empty : off}  onClick={ () => props.setValueOnOff(false)}>OFF</div>
            <div className={props.valueOnOff ? bulbOn : bulbOff}></div>
        </div>
    );
};

export default OnOff;