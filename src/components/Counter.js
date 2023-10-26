import React, {useState} from 'react';
import {MyButton} from "./MyButton";

export function Counter(props) {
    const {name} = props;
    const [counter, setCounter] = useState(0);

    return <div className="my-3 py-2 border border-secondary">
        <div>de waarde van {name} is {counter}</div>
        <div>
            <MyButton onClick={() => setCounter(0)}>clear </MyButton>
            <MyButton onClick={() => setCounter(counter - 1)}>- </MyButton>
            <MyButton onClick={() => setCounter(counter + 1)}>+ </MyButton>
        </div>
    </div>;
}

