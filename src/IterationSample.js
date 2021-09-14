import React, {useState} from "react";

function IterationSample() {
    const [names, setNames] = useState([1, 2, 3, 4]);
    const [name, setName] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleClick = () => {
        setNames(names.concat(name));
    }

    const handleDoubleClick = (index) => {
        // setNames(names.slice(0, index)
        //     .concat(names.slice(index + 1, names.length)));
        // setNames([
        //     ...names.slice(0, index),
        //     ...names.slice(index + 1, names.length)
        // ])
        // setNames(names.filter((name, i) => {
        //     return i !== index;
        // }))
        setNames(names.filter((name, i) => i !== index))
    }

    const nameList = names.map((name, index) => {
        return (
            <li 
                key={index}
                onDoubleClick={() => {
                    handleDoubleClick(index)
                }}
            >{name}</li>
        )
    });

    return (
        <>
            <input
                onChange={handleChange}
                value={name}/>
            <button
                onClick={handleClick}
            >Add</button>
            {nameList}
        </>
    )
}

export default IterationSample;