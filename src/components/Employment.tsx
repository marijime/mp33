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
const Stylefont = styled.div`
    font-size: calc(10px + 1vw);
`

export default function Employment() {
    return (

        <StyleMain>
            <Stylefont>
            <h2><b>Employment</b></h2>

            <h3>Jobs</h3>
            <StyleImage src="job.png" alt="code pic"/>

            <p> In 2021 the summer before college I was a part of the <b>Virtual summer enrichment program with the
                Career & Technical education team at CPS Internship</b> in chicago the CTE (career and technical
                education)
                help students explore different pathways with hands-on experience. Virtual CTE internship using online
                programming to create games. This is a developmental internship for future engineers. This helped
                develop
                coding skills and group project-based work with high school students in Chicago.

            </p>
            <br/>
            <p><b>CASA NORTE(2022)</b> a Nonprofit organization helping youth and communities in chicago
                confronting homelessness. Providing accessibility for housing and comprehensive services.
            </p>
            <br/>
            <p>
                <b>American Girl Doll (2023)</b> as a seasonal position in retail. The store works with kids of all
                ages to put a smile on their face and give them a doll that represents themselves.
            </p>

            <br/>
            <p><b>Telefund (2023 - Present) </b> The Student Philanthropy Center is home to the BU Telefund program. BU
                Telefund provides student callers the opportunity to learn about the importance of philanthropy, alumni
                engagement, and how they can inspire others in the BU community to give back. This is a work-study
                position and is my current employment.
            </p>
                </Stylefont>
        </StyleMain>
    )
}