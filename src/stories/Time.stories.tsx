import React, {useEffect, useState} from "react";

export default {
    title: 'Time'
}

export const Time = () => {

    const [time, setTime] = useState('0')

    useEffect( () => {
        setInterval( () => {
            setTime( state => `Time ${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`)
        }, 1000)
    }, [])

    return <div>
        {time}
    </div>
}