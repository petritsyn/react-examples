import React, {Dispatch, SetStateAction, useState} from 'react';
import s from './Select.module.css'

type SelectPropsType = {
    options: string[]
}

const Select = (props: SelectPropsType) => {

    const [collapsed, setCollapsed] = useState(true);
    const [firstValue, setFirstValue] = useState(props.options[0])

    const onClickSelectHandler = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div className={s.main} onClick={onClickSelectHandler}>
            <div className={s.inputItem}>{firstValue}</div>
            {!collapsed && <SelectItem options={props.options} collapsed={collapsed} setCollapsed={setCollapsed}
                                       setFirstValue={setFirstValue}/>}
        </div>
    );
};

type SelectItemPropsType = {
    options: string[]
    collapsed: boolean
    setCollapsed: Dispatch<SetStateAction<boolean>>
    setFirstValue: Dispatch<SetStateAction<string>>
}

const SelectItem = (props: SelectItemPropsType) => {

    const onClickItemHandler = (index: number) => {
        props.setCollapsed(!props.collapsed)
        props.setFirstValue(props.options[index])
    }

    return <div>
        {
            props.options.map((el, index) => {
                return <div onClick={() => onClickItemHandler(index)} key={index} className={s.inputItem}>{el}</div>
            })
        }
    </div>
}

export default Select;