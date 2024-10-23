import {styled} from "styled-components";
import useCalc from "./Calc";
import * as React from "react";

const StyleMain = styled.main`
    height: 100%;
    background: #7a8e8bFF;
    width: 80%;

    @media screen and (max-width: 750px) {
        width: 100%;
    }
`

const StyleLink = styled.a`
    list-style-type: none; 
    display: inline-block; 
    text-decoration: none;
    color: white;
`
const StyleButton = styled.button`
    background-color: #008CBA;
    font-family: 'Great Vibes', cursive, sans-serif;
`
const StyleLabel = styled.label`
    font-family: 'Great Vibes', cursive, sans-serif;
`

export default function Projects() {
    const {
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
    } = useCalc()

    return (
        <>
            <StyleMain>


                <img src="project411.png" alt="project pic"/>

                <br/>
                <p>This was a project that I completed last semester when I took CS:411 my group decided to make a
                    travel
                    journal, here you can find a link to <StyleLink
                        href="https://github.com/LamarAlSubhi/411">Github</StyleLink> where the
                    project is made public. I hope you enjoy!</p>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h3><b>Calculator</b></h3>

                <StyleLabel>Enter a number: </StyleLabel>

                <input
                    id="first"
                    type="number"
                    value={firstNumber}
                    onChange={e => setFirstNumber(e.target.value)}
                />

                <StyleLabel>Enter Second number:</StyleLabel>
                <input
                    id="second"
                    type="number"
                    value={secondNumber}
                    onChange={e => setSecondNumber(e.target.value)}
                />

                    <StyleButton onClick={addition}>+</StyleButton>
                    <StyleButton onClick={subtract}>-</StyleButton>
                    <StyleButton onClick={multiplication}>*</StyleButton>
                    <StyleButton onClick={division}>/</StyleButton>
                    <StyleButton onClick={mypow}>**</StyleButton>
                    <StyleButton onClick={clearVal}>clear</StyleButton>

                <div id="display_results">
                    <h4 style={{color}}>{result}</h4>
                </div>

            </StyleMain>

        </>
    )
}