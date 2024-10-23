import { useState} from 'react';

export default function useCalc() {
    const [firstNumber, setFirstNumber] = useState("");
    const [secondNumber, setSecondNumber] = useState("");
    const [result, setResult] = useState("Results");
    const [color, setColor] = useState("");


    const display = (value: string | number) => {
        setResult(value.toString());
        if (typeof value === "number" && value < 0) {
            setColor("red"); // Change to red if the value is negative
        } else {
            setColor("black"); // Change to black otherwise
        }
    };

    const addition =() => {
        console.log("Adding numbers...");
        const sum = Number(firstNumber) + Number(secondNumber);
        display(sum);
    }

    const subtract =() => {
        const sub = Number(firstNumber) - Number(secondNumber);
        display(sub);
    }

    const multiplication =() => {
        const product = Number(firstNumber) * Number(secondNumber);
        display(product)
    }

    const division =() => {
        if (Number(secondNumber) != 0) {
            const div = Number(firstNumber) / Number(secondNumber);
            display(div)
        }
        else{
            display("Error: You Can Not divide by 0");

        }
    }

    const mypow =() => {
        let startNumber=1;
         for(let i=1;i<=Number(secondNumber);i++){
             startNumber = Number(firstNumber) * startNumber;
         }
        display(startNumber);
    }
    const clearVal=() => {
        setFirstNumber("");
        setSecondNumber("");
        setResult("Results");
    }

    return {
        firstNumber,
        setFirstNumber,
        secondNumber,
        setSecondNumber,
        result,
        color,
        addition,
        subtract,
        multiplication,
        division,
        mypow,
        clearVal,
        };


}




