import React, { useState } from 'react';

const Form = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState()
    const [isValid, setIsValid] = useState(false)

    const handleSubmit = e => {
        e.preventDefault();

        const student = {
            name: name,
            age: age
        }

        fetch("http://localhost:5000/students", {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(student)
        })
            .then(response => response.json())
            .then(response => response)

        setIsValid(true)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
            <button type="submit">Click moi grand fou</button>
        </form>
    );
};

export default Form;