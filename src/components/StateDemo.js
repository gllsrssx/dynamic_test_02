import React, {useState} from 'react';
import {Section} from "./Section";
import {MyButton} from "./MyButton";
import {Counter} from "./Counter";
import {OnOffDemo} from "./OnOffDemo";

function DemoValue(props) {
    const {demoValue, onDemoValueChange} = props;

    return (
        <div className="my-3 py-2 border border-secondary">
            <div>de waarde van demoValue is {demoValue}</div>
            <div>de waarde van demoValue is {demoValue}</div>
            <div>
                <MyButton onClick={() => onDemoValueChange(0)}> SET 0 </MyButton>
                <MyButton onClick={() => onDemoValueChange(77)}> SET 77 </MyButton>
                <MyButton onClick={() => onDemoValueChange(184)}> SET 184 </MyButton>
            </div>
        </div>
    );
}

function DemoValueReadOnly(props) {
    const {demoValue} = props;
    return (
        <div className="my-3 py-2 border border-info">
            <div>demoValue={demoValue}</div>
        </div>
    );
}

function DemoValueIncrement(props) {
    const {demoValue, onDemoValueChange} = props;

    return (
        <div className="my-3 py-2 border border-info">
            <MyButton onClick={() => onDemoValueChange(demoValue + 1)}> demoValue increment</MyButton>
        </div>
    );
}

export function StateDemo(props) {
    const {isInitiallyOpen} = props;
    const [demoValue, setDemoValue] = useState(0);

    return <Section title="state" isInitiallyOpen={isInitiallyOpen}>
        <DemoValue demoValue={demoValue} onDemoValueChange={setDemoValue}/>
        <Counter name="counter1"/>
        <Counter name="counter2"/>
        <OnOffDemo/>
        <DemoValueReadOnly demoValue={demoValue}/>
        <DemoValueIncrement demoValue={demoValue} onDemoValueChange={setDemoValue}/>
    </Section>;
}

