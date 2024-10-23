import { styled } from "styled-components"

const Styledfooter= styled.footer`
    padding: 1% 3%;
    background-color:gray;
    margin:auto;
    
    
    @media screen and (max-width: 1200px) {
        background:gray;
        
    }
`

export default function Footer() {
    return (
        <Styledfooter>
        <p>All rights reserved by Marisol Jimenez: <a href="">Credits</a> &#169;</p>
        </Styledfooter>
)
}