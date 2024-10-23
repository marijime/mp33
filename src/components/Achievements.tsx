import {styled} from "styled-components";


const StyleMain = styled.main`
    height: 100%;
    background: #7a8e8bFF;
    width: 80%;

    @media screen and (max-width: 750px) {
        width: 100%;
    }
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
const Imagecontainer = styled.div`
    display: flex;
    flex-wrap: wrap; /* Allows images to wrap onto the next row */
    justify-content: space-evenly; /* Evenly spaces out the images */
    
`
const Stylefont = styled.div`
    font-size: calc(10px + 1vw);
`


export default function Achievements() {
    return (
        <StyleMain>
            <Stylefont>
            <h2><b>Achievements</b></h2>
            <Imagecontainer>

                <StyleImage src="breadboard.jpg" alt="logo pic"/>
                <StyleImage src="class.jpg" alt="class pic"/>

                {/*<br/>*/}

                <StyleImage src="engine.jpg" alt="engine pic"/>
                <StyleImage src="robot.jpg" alt="robot pic"/>

            </Imagecontainer>
            <br/>

            <p>
                The Summer before quarantine started I was given the opportunity to come to Boston for the very first
                time.
                I was in a summer program at WPI Worcester Polytechnic Institute where for two weeks we were immerse
                with
                a program of our choosing which was mechanical engineering. This also helped me gain scholarships
                such
                as the ones listed below.
            </p>
            <br/>

            <h3>Awards</h3>
            <br/>
            <p> Schuler Scholar program</p>
            <br/>
            <p> Baxter International Scholarship </p>
            <br/>
            <p>Boeing Scholarship</p>
            </Stylefont>
        </StyleMain>
    )
}