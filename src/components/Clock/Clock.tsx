import React, {useEffect, useState} from 'react';

type PropsType = {}

const get2digintsString = (num: number) => num < 10 ? "0" + num : num;

const Clock: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date())

    useEffect( () => {
        const intervalID = setInterval( () => {
            setDate(new Date())
        }, 1000)

        return () => clearInterval(intervalID)
    }, [])

    return (
        <div>
            <span>{get2digintsString(date.getHours())}</span>
            :
            <span>{get2digintsString(date.getMinutes())}</span>
            :
            <span>{get2digintsString(date.getSeconds())}</span>
        </div>
    );
};

export default Clock;
