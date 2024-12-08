import { useState } from "react";

export function Calculator() {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [result, setResult] = useState(null);

    const handleInput1Change = (e) => setInput1(e.target.value);
    const handleInput2Change = (e) => setInput2(e.target.value);

    const add = () => setResult(parseFloat(input1) + parseFloat(input2));
    const subtract = () => setResult(parseFloat(input1) - parseFloat(input2));
    const multiply = () => setResult(parseFloat(input1) * parseFloat(input2));
    const divide = () => setResult(parseFloat(input1) / parseFloat(input2));

    return (
        <div>
            <h1>Simple Calculator</h1>
            <input type="number" value={input1} onChange={handleInput1Change} placeholder="Input 1" />
            <input type="number" value={input2} onChange={handleInput2Change} placeholder="Input 2" />
            <div>
                <button onClick={add}>Add</button>
                <button onClick={subtract}>Subtract</button>
                <button onClick={multiply}>Multiply</button>
                <button onClick={divide}>Divide</button>
            </div>
            {result !== null && <h2>Result: {result}</h2>}
        </div>
    );
}
