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

export const ControlledInput = () => {
    const [value, setValue] = useState('')
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return <input value={value} onChange={onChangeHandler}/>
}

export const ControlledCheckbox = () => {
    const [checked, setChecked] = useState(false)
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setChecked(e.currentTarget.checked)
    }
    return <input type="checkbox" checked={checked} onChange={onChangeHandler}/>
}

export const ControlledSelect = () => {
    const [value, setValue] = useState("1")
    const onChangeHandler = (e:ChangeEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value)
    }
    return <select onChange={onChangeHandler} value={value}>
        <option value={"1"}>Value 1</option>
        <option value={"2"}>Value 2</option>
        <option value={"3"}>Value 3</option>
    </select>
}
