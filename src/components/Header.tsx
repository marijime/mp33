import { styled } from "styled-components"

const StyledHeader = styled.header`
    display: flex;
    width: 100%;
    top: 0;
    left: 0;
    background: #567572FF;
 `

const Name = styled.h1`
    text-align: left;
    font-size: 1.5rem;
    color: black;
`

const Title = styled.h2`
    padding: 0.5rem;
    margin: 1rem;
`


export default function Header() {
    return (
        <StyledHeader>
            <Name>
                <h1> Marisol Jimenez </h1>
                <p> My online Resume</p>
            </Name>

        </StyledHeader>

    )
}
