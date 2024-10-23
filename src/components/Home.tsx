import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";
import {styled} from "styled-components";


const StyleMain = styled.main`
    height: 100%;
    background: #7a8e8bFF;
    width: 80%;

    @media screen and (max-width: 750px) {
        width: 100%;
    }
`
const Stylefont = styled.div`
    font-size: calc(10px + 1vw);
`

const StyleImage = styled.img`
    max-width: 100%;
    width: auto;
    height: auto;
    max-height: 300px;

    @media screen and (max-width: 750px) {
        max-width: 100%;
    }

`

export default function Home(){
    return(
        <>
            <StyleMain>
                <Stylefont>
                <h2><b>Home</b></h2>
                 <StyleImage src="profile-pic.jpg" alt="profile pic"/>




                    <h3>About Me</h3>
                <br/>

                 <p> My name is Marisol Jimenez, I am currently a senior studying Computer Science & Economics at
                Boston University. I am a part of the joint degree program. Originally from Chicago, Illinois. I am fluent in
                spanish
                 and english.
                 I have experience working with different coding and data software such as python, java, javascript, and stata
                have
                 been living here in
                 Boston the past 3 years. I hope to use my degree and find a job involving both
                 computer science and economics.</p>
                 <br/>
                 <p>
                 Welcome to my website, here you will find
                     my <b><i>Educational</i></b> and <b><i>Employment</i></b> history; as well as other information
                     that might be of interest to you.
                 </p>
                </Stylefont>

            </StyleMain>


        </>


    )


}