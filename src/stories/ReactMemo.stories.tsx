import React, {useState} from "react";

export default {
    title: 'React.Memo demo'
}

const Users = React.memo(function Users() {
    console.log('users')
    const [users, setUsers] = useState(['Anna', 'Alina', 'Sergey'])
    return <>
        {
            users.map((el, i) => <div key={i}>{el}</div>)
        }
    </>
})

export const Example = () => {
    console.log('example')
    const [counter, setCounter] = useState(0)
    return <>
        <Users/>
        {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
}