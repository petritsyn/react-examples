import React, {useState} from 'react';
import s from './OnOff.module.css';

const on = s.button + ' ' + s.on;
const off = s.button + ' ' + s.off;
const empty = s.button;
const bulbOn = s.bulb + ' ' + s.on;
const bulbOff = s.bulb + ' ' + s.off;

const OnOff = () => {

    let [value, setValue] = useState(false);

    return (
        <div className={s.OnOff}>
            <div className={value ? on : empty} onClick={ () => setValue(true)}>ON</div>
            <div className={value ? empty : off}  onClick={ () => setValue(false)}>OFF</div>
            <div className={value ? bulbOn : bulbOff}></div>
        </div>
    );
};

export default OnOff;