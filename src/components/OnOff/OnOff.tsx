import React, {FC} from 'react';
import s from './OnOff.module.css';

type OnOffPropsType = {
    value: boolean
}

const OnOff: FC<OnOffPropsType> = (props) => {
    return (
        <div className={s.OnOff}>
            {props.value ? <div className={s.button + ' ' + s.on}>ON</div> : <div className={s.button}>ON</div>}
            {!props.value ? <div className={s.button + ' ' + s.off}>OFF</div> : <div className={s.button}>OFF</div>}
            {props.value ? <div className={s.bulb + ' ' + s.on}> </div> : <div className={s.bulb + ' ' + s.off}> </div>}
        </div>
    );
};

export default OnOff;