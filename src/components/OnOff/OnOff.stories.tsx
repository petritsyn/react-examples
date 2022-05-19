import React, {useState} from 'react';
import OnOff from "./OnOff";

export default {
    title: 'OnOff',
    component: OnOff
}

export const OnMode = () => <OnOff valueOnOff={true} setValueOnOff={() => {}}/>;
export const OffMode = () => <OnOff valueOnOff={false} setValueOnOff={() => {}}/>;

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <OnOff valueOnOff={value} setValueOnOff={setValue}/>
}