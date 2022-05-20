import {ChangeEvent, useRef, useState} from "react";

export default {
    title: 'input'
}

export const UncontrolledInput = () => <input/>;

export const TrackValueOfControlledInput = () => {
    const [value, setValue] = useState('');
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    }
    return <>
        <input onChange={onChangeHandler}/> -
        {value}
    </>
}

export const TrackValueOfUncontrolledInputButtonPress = () => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const onClickHandler = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }

    return <>
        <input ref={inputRef}/>
        <button onClick={onClickHandler}>Button</button>
        {value}
        </>
}